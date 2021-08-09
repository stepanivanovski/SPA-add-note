import React from 'react';

import './post-list-item.css';

const  PostListItem = (props) =>  {
  const {label, important, id, like, onRemove, onToggleImportant, onToggleLiked} = props;
  let classNames = "app-list-item d-flex justify-content-between list-group-item";

  if (important) {
    classNames = classNames + " important"
  }

  if (like) {
    classNames = classNames + " like"
  }

  return (
    <li className={classNames}>
      <span 
        className="app-list-item-label"   
        onClick={() => {onToggleLiked(id)}}>
          {label}
      </span>
      <div className=" d-flex justify-content-center align-items-center">
        <button 
         type="button" 
          onClick={() => {onToggleImportant(id)}} 
          className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button 
          type="button" 
          onClick={() => {onRemove(id)}} 
          className="btn-trash btn-sm">
          <i className="fa fa-trash"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  )
}

export default PostListItem;

