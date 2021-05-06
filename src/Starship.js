import './Styles/Starship.css'

export default function Starship(props) {
    return (
        <div className='starship' style={{ top: props.ship.verticalValue + 'px' }}>
        </div>
    )
}