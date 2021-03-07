import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import TodoListItem from './TodoListItem';

const TodoList = () =>{
    
    const { todos } = useContext<TodoContextType>(TodoContext);
    
    if(todos?.length > 0){
        return(
        <table className="uk-table uk-table-divider uk-table-striped uk-table-hove">
            <thead>
                <tr>
                    <th></th>
                    <th>Task</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                    )
                }
            </tbody>
        </table>);
    }
     
    return (<span><small><strong className="uk-text-danger">There is no task</strong></small></span>);
}

export default TodoList;