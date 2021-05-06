import { connect } from "react-redux"
import './Styles/Graph.css'

function Graph(props) {
    return (
        <div>
            <div className='star' style={{ width: props.state.ship.speed / 2 + 'px' }}></div >
            <div className='graph' style={{ height: props.item.value + 'px' }}> </div>
        </div>
    )
}


export default connect(state => ({ state: state }), dispatch => ({

}))
    (Graph)