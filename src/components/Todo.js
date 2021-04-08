import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";
function Todo() {
  const [items, putItems] = React.useState([
    { key: getKey(), text: 'bruh', done: false },
    { key: getKey(), text: 'dark', done: false },
    { key: getKey(), text: 'lmao', done: false },
    { key: getKey(), text: 'nguoi tay', done:false},
  ]);
  const handleCheck = checked =>{
  const newItems = items.map(item => {
        if(item.key === checked.key){
          item.done =!item.done;
        }
        return item;
        });
        putItems(newItems);
    };
  return (
    <div className="panel">
      <div className="panel-heading">
        son goku
      </div>
      {items.map(item => (
          <TodoItem
          key = {item.key}
          item = {item}
          onCheck = {handleCheck}
          />
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;