import React from 'react';
import PropTypes from 'prop-types';

function TodoCompleteAllTodos(props){
  return(
    <div>
      <div onClick={props.completeAllTodos} className="button">
        Check All
      </div>
    </div>
  );
}

TodoCompleteAllTodos.propTypes = {
  completeAllTodos:PropTypes.func.isRequired,
};

export default TodoCompleteAllTodos;
