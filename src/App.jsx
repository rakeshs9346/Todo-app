
import AppName from './components/AppName.jsx'
import TodoName from './components/TodoName.jsx'  
import TodoItem1 from './components/TodoItem1.jsx'
import TodoItem2 from './components/TodoItem2.jsx'
import './App.css'

function App() {

  return (
    <center className="todo-container">
        <AppName/>
        <TodoName/><br />
        <TodoItem1></TodoItem1><br />
        <TodoItem2></TodoItem2><br />
    </center>
  )
}

export default App
