import React, {Component} from 'react';
import './style.css'

class Textarea extends Component {
  constructor(props) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress = (e) => {
    const ENTER_KEY_CODE = 13;
    const text = e.target.value;
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      if (text !== '' && /\S/.test(text)) {
        e.target.value = '';
        this.props.getText(text);
      }
      
    }
  }

  render () {
    return (
        <textarea 
          wrap="off" 
          className="main__input-area js-input-text" 
          placeholder="What needs to be done?" 
          onKeyDown={this.handleKeyPress}>
        </textarea>
    )
  }
  
}

export default Textarea;