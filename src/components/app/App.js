import React from 'react';
import Footer from '../footer/Footer';
import AddTodo from '../../containers/addtodo/AddTodo';
import VisibleTodoList from '../../containers/visibletodolist/VisibleTodoList'

const App = ({ match: { params } }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer />
    </div>
  )
}

export default App