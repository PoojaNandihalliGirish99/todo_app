
import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItems from './todo';


function App() {

  const [todos, setTodos] = useState([]);//hook to save the whole list of todos

  const [todoInput, setTodoInput] = useState("");//hook to save a single todo


    useEffect(()=>{
      getTodos();
    },[])//blank [] means to run only on first launch of app

    //get data from firestore "todos" collection
    function getTodos(){
      //onsnapshot = instantly reflects the added new data
      db.collection("todos").onSnapshot(function (queryOnsnapshot){
        setTodos(queryOnsnapshot.docs.map((doc)=>({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
        );
      });

      
    }

    //add data to firestore "todos" collection
    function addTodo(e){
      e.preventDefault();

      db.collection("todos").add({
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      });

      setTodoInput("");

    }


  return (
    <div className="App">
    <div style={{display: "flex",
    flexDirection:"column", 
    justifyContent: "center",
    alignItems:"center",
    width:"100%"}}>
    <h1 style={{textAlign:"center"}}>todo app</h1>
    <form>
    <TextField id="standard-basic" 
    label="Write a todo" 
    value={todoInput}
    onChange={(e) =>setTodoInput(e.target.value)}
    style={{maxWidth:"500px", width:"90vw"}}/>

    <Button type="submit" variant="contained" onClick={addTodo} style={{display:"none"}}>Default</Button>
    </form>

    <div style={{maxWidth:"500px", width:"90vw", marginTop:"24px"}}>
    {todos.map((todo)=>(
      <TodoListItems 
      todo={todo.todo} 
      inprogress={todo.inprogress} 
      id={todo.id}
      />
    ))}
    </div>

    
    </div>
    </div>
  );
}

export default App;
 