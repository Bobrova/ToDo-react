import React, {Component} from 'react';
import './style.css'

class ListFooter extends Component{

  constructor(props) {
    super(props)

    this.state = {
      tab: 'All'
    }

    this.handleClickTab = this.handleClickTab.bind(this);
  }

  handleClickTab = (e) => {
    const tab = e.target.innerHTML;
    this.props.GetItemsTab(tab);
    this.setState({
      tab: tab
    })
  }

  render() {
    const DeleteCompletedAll = this.props.DeleteCompletedAll
    const countActiveItem = this.props.countActiveItem
    const acb = 'activeBord'
    const BorderAll = (this.state.tab === 'All') ? 'activeBord' : ''
    const BorderActive = (this.state.tab === 'Active') ? 'activeBord' : ''
    const BorderCompleted = (this.state.tab === 'Completed') ? 'activeBord' : ''
    return (
          <li className="list-footer js-list-footer">
            <span className="footer-item item-select active-task">{countActiveItem === 1 ? `${countActiveItem} item left` : `${countActiveItem} items left`}</span>
            <div className="bookmarks-wrapper">
              <span className={`footer-item bookmarks js-bookmarks ${BorderAll}`} onClick={this.handleClickTab}>All</span>
              <span className={`footer-item bookmarks js-bookmarks ${BorderActive}`} onClick={this.handleClickTab}>Active</span>
              <span className={`footer-item bookmarks js-bookmarks ${BorderCompleted}`} onClick={this.handleClickTab}>Completed</span>
            </div>
            <span className="footer-item delete-completed" onClick={DeleteCompletedAll}>Clear completed</span>
        </li>
      )
  }
  
}

export default ListFooter;