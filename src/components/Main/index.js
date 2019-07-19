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

    this.getTextFromTextarea = this.getTextFromTextarea.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleDeleteCompleted = this.handleDeleteCompleted.bind(this);
    this.handleCheckedItem = this.handleCheckedItem.bind(this);
    this.handleSelectedItem = this.handleSelectedItem.bind(this);
  }

    getTextFromTextarea = (text) => {
    const task = {id: this.state.counterTask + 1, title: text, completed: false};
    const todolist = this.state.todoList.concat(task);
    this.setState({
      counterTask: this.state.counterTask + 1,
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

  handleDeleteItem = (ItemID) => {
    const todolist = this.state.todoList;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].id === ItemID) {
        todolist.splice(i, 1);
      }
    }
    const newIsOpen = todolist[0] ? this.state.isOpen : !this.state.isOpen;
    this.setState({
      todoList: todolist,
      isOpen: newIsOpen,
      isAllChecked: (todolist.length === 0) ? false : this.state.isAllChecked
    })
    this.saveToStorage(todolist);
  }

  handleDeleteCompleted = () => {
    const todolist = this.state.todoList.filter(itemList => !itemList.completed);
    const newIsOpen = todolist[0] ? this.state.isOpen : !this.state.isOpen;
    this.setState({
      todoList: todolist,
      isOpen: newIsOpen,
      isAllChecked: false,
    })
    this.saveToStorage(todolist);
  }

  handleCheckedItem = (ItemID) => {
    const todolist = this.state.todoList;
    let counterChecked = 0;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].id === ItemID) {
        todolist[i].completed = !todolist[i].completed;
      }
      if (todolist[i].completed) counterChecked += 1;
    }
    const isAllChecked = counterChecked === todolist.length;
    const isCheckedExists = counterChecked !== 0
    this.setState({
      todoList: todolist,
      isAllChecked: isAllChecked,
      isCheckedExists: isCheckedExists
    })
    this.saveToStorage(todolist);
  }

  handleSelectedItem = () => {
    const todolist = this.state.todoList;
    let isAllChecked = true;

    for (let i = 0; i < todolist.length; i++) {
      if (!todolist[i].completed) {
        todolist[i].completed = true;
        isAllChecked = false;
      }
    }

    if (isAllChecked) {
      for (let i = 0; i < todolist.length; i++) {
        todolist[i].completed = false;
      }
      isAllChecked = false;
    }
    else {
      isAllChecked = true;
    }

    this.setState({
      todoList: todolist,
      isAllChecked: isAllChecked,
      isCheckedExists: isAllChecked
    })
    this.saveToStorage(todolist);
  }

  handleEditItem = (todolistEdit, isEmpty) => {
    if (isEmpty) return this.handleDeleteItem(todolistEdit.id)
    const todolist = this.state.todoList;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].id === todolistEdit.id) {
        todolist[i].title = todolistEdit.title;
      }
    }
    this.setState({
      todoList: todolist,
    })
    this.saveToStorage(todolist);
  }

  render () {
    const countActiveItem = (this.state.todoList.filter(itemList => !itemList.completed)).length;
    const Tasks = this.state.isOpen && <TaskList 
        todoList={this.state.todoList}
        DeleteItem={this.handleDeleteItem}
        CheckedItem={this.handleCheckedItem}
        DeleteCompletedAll={this.handleDeleteCompleted}
        countActiveItem={countActiveItem}
        EditItem={this.handleEditItem}
        isCheckedExists={this.state.isCheckedExists || countActiveItem === 0}
      />
    return (
        <div className="main">
          <div className="main__header">
            {this.state.isOpen && <BtnSelectAll SelectedItem={this.handleSelectedItem} isAllChecked={this.state.isAllChecked || countActiveItem === 0}/>}
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
