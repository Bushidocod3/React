import React, { useState, useEffect } from 'react';

const BookInfo = ({ isbn }) => {
    const [bookTitle, setBookTitle] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookInfo = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    setBookTitle(data.items[0].volumeInfo.title);
                } else {
                    setBookTitle('Book not found');
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchBookInfo();
    }, [isbn]);

    if (error) return <div>Error: {error}</div>;
    if (!bookTitle) return <div>Loading...</div>;

    return (
        <div>
            <h1>{bookTitle}</h1>
        </div>
    );
};
export default BookInfo;