import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'

class BtnDelete extends Component {

  render() {
    return (
        <div className="btnDel" onClick={this.handleClickBtn}></div>
    )
  }
  
  handleClickBtn = () => {
      this.props.onClickDelete(this.props.id);
    }
}

BtnDelete.propTypes = {
  id: PropTypes.number
}

export default BtnDelete