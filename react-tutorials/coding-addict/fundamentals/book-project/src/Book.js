const Book = (props) => {
  const { img, title, author, index } = props;

  return (
    <article className="book">
      <span>{`#${index}`}</span>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
