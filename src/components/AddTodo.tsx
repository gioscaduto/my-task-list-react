import React, { useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
    title: yup.string().required('Invalid task')
});

interface AddTodoForm{
    title: string
}

const AddTodo = () => {
    
    const { addTodo } = useContext<TodoContextType>(TodoContext);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddTodoForm, e : any) =>{
        addTodo(data.title);
        e.target.reset();
        window.location.href = '/';
    }

    return(
        <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
          
            <h4>New task</h4>
        
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="New task" className="uk-input" ref={register} />
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
           
            <div className="uk-flex">              
                <div className="uk-flex-left">
                    <Link to="/" className="uk-button uk-button-primary"> Back </Link>
                </div>
                <div className="uk-margin-left">
                    <button type="submit" className="uk-button uk-button-primary">Save</button>
                </div>
            </div>
        </form>
    );
}

export default AddTodo;