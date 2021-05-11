//props are the parameters for the function
//props is a js object with key value pair
function Todo(props)
{
    return(
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn'>Delete</button>
            </div>      
        </div>
    );
}

export default Todo;
//first letter of function name should start with capital character