import React, {Component} from 'react';
import './style.css'

class BtnDelete extends Component {

  constructor(props) {
    super(props)
    this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  render() {
    return (
        <div className="btnDel" onClick={this.handleClickBtn}></div>
    )
  }
  
  handleClickBtn = () => {
      this.props.onClickDelete(this.props.id);
    }
}

export default BtnDelete