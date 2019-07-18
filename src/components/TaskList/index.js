import React, {Component} from 'react';
import ItemTaskList from '../ItemTaskList'
import ListFooter from '../ListFooter'
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
        <ItemTaskList 
          todolist={item}
          DeleteItem={this.props.DeleteItem}
        />
      </li>
      )
      return (
        <ul className="main__task-list">
          {listItem}
          <ListFooter />
        </ul>
      )
  }
}


export default TaskList;