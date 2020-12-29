import React from "react";
import { books } from "./BookListImportExport/books";
import Book from "./BookListImportExport/Book";

function BookListImportExport() {
  return (
    <>
      <h2>Mini Book Project - Import and Export Statements</h2>
      <section className="booklist">
        {books.map((b) => {
          return <Book key={b.id} {...b}></Book>;
        })}
      </section>
    </>
  );
}

export default BookListImportExport;
