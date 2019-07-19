import React, {Component} from 'react';
import Title from '../Title'
import BtnDelete from '../BtnDelete'
import './style.css'

class ItemTaskList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      IdEdit: 0,
      ValueBeforeEdit: ''
    }

    this.handleClickCheckbox = this.handleClickCheckbox.bind(this)
    this.handleEditItem = this.handleEditItem.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleEditItem = (todolist) => {
    this.setState({
      IdEdit: todolist.id,
      ValueBeforeEdit: todolist.title
    })
  }

handleClickCheckbox = () => {
  this.props.CheckedItem(this.props.todolist.id)
}

handleKeyPress = (e) => {
    const ENTER_KEY_CODE = 13;
    const text = e.target.value.trim();
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      if (text !== '' && /\S/.test(text)) {
        e.target.value = '';
        const task = {id: this.props.todolist.id, title: text, completed: this.props.todolist.completed};
        this.props.EditItem(task);
        this.setState({
          IdEdit: 0,
        })
      } 
    }
  }

handleInputBlur = (e) => {
    const text = e.target.value.trim();
    if (text ==='') return this.props.EditItem(this.props.todolist, true);
      e.target.value = '';
      const task = {id: this.props.todolist.id, title: text, completed: this.props.todolist.completed};
      this.props.EditItem(task);
      this.setState({
        IdEdit: 0,
      })
    }

handleInputChange = (e) => {
   this.setState({ValueBeforeEdit: e.target.value});
}

render() {
  const {todolist} = this.props
  const {DeleteItem} = this.props
  const completed = todolist.completed;
  const check = <input type="checkbox" id={todolist.id} checked={completed} className="list-checkbox" onChange={this.handleClickCheckbox}/>
  const isEdit = (todolist.id === this.state.IdEdit);

      return (
        <div className="listItemWrapper">
          {!isEdit && check}
          {!isEdit && <label htmlFor={todolist.id}></label>}
          {!isEdit && <Title todolist={todolist} EditItem={this.handleEditItem}/>}
          {!isEdit && <BtnDelete onClickDelete={DeleteItem} id={todolist.id}/>}
          {isEdit && <input type="text" autoFocus className="text-editing" value={this.state.ValueBeforeEdit} onChange={this.handleInputChange} onKeyDown={this.handleKeyPress} onBlur={this.handleInputBlur}/>}
        </div>   
      )
  }
}

export default ItemTaskList;