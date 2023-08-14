import React, {useState} from 'react';
import PropTypes from 'prop-types';

import "./styles.css"

const NewTodo = ({ onNewTodo }) => {
    const [value, setValue] = useState('');

    const erase = () => {
        setValue('');
    }

    const submit = () => {
        if(onNewTodo) {
            onNewTodo(value)      
            erase();
    }
};

    const onChange = (event) => {
        setValue(event.target.value);
    }
    
    const onKeyDown = (event) => {
        if (event.which === 13) {     //ASCII (Enter)
            submit();
        } else if (event.which === 27 ) {   //ASCII (Esc)
            erase();
        }
    };


    return (
        <input 
            className='new-todo'
            placeholder='O que precisa ser feito?'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            />
    );
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo
