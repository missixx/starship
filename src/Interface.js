import React from "react"
import { connect } from "react-redux"
import './Styles/Interface.css'

function Interface(props) {

    return (
        <div className='interface-container'>
            <div className='pause-btn' onClick={props.onStop}>| |</div>
            <div className='distance-block'>
                <div className='distance-elem'>DISTANCE:{props.state.ship.distance}</div>
            </div>
        </div>

    )
}


export default connect((state) => ({ state: state }), (dispatch) => ({
    // попытка создать таймер обратного отсчёта с использованием асинхронности, он работает, но пока юзать не буду
    // onStartTimer: (arrayLength, currentCount) => {
    //     const asyncStartTimer = () => {
    //         return dispatch => {
    //             setTimeout(() => {
    //                 if (currentCount < arrayLength) {
    //                     dispatch({ type: 'START_TIMER' })
    //                     const timerID = setTimeout(dispatch(asyncStartTimer()), 1000, currentCount++)
    //                 } else {
    //                     dispatch({ type: 'START' })
    //                 }
    //             }, 1000);
    //         }
    //     }
    //     dispatch(asyncStartTimer())
    // },
    onStop: () => dispatch({ type: 'STOP' }),
}))
    (Interface)
