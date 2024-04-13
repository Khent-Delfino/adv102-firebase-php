import { useState } from 'react';

const AddBook = () => {
	const [book, setBook] = useState({
		title: '',
		author: '',
	});

	const addBookToDatabase = () => {
		try {
			fetch('http://localhost:8080/api/insert_book.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(book),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					alert(data[0].Message);
				});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className='w-full h-full flex flex-row justify-center items-center'>
			<div className='w-[500px] h-[500px] bg-slate-500 rounded-sm p-3 flex flex-col gap-3'>
				<h1>Add Book</h1>
				<input
					type='text'
					placeholder='title'
					value={book.title}
					onChange={(e) => setBook({ ...book, title: e.target.value })}
				/>
				<input
					type='text'
					placeholder='author'
					value={book.author}
					onChange={(e) => setBook({ ...book, author: e.target.value })}
				/>
				<button onClick={addBookToDatabase}>add</button>
			</div>
		</div>
	);
};

export default AddBook;
