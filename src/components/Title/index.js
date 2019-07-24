import React, {Component} from 'react';
import './style.css'

class Title extends Component {

  handleClick = () => {
    this.props.editItem(this.props.todolist);
  }

  render() {
    const {todolist} = this.props;
    return (
        <span className="task-list_text" onDoubleClick={this.handleClick}>{todolist.title}</span>
    )
  }
  
}

export default Title