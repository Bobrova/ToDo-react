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
  }

    getTextFromTextarea = (text) => {
    const task = {id: this.state.counterTask + 1, title: text, completed: false};
    this.setState({
      counterTask: this.state.counterTask + 1,
      todoList: this.state.todoList.concat(task),
      isOpen: true
    })
  }

  render () {
    const Tasks = this.state.isOpen && <TaskList todoList={this.state.todoList}/>
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
