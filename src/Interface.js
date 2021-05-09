import React from "react"
import { connect } from "react-redux"
import './Styles/Interface.css'

function Interface(props) {

    React.useEffect(() => {
        // props.onChangeDistance()
    })

    return (
        <div className='interface-container'>
            <div>HEALTH:{props.state.ship.health}</div>
            <div>SPEED:{props.state.ship.speed}</div>
            <div>DISTANCE:{props.state.ship.distance}</div>
            <div className={props.state.controller.isActive ? 'pause_none' : 'pause'}>PAUSE</div>
        </div>
    )
}


export default connect((state) => ({ state: state }), (dispatch) => ({

}))
    (Interface)
