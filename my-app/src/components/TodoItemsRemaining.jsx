import React, { useContext, useMemo } from 'react';
import { TodosContext } from '../context/TodosContext';

function TodoItemsRemaining(){
  const { todos } = useContext(TodosContext);

  function remainingCalculation(){
    console.log('calculating remaingin todos.');
    return todos.filter(todo => !todo.isComplete).length;
  }

  //runs method and caches value when todos changes
  const remaining = useMemo(remainingCalculation, [todos]);

  return<span>{remaining} items remaining</span>
};

export default TodoItemsRemaining;
