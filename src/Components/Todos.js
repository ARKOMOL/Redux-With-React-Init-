import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllTodos } from '../Services/Actions/TodosActions';
const Todos = () => {
    const {isLoading,todos,error} = useSelector (state =>(state))
   console.log(todos)
    const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(getAllTodos());

   },[])

    return (
        <div>
            <h1>
                Todos App
            </h1>
            {isLoading && <h1> Loading.....</h1> }
            {error && <h1>{error.message} </h1>}
            {/* <section>
                {
                    todos && todos.map ((todo)=>{
                        return <article>
                            <h1>
                                {todo.id}
                            </h1> <h1>
                                {todo.title}
                            </h1>
                        </article>
                    })
                }
            </section> */}


            <section>
                {
                    todos && 
                    todos.map((todo) =>{
                        
                        return <article key={todo.id}>
                            <h1> todo: {todo.id} </h1>
                            <h1>{todo.title} 
                            
                            </h1>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default Todos;