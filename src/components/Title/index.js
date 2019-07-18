import React from 'react';
import './style.css'

export default function Title({ title }) {
  return (
        <span className="task-list_text">{title.trim()}</span>
    )
}