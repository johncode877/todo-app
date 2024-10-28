import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({completed,onComplete}) {
    return (
        <TodoIcon 
          type='check'
          color={completed ? 'green' : 'gray'} // green when checked
          onClick={onComplete}
        />
    );
}

export {CompleteIcon};