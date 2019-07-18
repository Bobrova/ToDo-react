import React, {Component} from 'react';
import ItemTaskList from '../ItemTaskList'
import './style.css'

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render() {
    const todoList = this.props.todoList;
    const listItem = todoList.map(item => 
      <li key={item.id} className="list-item">
        <ItemTaskList todolist={item}/>
      </li>
      )
      return (
        <ul className="main__task-list">
          {listItem}
        </ul>
      )
  }
}


export default TaskList;