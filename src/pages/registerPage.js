import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabase, push, ref, set } from 'firebase/database';
import { app } from '../firebase/firebase';

const RegisterPage = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const database = getDatabase(app);

	function writeData(title, description) {
		
	}

	return (
		<div class='flex-row p-5'>
			<div class='flex-col  border-red-600 border-2 w-[400px] p-5 bg-slate-200'>
				<p class='text-xl text-orange-400'>Add Note</p>
				<div>
					<p>Title</p>
					<input
						class=''
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<div>
					<p>Details</p>
					<input
						type='text'
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</div>

				<button
					class='bg-white text-black py-1 px-10 rounded-full mt-4'
					onClick={() => writeData(title, description)}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default RegisterPage;
