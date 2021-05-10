import { connect } from 'react-redux'
import './Styles/Settings.css'

function Settings(props) {
    return (
        <div className={props.state.controller.isActive ? 'settings-container_none' : 'settings-container'}>
            <div className='settings-inner'>
                <div className='continue' onClick={props.onStart}>Продолжить</div>
                <div className='customization' onClick={props.onEnterCustomization}>Кастомизация</div>
            </div>
        </div>
    )
}


export default connect((state) => ({ state: state }), (dispatch) => ({
    onStart: () => dispatch({ type: 'START' }),
    onEnterCustomization: () => dispatch({ type: 'ENTER_CUSTOMIZATION' })
}))(Settings)
