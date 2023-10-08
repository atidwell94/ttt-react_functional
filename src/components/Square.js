function Square({className, index, eventHandler, value}) {
    return (
        <div className={className} 
            id={index}
            onClick={eventHandler}>
            {value}
        </div>   
    );
}

export default Square;