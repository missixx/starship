import { connect } from "react-redux"

function Graph(props) {
    return (
        <div>
            <div className='star' style={{width: 25 / props.state.ship.speed + 'px'}}></div >
            <div className='graph' style={{ height: props.item.value + 'px' }}> </div>
        </div>
    )
}


export default connect(state => ({ state: state }), dispatch => ({

}))
    (Graph)