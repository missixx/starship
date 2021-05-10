import './Styles/Starship.css'

export default function Starship(props) {
    const currentSkinValue = props.ship.currentSkinValue
    return (
        <div className='starship' style={{ top: props.ship.verticalValue + 'px', backgroundImage: props.ship.skins[currentSkinValue].url}}>
        </div>
    )
}

