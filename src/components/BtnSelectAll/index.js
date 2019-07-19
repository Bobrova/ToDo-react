import React from 'react';
import './style.css'

function BtnSelectAll(data) {
  const SelectedItem = data.SelectedItem;
  const isAllChecked = data.isAllChecked;
  const classActive = isAllChecked ? 'active' : '';
  return (
      <div className={`checked-items ${classActive}`} onClick={SelectedItem}>{String.fromCharCode(709)}</div>
  );
}

export default BtnSelectAll;
