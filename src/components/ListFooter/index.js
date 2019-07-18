import React from 'react';
import './style.css'

function ListFooter(data) {

  const DeleteCompletedAll = data.DeleteCompletedAll;
  return (
      <li className="list-footer js-list-footer">
        <span className="footer-item item-select active-task"></span>
        <div className="bookmarks-wrapper">
          <span className="footer-item bookmarks js-bookmarks activeBord">All</span>
          <span className="footer-item bookmarks js-bookmarks">Active</span>
          <span className="footer-item bookmarks js-bookmarks">Completed</span>
        </div>
        <span className="footer-item delete-completed" onClick={DeleteCompletedAll}>Clear completed</span>
    </li>
  );
}

export default ListFooter;