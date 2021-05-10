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
     
            </div>
        
    )
}


export default connect((state) => ({ state: state }), (dispatch) => ({
    onStartTimer: (arrayLength, currentCount) => {
        const asyncStartTimer = () => {
            return dispatch => {
                setTimeout(() => {
                    if (currentCount < arrayLength) {
                        dispatch({ type: 'START_TIMER' })
                        const timerID = setTimeout(dispatch(asyncStartTimer()), 1000, currentCount++)
                    } else {
                        dispatch({ type: 'START' })
                    }
                }, 1000);
            }
        }
        dispatch(asyncStartTimer())
    }
}))
    (Interface)
