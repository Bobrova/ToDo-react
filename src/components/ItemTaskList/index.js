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
  }

render() {
  const {todolist} = this.props
  const {DeleteItem} = this.props
      return (
        <div className="listItemWrapper">
            {todolist.completed ? (
              <input type="checkbox" id={todolist.id} className="list-checkbox" checked />
            ):(
              <input type="checkbox" id={todolist.id} className="list-checkbox" />
            )}
            <label htmlFor={todolist.id}></label>
            <Title title={todolist.title}/>
            <BtnDelete onClickDelete={DeleteItem} id={todolist.id}/>
        </div>
      )
  }
}

export default ItemTaskList;