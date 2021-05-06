import { connect } from "react-redux"
import './Styles/Interface.css'

function Interface(props) {
    return (
        <div className='interface-container'>
            <div>HEALTH:{props.state.ship.health}</div>
            <div>SPEED:{props.state.ship.speed}</div>
        </div>
    )
}


export default connect((state) => ({ state: state }), (dispatch) => ({

}))
    (Interface)
