import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { relative } from 'path';
const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div  style={{ 
      position: "relative", 
      margin: '0 auto',
      marginTop: '60px', 
      display: 'block', 
      width: '500px', 
      }}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input 
          style={{
            border: 'none',
            borderBottom: 'solid 1px #ccc',
            margin: '0 30px 0 0 ',
            height: '45px',
          }}
          placeholder='Add new task'
          ref={node => input = node} />
        <button 
        className="btn btn-success"
        type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)

