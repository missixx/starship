import { connect } from 'react-redux'
import './Styles/Starship.css'

function Starship(props) {
    const currentSkinValue = props.ship.currentSkinValue
    return (
        <div className='starship-collider' style={{ top: props.state.ship.top + 'px', right: props.state.ship.right + 'px'}}>
            <div className='starship' style={{ backgroundImage: props.state.ship.skins[currentSkinValue].url }}>
            </div>
        </div >
    )
}

export default connect(state => ({ state: state }), dispatch => ({

}))
    (Starship)

