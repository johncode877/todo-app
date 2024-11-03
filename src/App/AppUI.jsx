
import React from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoSearch } from '../components/TodoSearch';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../components/TodoContext';

function AppUI() {
    return (
        <>
            {/* <TodoCounter
                 completed={completedTodos} 
                 total={totalTodos} 
                 loading={loading}/> */}

            {/* <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            /> */}

            <TodoCounter />
            <TodoSearch />


             {/* este componente utiliza las render functions
             no es necesario envolver el contenido a retornar
             si no solo incluir una funcion flecha que haga 
             un return implicito */}

            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
                    <TodoList>
                        {loading && (
                            <>
                                <TodosLoading />
                                <TodosLoading />
                                <TodosLoading />
                            </>
                        )}

                        {error && <TodosError />}

                        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                // evento que se dispara cuando 
                                // un todo ha sido completado 
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}

                    </TodoList>
                )}

            </TodoContext.Consumer>


            <CreateTodoButton />
        </>
    );
}

export { AppUI };