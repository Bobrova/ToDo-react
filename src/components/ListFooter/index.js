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
    this.props.getTab(tab);
    this.setState({
      tab: tab
    })
  }

  render() {
    const {tab} = this.state;
    const {deleteCompletedAll, countActiveItem} = this.props;
    const borderAll = (tab === 'All') ? 'activeBord' : ''
    const borderActive = (tab === 'Active') ? 'activeBord' : ''
    const borderCompleted = (tab === 'Completed') ? 'activeBord' : ''
    return (
          <li className="list-footer js-list-footer">
            <span className="footer-item item-select active-task">{countActiveItem === 1 ? `${countActiveItem} item left` : `${countActiveItem} items left`}</span>
            <div className="bookmarks-wrapper">
              <span className={`footer-item bookmarks ${borderAll}`} onClick={this.handleClickTab}>All</span>
              <span className={`footer-item bookmarks ${borderActive}`} onClick={this.handleClickTab}>Active</span>
              <span className={`footer-item bookmarks ${borderCompleted}`} onClick={this.handleClickTab}>Completed</span>
            </div>
            {this.props.isCheckedExists && <span className="footer-item delete-completed" onClick={deleteCompletedAll}>Clear completed</span>}
        </li>
      )
  }
  
}

export default ListFooter;