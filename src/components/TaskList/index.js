import React, {Component} from 'react';
import ItemTaskList from '../ItemTaskList'
import ListFooter from '../ListFooter'
import './style.css'

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      todoList: this.props.todoList,
      tab: 'All'
    }
  }

  handleGetItemsTab = (tab) => {
    this.setState({
          tab: tab
        });
  }

  render() {

    this.getItemsTab = () => {
    switch (this.state.tab) {
      case 'All':  
        return this.props.todoList
      case 'Active':  
        return this.props.todoList.filter(itemList => !itemList.completed)
      case 'Completed':  
        return this.props.todoList.filter(itemList => itemList.completed)
      default: 
        break
    }
  }

    const todoList = this.getItemsTab()
    const listItem = todoList.map(item => 
      <li key={item.id} className="list-item">
        <ItemTaskList 
          todolist={item}
          DeleteItem={this.props.DeleteItem}
          CheckedItem={this.props.CheckedItem}
          EditItem={this.props.EditItem}
          IdEdit={this.props.IdEdit}
        />
      </li>
      )
      

      return (
        <ul className="main__task-list">
          {listItem}
          <ListFooter 
            DeleteCompletedAll={this.props.DeleteCompletedAll}
            countActiveItem={this.props.countActiveItem}
            getItemsTab={this.handleGetItemsTab}
            isCheckedExists={this.props.isCheckedExists}
          />
        </ul>
      )
  }
}


export default TaskList;