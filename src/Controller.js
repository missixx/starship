import './Styles/Controller.css'

export default function Controller(props) {

    
  const handleStart = () => {
    props.onStart()
  }

  const handleStop = () => {
    props.onStop()
  }

  const handleUp = () =>{
      
  }

    return (
        <div className='controller-container'>
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
            </div>
        </div>
    )
}