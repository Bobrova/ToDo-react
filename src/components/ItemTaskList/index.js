import React, {Component} from 'react';
import './style.css'

class ItemTaskList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

render() {
  const {todolist} = this.props
  console.log('из itemlist');
  console.log(todolist);
      return (
        <div className="listItemWrapper">
            {todolist.title}
        </div>
      )
  }
}

export default ItemTaskList;