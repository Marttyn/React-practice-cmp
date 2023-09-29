import keyConceptsImage from '../../assets/images/key-concepts.png';

function ConceptsHeader () {
    const alt = 'Medal badge with a star';
    const title = 'Key React Concepts';
    const description = 'Selected key React concepts you should know about';

    return (
        <header>
            <img src={keyConceptsImage} alt={alt} />
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
}

export default ConceptsHeader;