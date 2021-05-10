import { connect } from 'react-redux'
import './Styles/Pause.css'

function Pause(props) {
    return (
        <div className={props.state.controller.isActive ? 'pause_none' : 'pause'}>PAUSE</div>
    )
}

export default connect((state) => ({ state: state }), (dispatch) => ({
    
}))(Pause)

