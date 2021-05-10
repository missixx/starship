import { connect } from "react-redux"
import './Styles/ReverseTimer.css'

function ReverseTimer(props) {

    const timerAmount = props.state.interface.timerAmount
    const timerCurrentAmount = props.state.interface.timerCurrentAmount

    const handleStartTimer = () => {
        props.onStartTimer(timerAmount.length, timerCurrentAmount)
    }

    return (
        <div className={props.state.controller.isActive ? 'timer-container_none' : 'timer-container'}>
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
                    } else {
                        dispatch({ type: 'START' })
                    }
                }, 1000);
            }
        }
        dispatch(asyncStartTimer())
    }
}))
    (ReverseTimer)