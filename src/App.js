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


  const collisionCheck = (enemy, ship) => {
    const enemyX2 = enemy.right
    const enemyX1 = enemyX2 + 50
    const enemyY2 = enemy.top
    const enemyY1 = enemyY2 + 50
    const shipX2 = ship.right
    const shipX1 = shipX2 + 200
    const shipY2 = ship.top
    const shipY1 = shipY2 + 50

    if ((enemyX1 > shipX2) && (enemyX2 < shipX1) && (enemyY1 > shipY2) && (enemyY2 < shipY1)) {
      props.onUpMove()
    }

  }

  const handleAdd = () => {
    const id = Date.now().toString()
    props.onHandleAddGraph(id, textInput.current.value)
    textInput.current.value = ''
  }

  const autoAddGraph = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNumber = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    const id = Date.now().toString()
    props.onHandleAddGraph(id, randNumber)
  }

  const generateEnemy = (value) => {
    if ((value % 500 === 0) && (value !== 0)) {
      console.log('вызов врага');
    }
  }

  React.useEffect(() => {
    if (props.state.controller.isActive) {
      scroll.current.scrollLeft = scroll.current.scrollWidth /* scroll - это реф*/
      const timerId = setInterval(() => {

        autoAddGraph(1, 300);
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


  return (
    <div className='app-container'>
      <div className='field'>
        <div className='graph-container' ref={scroll}>
          <Asteroid />
          <Interface />
          <Pause />
          {/* <EnemyGenerator/> */}
          {/* <ReverseTimer /> */}
          <Settings />
          <Customization />
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
  onUpMove: () => dispatch({ type: 'UP_MOVE' }),
  onDownMove: () => dispatch({ type: 'DOWN_MOVE' }),
}))
  (App);
