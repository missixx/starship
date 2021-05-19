import { connect } from 'react-redux'
import './Styles/Ship.css'

function Ship(props) {
    const currentSkinValue = props.ship.currentSkinValue
    return (
        <div className='starship-collider' style={{ top: props.state.ship.top + 'px', right: props.state.ship.right + 'px' }}>
            <div className='starship'></div>
        </div >
    )
}

// style={{ backgroundImage: props.state.ship.skins[currentSkinValue].url }}

export default connect(state => ({ state: state }), dispatch => ({

}))
    (Ship)

