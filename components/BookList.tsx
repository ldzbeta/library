import React from "react";
import BookCard from "./BookCard";
interface Props {
  title: string;
  books: Book[];
  containerClassName?: string; //? - represents optional
}

const BookList = ({ title, books, containerClassName }: Props) => {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
      <ul className="book-list">{books.map((book) => (
        <BookCard key={book.title} {...book}/>
        //... book for use rest of the class of book to the card
      ))}</ul>
    </section>
  );
};

export default BookList;
