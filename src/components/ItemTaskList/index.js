import React, {Component} from 'react';
import Title from '../Title'
import BtnDelete from '../BtnDelete'
import './style.css'

class ItemTaskList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      idEdit: 0,
      valueBeforeEdit: ''
    }

    this.handleClickCheckbox = this.handleClickCheckbox.bind(this)
    this.handleEditItem = this.handleEditItem.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleEditItem = (todolist) => {
    this.setState({
      idEdit: todolist.id,
      valueBeforeEdit: todolist.title
    })
  }

handleClickCheckbox = () => {
  this.props.checkedItem(this.props.todolist.id)
}

handleKeyPress = (e) => {
    const ENTER_KEY_CODE = 13;
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      const text = e.target.value.trim();
      if (text ==='') return this.props.editItem(this.props.todolist, true);
      if (text !== '' && /\S/.test(text)) {
        e.target.value = '';
        const task = {id: this.props.todolist.id, title: text, completed: this.props.todolist.completed};
        this.props.editItem(task);
        this.setState({
          IdEdit: 0,
        })
      } 
    }
  }

handleInputBlur = (e) => {
    const text = e.target.value.trim();
    if (text ==='') return this.props.editItem(this.props.todolist, true);
      e.target.value = '';
      const task = {id: this.props.todolist.id, title: text, completed: this.props.todolist.completed};
      this.props.editItem(task);
      this.setState({
        IdEdit: 0,
      })
    }

handleInputChange = (e) => {
   this.setState({valueBeforeEdit: e.target.value});
}

render() {
  const {idEdit, valueBeforeEdit} = this.state;
  const {todolist, deleteItem} = this.props;
  const completed = todolist.completed;
  const check = <input type="checkbox" id={todolist.id} checked={completed} className="list-checkbox" onChange={this.handleClickCheckbox}/>
  const isEdit = (todolist.id === idEdit);

      return (
        <div className="listItemWrapper">
          {!isEdit && check}
          {!isEdit && <label htmlFor={todolist.id}></label>}
          {!isEdit && <Title todolist={todolist} editItem={this.handleEditItem}/>}
          {!isEdit && <BtnDelete onClickDelete={deleteItem} id={todolist.id}/>}
          {isEdit && <input type="text" autoFocus className="text-editing" value={valueBeforeEdit} onChange={this.handleInputChange} onKeyDown={this.handleKeyPress} onBlur={this.handleInputBlur}/>}
        </div>   
      )
  }
}

export default ItemTaskList;