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
    this.props.getItemsTab(tab);
    this.setState({
      tab: tab
    })
  }

  render() {
    const {tab} = this.state;
    const {DeleteCompletedAll, countActiveItem} = this.props;
    const BorderAll = (tab === 'All') ? 'activeBord' : ''
    const BorderActive = (tab === 'Active') ? 'activeBord' : ''
    const BorderCompleted = (tab === 'Completed') ? 'activeBord' : ''
    return (
          <li className="list-footer js-list-footer">
            <span className="footer-item item-select active-task">{countActiveItem === 1 ? `${countActiveItem} item left` : `${countActiveItem} items left`}</span>
            <div className="bookmarks-wrapper">
              <span className={`footer-item bookmarks ${BorderAll}`} onClick={this.handleClickTab}>All</span>
              <span className={`footer-item bookmarks ${BorderActive}`} onClick={this.handleClickTab}>Active</span>
              <span className={`footer-item bookmarks ${BorderCompleted}`} onClick={this.handleClickTab}>Completed</span>
            </div>
            {this.props.isCheckedExists && <span className="footer-item delete-completed" onClick={DeleteCompletedAll}>Clear completed</span>}
        </li>
      )
  }
  
}

export default ListFooter;