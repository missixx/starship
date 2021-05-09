import React from "react"
import { connect } from "react-redux"
import './Styles/Interface.css'

function Interface(props) {
    const timerAmount = props.state.interface.timerAmount
    const timerCurrentAmount = props.state.interface.timerCurrentAmount


    React.useEffect(() => {
        // props.onChangeDistance()

    })

    const handleStartTimer = () => {
        props.onStartTimer(timerAmount.length, timerCurrentAmount)
    }


    return (
        <div className='interface-container'>
            <div>HEALTH:{props.state.ship.health}</div>
            <div>SPEED:{props.state.ship.speed}</div>
            <div>DISTANCE:{props.state.ship.distance}</div>
            <div className={props.state.controller.isActive ? 'pause_none' : 'pause'}>PAUSE</div>
            <div className='timer' onClick={handleStartTimer}>{timerAmount[timerCurrentAmount]}</div>
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
                    } 
                }, 1000);
            }
        }
        dispatch(asyncStartTimer())
    }
}))
    (Interface)
