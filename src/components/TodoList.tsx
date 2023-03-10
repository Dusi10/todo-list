import React from "react";
import "./InputField.css"
import {Todo} from "./model";
import SingleTodo from "./SingleTodo";
import {Droppable} from "react-beautiful-dnd";

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos, setTodos,completedTodos, setCompletedTodos}) => {
    return(
        <div className={"container"}>
            <Droppable droppableId={"TodosList"}>
                {(provided, snapshot) => (
                        <div className={`todos ${snapshot.isDraggingOver ?`dragged:`:``}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className={"todos_heading"}> Active tasks </span>
                            {todos?.map((todo, index)=>(
                                <SingleTodo index={index} todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
            </Droppable>
            <Droppable droppableId={"TodosRemove"}>
                {(provided,snapshot)=>(
                    <div className={`todos remove ${snapshot.isDraggingOver ?`doneDragging:`:``}`} ref={provided.innerRef} {...provided.droppableProps}>
                        <span className={"todos_heading"}> Completed tasks </span>
                        {completedTodos?.map((todo, index)=>(
                            <SingleTodo index={index} todo={todo} todos={completedTodos} setTodos={setCompletedTodos} key={todo.id} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>


        </div>
    )
}

export default TodoList