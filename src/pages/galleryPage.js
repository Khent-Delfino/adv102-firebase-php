import { useEffect, useState } from 'react';

const GalleryPage = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		try {
			const res = fetch('http://localhost:8080/api/read_all_books.php', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setBooks(data);
				});
		} catch (err) {}
	}, []);

	return (
		<div className='w-full h-full flex flex-col justify-center items-start p-5'>
			<h1>gallery Page</h1>
			{books?.map((book) => (
				<div className='flex flex-col gap-4 border-black'>
					<div className='flex flex-row'>
						id: <p>{book.id}</p>
					</div>
					<div className='flex flex-row'>
						author: <p>{book.author}</p>
					</div>
					<div className='flex flex-row'>
						isbn: <p>{book.isbn}</p>
					</div>
					<div className='flex flex-row'>
						description: <p>{book.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default GalleryPage;
