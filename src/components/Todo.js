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
    { key: getKey(), text: 'kamezoko', done:false},
  ]);

  return (
    <div className="panel">
      <div className="panel-heading">
        son goku
      </div>
      {items.map(item => (
        <label className="panel-block">
          <TodoItem
          key = {item.key}
          item = {item}
          />
        </label>
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );
}

export default Todo;