import React, {Component} from 'react';
import ItemTaskList from '../ItemTaskList'
import ListFooter from '../ListFooter'
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
      idEdit,
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
          idEdit={idEdit}
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

export default TaskList;