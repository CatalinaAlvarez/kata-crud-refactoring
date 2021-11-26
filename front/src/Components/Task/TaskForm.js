import React, { useRef, useState, useContext } from 'react';
import HOST_API from '../Connection';
import Store from '../Store';

const TaskForm = () => {
	const formRef = useRef(null);
	const { dispatch, state: { task } } = useContext(Store);
	const item = task.item;
	const [state, setState] = useState(item);


	return <form className="formList" ref={formRef}>
		<input type="text" name="name" className="taskForm" placeholder="Ingrese el nombre de la lista" defaultValue={item.name} onChange={(event) => {
			setState({ ...state, name: event.target.value })
		}} />
		<button onClick={onAdd} disabled={!state.name}>Nueva Lista</button>
	</form>
	;
}

export default TaskForm;