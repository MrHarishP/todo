import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './component/Header';
import Todo from './component/Todo';
import {useState} from 'react'

function App() {
  const [ list , setList] = useState([])
let props ={list,setList}
  return (
    <>
    <Header/>
    <Todo list={list} setList={setList}/>
    </>
  )
}

export default App;
