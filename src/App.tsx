import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import {Todo} from "./components/model";
import TodoList from "./components/TodoList";
import {DragDropContext} from 'react-beautiful-dnd'
/*
let name : string;
let age : number;
let isStudent: boolean;
let hobbies : string[];
let role:[number,string];

type Person = {
  name:string;
  age: number;
}
let person: Person = {
  name: "dusi",
  age: 5
}*/
/*type X = { // type az ugyan az mint az interface csak az interface-t gyakrabban használják mert kicsit egyszerűbb és több mindent lehet vele csinálni mint például az extends
  a: number;
  b: string;
}

interface Person extends X{   // interface el megadod hogy milyen type legyen extends el pedig hozzá tudsz adni megszorításokat
  name: string; // meghatározod hogy a nem csak sztring lehet de alapból is van hogy jó typeot ad neki de attól még érdemes megadni öket
  age: number;
}
*/
const App: React.FC = () => {

    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([])
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

    const handleAdd = (e:React.FormEvent) => {
        e.preventDefault()

        if (todo){
            setTodos([...todos,{id: Date.now(), todo: todo, isDone: false}])
            setTodo("")
        }
    }



  return (
      <DragDropContext onDragEnd={()=>{}}>
          <div className={"App"}>
              <span className={"heading"}>Taskify</span>
              <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
              <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>

          </div>
      </DragDropContext>

  )
}

export default App;
