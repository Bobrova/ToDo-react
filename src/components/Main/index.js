import React, {Component} from 'react';
import Textarea from '../Textarea';
import BtnSelectAll from '../BtnSelectAll';
import TaskList from '../TaskList'
import './style.css'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: (localStorage.getItem('todoApp') !== null) || false,
      todoList: JSON.parse(localStorage.getItem('todoApp')) || [],
      counterTask: (localStorage.getItem('todoApp') !== null) ? JSON.parse(localStorage.getItem('todoApp'))[JSON.parse(localStorage.getItem('todoApp')).length - 1].id : 0,
    }
  }

  getTextFromTextarea = (text) => {
  const {todoList, counterTask} = this.state
    const task = {id: counterTask + 1, title: text, completed: false};
    const todolist = todoList.concat(task);
    this.setState({
      counterTask: counterTask + 1,
      todoList: todolist,
      isOpen: true
    })
    this.saveToStorage(todolist);
  }

  saveToStorage = (todolist) => {
    localStorage.setItem('todoApp', JSON.stringify(todolist));
    if (todolist.length === 0) {
      localStorage.removeItem("todoApp");
    }
  }

  handleItemDelete = (ItemID) => {
    const {todoList, isOpen} = this.state;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === ItemID) {
        todoList.splice(i, 1);
      }
    }
    const newIsOpen = todoList[0] ? isOpen : !isOpen;
    this.setState({
      todoList: todoList,
      isOpen: newIsOpen,
    })
    this.saveToStorage(todoList);
  }

  handleDeleteCompleted = () => {
    const {todoList, isOpen} = this.state;
    const todolist = todoList.filter(itemList => !itemList.completed);
    const newIsOpen = todolist[0] ? isOpen : !isOpen;
    this.setState({
      todoList: todolist,
      isOpen: newIsOpen,
      isAllChecked: false,
    })
    this.saveToStorage(todolist);
  }

  handleCheckedItem = (ItemID) => {
    const {todoList} = this.state;
    let counterChecked = 0;
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === ItemID) {
        todoList[i].completed = !todoList[i].completed;
      }
      if (todoList[i].completed) counterChecked += 1;
    }
    const isCheckedExists = counterChecked !== 0;
    this.setState({
      todoList: todoList,
      isCheckedExists: isCheckedExists
    })
    this.saveToStorage(todoList);
  }

  handleSelectedItem = () => {
    const {todoList} = this.state;
    let isAllChecked = true;

    for (let i = 0; i < todoList.length; i++) {
      if (!todoList[i].completed) {
        todoList[i].completed = true;
        isAllChecked = false;
      }
    }

    if (isAllChecked) {
      for (let i = 0; i < todoList.length; i++) {
        todoList[i].completed = false;
      }
      isAllChecked = false;
    }

    this.setState({
      todoList: todoList,
      isCheckedExists: isAllChecked
    })

    this.saveToStorage(todoList);
  }

  handleEditItem = (todolistEdit, isEmpty) => {
    const {todoList} = this.state;
    if (isEmpty) return this.handleItemDelete(todolistEdit.id)
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === todolistEdit.id) {
        todoList[i].title = todolistEdit.title;
      }
    }
    this.setState({
      todoList: todoList,
    })
    this.saveToStorage(todoList);
  }

  render () {
    const {todoList, isOpen} = this.state;
    const countActiveItem = (this.state.todoList.filter(itemList => !itemList.completed)).length;
    const countCompletedItems = (this.state.todoList.filter(itemList => itemList.completed)).length;
    const Tasks = isOpen && <TaskList 
        todoList={todoList}
        countActiveItem={countActiveItem}
        isCheckedExists={countCompletedItems !== 0}
        deleteItem={this.handleItemDelete}
        checkedItem={this.handleCheckedItem}
        deleteCompletedAll={this.handleDeleteCompleted}
        editItem={this.handleEditItem}
      />

    return (
        <div className="main">
          <div className="main__header">
            {this.state.isOpen && <BtnSelectAll selectedItem={this.handleSelectedItem} isAllChecked={countActiveItem === 0}/>}
            <Textarea 
              getText = {this.getTextFromTextarea}
            />
          </div>
          {Tasks}
        </div>
    )
  }
}

export default Main;
