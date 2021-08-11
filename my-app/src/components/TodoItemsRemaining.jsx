import React from 'react';
import PropTypes from 'prop-types';


function TodoItemsRemaining(props){
  return<span>{props.remaining()} items remaining</span>
};

TodoItemsRemaining.propTypes = {
  remaining: PropTypes.func.isRequired,
}

export default TodoItemsRemaining;
