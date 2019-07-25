import React, {Component} from 'react';
import ItemTaskList from '../ItemTaskList'
import ListFooter from '../ListFooter'
import PropTypes from 'prop-types';
import './style.css'

class TaskList extends Component {

  state = {
    tab: 'All'
  }

  handleGetItemsTab = (tab) => {
    this.setState({
          tab: tab
        });
  }

  render() {
    const {tab} = this.state
    const {
      todoList,
      deleteItem,
      checkedItem,
      editItem,
      isCheckedExists,
      countActiveItem,
      deleteCompletedAll
    } = this.props

    this.getItemsTab = () => {
    switch (tab) {
      case 'All':  
        return todoList
      case 'Active':  
        return todoList.filter(itemList => !itemList.completed)
      case 'Completed':  
        return todoList.filter(itemList => itemList.completed)
      default: 
        break
    }
  }

    const todoListTab = this.getItemsTab()
    const listItem = todoListTab.map(item => 
      <li key={item.id} className="list-item">
        <ItemTaskList 
          todolist={item}
          deleteItem={deleteItem}
          checkedItem={checkedItem}
          editItem={editItem}
        />
      </li>
      )

      return (
        <ul className="main__task-list">
          {listItem}
          <ListFooter 
            isCheckedExists={isCheckedExists}
            countActiveItem={countActiveItem}
            deleteCompletedAll={deleteCompletedAll}
            getTab={this.handleGetItemsTab}
          />
        </ul>
      )
  }
}

TaskList.propTypes = {
  todoList: PropTypes.array,
  isCheckedExists: PropTypes.bool,
  countActiveItem: PropTypes.number,
  deleteItem: PropTypes.func,
  checkedItem: PropTypes.func,
  editItem: PropTypes.func,
  deleteCompletedAll: PropTypes.func
}

export default TaskList;