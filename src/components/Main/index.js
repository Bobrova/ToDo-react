import React, {Component} from 'react';
import Textarea from '../Textarea';

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
    console.log(text);
  }

  render () {
    return (
        <div className="main">
          <div className="main__header">
            <Textarea 
              getText = {this.getTextFromTextarea}
            />
          </div>
        </div>
    )
  }
}

export default Main;
