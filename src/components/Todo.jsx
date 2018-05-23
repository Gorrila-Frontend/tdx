import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'


const Todo = ({ onClick, completed, text }) => (
  <li>
  <i 
    onClick={onClick}
    style={{
      color: completed ? '#00E676' : '#E0E0E0',
      transition: 'all .6s ease-in-out ',
      top: '88%',
      display: 'block',
      position: 'relative',
    }}
    className="fas fa-check-circle fa-2x"></i>
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Todo;