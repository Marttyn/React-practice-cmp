function Concept({ concept, className }) {
  const { title, image, description } = concept;

  return (
    <li className={className}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default Concept;
