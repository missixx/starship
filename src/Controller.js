import { connect } from 'react-redux'

import './Styles/Controller.css'

function Controller(props) {

  const handleStart = () => {
    props.onStart()
  }

  const handleStop = () => {
    props.onStop()
  }

  const handleUp = () => {
  }

  const handleAccelerator = () => {
    if (props.state.ship.speed > 2) {
      props.onAccelerate()
    }
  }

  const handleDecelerator = () => {
    if (props.state.ship.speed < 27) {
      props.onDecelerate()
    }
  }

  const handleKeyDown = (event) => {
    switch (event.code) {
      case 'KeyS':
        return props.onDownMove();
      case 'KeyW':
        return props.onUpMove();
      case 'KeyD':
        return props.onAccelerate()
      case 'KeyA':
        return props.onDecelerate()
      default: return
    }
  }

  return (
    <div className='controller-container' onKeyDown={handleKeyDown}>
      <div className='left-block'>
        <button>&#8592;</button>
        <button onClick={handleUp}>&#8593;</button>
        <button>&#8594;</button>
        <button>&#8595;</button>
      </div>
      <div className='middle-block'>
        <button onClick={handleStart}>Старт</button>
        <button onClick={handleStop}>Стоп</button>
      </div>
      <div className='right-block'>
        <button>Огонь</button>
        <button onClick={handleAccelerator} >+</button>
        <button onClick={handleDecelerator}>-</button>
      </div>
    </div>
  )
}

export default connect(state => ({ state: state }), dispatch => ({
  onStart: () => dispatch({ type: 'START' }),
  onStop: () => dispatch({ type: 'STOP' }),
  // onAccelerate: () => dispatch({ type: 'ACCELERATE' }),
  // onDecelerate: () => dispatch({ type: 'DECELERATE' }),
  onUpMove: () => dispatch({ type: 'UP_MOVE' }),
  onDownMove: () => dispatch({ type: 'DOWN_MOVE' }),
}))
  (Controller)