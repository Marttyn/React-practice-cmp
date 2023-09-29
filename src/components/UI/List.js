function List (props) {
    return (
        <ul id={props.id}>
            {props.children}
        </ul>
    );
}

export default List;