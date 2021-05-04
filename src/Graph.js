function Graph(props) {
    return (
        <div>
            <div className='star'></div>
            <div className='graph' style={{ height: props.item.value + 'px' }}> </div>
        </div>
    )
}

export default Graph