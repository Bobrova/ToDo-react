import React, {Component} from 'react';
import Textarea from '../Textarea';
import BtnSelectAll from '../BtnSelectAll';
import TaskList from '../TaskList'
import './style.css'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      todoList: [],
      counterTask: 0,
    }
    this.getTextFromTextarea = this.getTextFromTextarea.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleCheckedItem = this.handleCheckedItem.bind(this);
  }

    getTextFromTextarea = (text) => {
    const task = {id: this.state.counterTask + 1, title: text, completed: false};
    this.setState({
      counterTask: this.state.counterTask + 1,
      todoList: this.state.todoList.concat(task),
      isOpen: true
    })
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
      isOpen: newIsOpen
    })
  }

  handleCheckedItem = (ItemID) => {
    const todolist = this.state.todoList;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].id === ItemID) {
        todolist[i].completed = !todolist[i].completed;
      }
    }
    this.setState({
      todoList: todolist
    })
  }

  render () {
    const Tasks = this.state.isOpen && <TaskList 
        todoList={this.state.todoList}
        DeleteItem={this.handleDeleteItem}
        CheckedItem={this.handleCheckedItem}
      />
    return (
        <div className="main">
          <div className="main__header">
            <BtnSelectAll />
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
