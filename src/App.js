import { connect } from "react-redux";
import React from 'react';

import './Styles/App.css'

import Graph from './Graph.js'
import Starship from './Starship.js'
import Controller from './Controller.js'
import Interface from './Interface.js'
// import EnemyGenerator from './EnemyGenerator.js'
// import ReverseTimer from './ReverseTimer.js'
import Settings from './Settings.js'
import Pause from './Pause.js'
import Customization from './Customization.js'
import Asteroid from './Asteroid.js'


function App(props) {

  const textInput = React.createRef()
  const scroll = React.createRef()

  const mapedGraphs = props.state.graphs.map(item => <Graph key={item.id} item={item} />)
  const mapedAsteroids = props.state.asteroid.map(item => <Asteroid key={item.id} item={item} />)


  const autoPilot = () => {
    // switch (props.state.ship.top) {
    //   // case 10:
    //   //   props.onMiddleMove()
    //   case 125:
    //     props.onDownMove()
    //   case 250:
    //     console.log(props.state.ship.top);

    //     props.onUpMove()
    // }
    const randomFunc = [props.onDownMove, props.onUpMove]

    if (props.state.ship.top === 30) {
      props.onMiddleMove()
    } else if (props.state.ship.top === 110) {
      // const randomNumber = 
      randomFunc[generateRandomNumber(0, 2)]()
    } else if (props.state.ship.top === 190) {
      props.onMiddleMove()
    }
  }

  const collisionCheck = (enemyArray, ship) => {
    enemyArray.forEach((item) => {
      const enemyX2 = item.right
      const enemyX1 = enemyX2 + 80
      const enemyY2 = item.top
      const enemyY1 = enemyY2 + 80
      const shipX2 = ship.right
      const shipX1 = shipX2 + 200
      const shipY2 = ship.top
      const shipY1 = shipY2 + 80

      if ((enemyX1 > shipX2) && (enemyX2 < shipX1) && (enemyY1 > shipY2) && (enemyY2 < shipY1)) {
        autoPilot();
      }
    })
  }

  const handleAdd = () => {
    const id = Date.now().toString()
    props.onHandleAddGraph(id, textInput.current.value)
    textInput.current.value = ''
  }

  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  const autoAddGraph = () => {
    const id = Date.now().toString()
    props.onHandleAddGraph(id, generateRandomNumber(1, 300))
  }

  const generateEnemy = (value) => {
    if ((value % 750 === 0) && (value !== 0)) {
      const id = Date.now().toString()
      const value = generateRandomNumber(0, 3)
      const payload = props.state.ship.generatePositionArray[value]
      props.onEnemyAdd(id, payload)
    }
  }

  React.useEffect(() => {
    if (props.state.controller.isActive) {
      scroll.current.scrollLeft = scroll.current.scrollWidth /* scroll - это реф*/
      const timerId = setInterval(() => {

        autoAddGraph();
        props.onAsteroidMove();
        collisionCheck(props.state.asteroid, props.state.ship);
        generateEnemy(props.state.ship.distance);

      }, 10)
      return () => { clearInterval(timerId) }
    }
  })


  React.useEffect(() => {
    if (mapedGraphs.length > 67) {
      props.onDeleteGraph()
      props.onChangeDistance() /* Добавил сюда, чтобы на первых секундах не набирал дистанцию*/
    }
  })

  React.useEffect(() => {
    if (props.state.asteroid.length > 2) {
      props.onDeleteAsteroid()
    }
  })


  return (
    <div className='app-container'>
      <div className='field'>
        <div className='graph-container' ref={scroll}>
          {mapedAsteroids}
          <Interface />
          <Pause />
          {/* <EnemyGenerator/> */}
          {/* <ReverseTimer /> */}
          <Settings />
          {/* <Customization /> */}
          {mapedGraphs}
          <Starship ship={props.state.ship} />
        </div>
      </div>
      <input ref={textInput} />
      <button onClick={handleAdd}>Добавить</button>
      <Controller onStart={props.onStart} onStop={props.onStop} />
      <span>{props.state.ship.speed}</span>
    </div>
  );
}

export default connect(state => ({ state: state }), dispatch => ({
  onHandleAddGraph: (id, value) => dispatch({ type: 'ADD_GRAPH', payload: { id: +id, value: value } }),
  onDeleteGraph: () => dispatch({ type: 'DELETE_GRAPH' }),
  onChangeDistance: () => dispatch({ type: 'CHANGE_DISTANCE' }),
  onAsteroidMove: () => dispatch({ type: 'ASTEROID_MOVE' }),
  onDeleteAsteroid: () => dispatch({ type: 'ASTEROID_DELETE' }),
  onEnemyAdd: (id, payload) => dispatch({ type: 'ENEMY_ADD', payload: { id: +id, ...payload } }),
  onUpMove: () => dispatch({ type: 'UP_MOVE' }),
  onMiddleMove: () => dispatch({ type: 'MIDDLE_MOVE' }),
  onDownMove: () => dispatch({ type: 'DOWN_MOVE' }),
}))
  (App);
