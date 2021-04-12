import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';
import React, { useState } from 'react';

import useStorage from '../hooks/storage';
import { getKey } from '../lib/util';

function Todo() {
  const [items, putItems] = React.useState([
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
  ]);
  const [todo, setTodo] = useState();
 const [filter, setFilter] = React.useState("ALL");
 const displayItems = items.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
    return null;
  });
  const handleFilterChange = (value) => setFilter(value);
  function onAddToDo(e) {
    if (e.key == "Enter") {
      putItems((arr) => [
        ...arr,
        {
          key: todo.key,
          text: todo.text,
        },
      ]);
      console.log(items);
    }
  }

  const handleAdd = (text) => {
    putItems([...items, { key: getKey(), text, done: false }]);
  };
  function handleOnChange(event) {
    setTodo({ key: getKey(), text: event.target.value });
    console.log(event.target.value);
  }
  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      <Input onAdd={handleAdd} />

      <Filter onChange={handleFilterChange} value={filter} />
     {displayItems.map((item) => (
        <TodoItem key={item.key} item={item} />
      ))}
      <div className="panel-block">{displayItems.length} items</div>
      <div className="panel-block">
      </div>
    </div>
  );
}

export default Todo; 