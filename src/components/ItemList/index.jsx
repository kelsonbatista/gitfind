import React from 'react';
import './styles.css';

const ItemList = (props) => {
  const { title, description } = props;
  
  return (
    <div className="item-list">
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  )
}

export default ItemList
