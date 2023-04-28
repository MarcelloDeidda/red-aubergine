const Meal = props => {
    return <li key={props.id} id={props.id}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{`£${props.price.toFixed(2)}`}</p>
    </li>
}

export default Meal;