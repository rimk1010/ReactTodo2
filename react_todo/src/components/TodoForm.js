import React, { useState } from 'react';

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value).then(()=> {
            setValue('');
        });
    };

    const onChange = e => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={onChange} />
            <button type='submit'>ADD</button>
        </form>
    );
};

export default TodoForm;