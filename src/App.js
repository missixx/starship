import { connect } from "react-redux";
import React from 'react';

import './Styles/App.css'

import Graph from './Graph.js'
import Ship from './Ship.js'
// import Controller from './Controller.js'
import Interface from './Interface.js'
// import EnemyGenerator from './EnemyGenerator.js'
// import ReverseTimer from './ReverseTimer.js'
import Settings from './Settings.js'
import Pause from './Pause.js'
// import Customization from './Customization.js'
import Asteroid from './Asteroid.js'


function App(props) {

  const scroll = React.createRef()
/// чтобы окно двигалось вперёд, мы получает реф скрола, и каждый рендер двигаем его 

  const mapedGraphs = props.state.graphs.map(item => <Graph key={item.id} item={item} />)
  const mapedAsteroids = props.state.asteroid.map(item => <Asteroid key={item.id} item={item} />)


  const autoPilot = () => {
   //// switch почему то не сработал поэтому if
    const randomFunc = [props.onDownMove, props.onUpMove]

    if (props.state.ship.top === 30) {
      props.onMiddleMove()
    } else if (props.state.ship.top === 110) {
      randomFunc[generateRandomNumber(0, 2)]()
    } else if (props.state.ship.top === 190) {
      props.onMiddleMove()
    }
  }

  const collisionCheck = (enemyArray, ship) => {
    //// на основе свойств в стэйте top и right высчитываются координаты каждого элемента и попарно сравниваются
    /// с ship на столкновение
    /// getBundingClientRect() применить невозможно из за того что данные из рефов уже поступают после инициализации
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

  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  const autoAddGraph = () => {
  //// функция, которая вызывает экш и передаёт в него id и создаёт рандомно высоту блоков(в нашем случае это "звезды")
    const id = Date.now().toString()
    props.onAddGraph(id, generateRandomNumber(1, 300))
  }

  const generateEnemy = (value) => {
    //// функция создаёт enemy в рандомном месте из заданного массива generatePositionArray[value], временно поместил его в ship.
    //// Создать отдельный useEffect со своим setTimeout не получилось ибо он не успевает запускаться из-за быстрого setTimeout в
    /// App.js поэтому пришлось привязать генерацию астеройдов к пройденному расстоянию
    if ((value % 750 === 0) && (value !== 0)) {
      const id = Date.now().toString()
      const value = generateRandomNumber(0, 3)
      const payload = props.state.ship.generatePositionArray[value]
      props.onEnemyAdd(id, payload)
    }
  }

  React.useEffect(() => {
    //// этот хук двигает скрол и каждые 10милисек вызывает функции для генерации "звёзд", движение астеройдов, проверку столкновений, и 
    //// генерирует enemy
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
    //// удаляет лишние блоки(звёзды)
    if (mapedGraphs.length > 67) {
      props.onDeleteGraph()
      props.onChangeDistance() /* Добавил сюда, чтобы на первых секундах не набирал дистанцию*/
    }
  })

  React.useEffect(() => {
      //// удаляет лишние астеройды
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
          {/* <ReverseTimer /> в разработке */}
          <Settings />
          {/* <Customization /> в разработке*/}
          {mapedGraphs}
          <Ship ship={props.state.ship} />
        </div>
      </div>
      {/* <Controller onStart={props.onStart} onStop={props.onStop} в разработке/> */}
    </div>
  );
}

export default connect(state => ({ state: state }), dispatch => ({
  onAddGraph: (id, value) => dispatch({ type: 'ADD_GRAPH', payload: { id: +id, value: value } }),
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
