import { useState, useEffect } from 'react';

const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    
  }, []);

  const putItems = items => {
    
  };

  const clearItems = () => {
    
  };

  return [items, putItems, clearItems];
}

export default useStorage;