import React, {Component} from 'react';
import Title from '../Title'
import BtnDelete from '../BtnDelete'
import './style.css'

class ItemTaskList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
  }

render() {
  const {todolist} = this.props
  const {DeleteItem} = this.props
      return (
        <div className="listItemWrapper">
            {todolist.completed ? (
              <input type="checkbox" id={todolist.id} className="list-checkbox" checked onClick={this.handleClickCheckbox}/>
            ):(
              <input type="checkbox" id={todolist.id} className="list-checkbox" onClick={this.handleClickCheckbox}/>
            )}
            <label htmlFor={todolist.id}></label>
            <Title title={todolist.title}/>
            <BtnDelete onClickDelete={DeleteItem} id={todolist.id}/>
        </div>
      )
  }

    handleClickCheckbox = () => {
    this.props.CheckedItem(this.props.todolist.id);
}

}

export default ItemTaskList;