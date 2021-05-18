import React from 'react'
import { connect } from 'react-redux'
import './Styles/Asteroid.css'

function Asteroid(props) {



    // React.useEffect(() => {
    //     const timerID = setInterval(() => { props.onAsteroidMove(); console.log('tick') }, 1000)
    //     return () => { clearInterval(timerID) }
    // })

    return (
        <div className='asteroid' style={{ right: props.state.asteroid.right + 'px', top: props.state.asteroid.top + 'px' }}>
        </div>
    )
}

export default connect(state => ({ state: state }), dispatch => ({
   
}))
    (Asteroid)
