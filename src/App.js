import { connect } from "react-redux";
import React from 'react';

import './Styles/App.css'

import Graph from './Graph.js'
import Starship from './Starship.js'
import Controller from './Controller.js'
import Interface from './Interface.js'
import ReverseTimer from './ReverseTimer.js'
import Settings from './Settings.js'
import Pause from './Pause.js'
import Customization from './Customization.js'


function App(props) {

  const textInput = React.createRef()
  const scroll = React.createRef()

  const mapedGraphs = props.state.graphs.map(item => <Graph key={item.id} item={item} />)

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

  React.useEffect(() => {
    if (props.state.controller.isActive) {
      scroll.current.scrollLeft = scroll.current.scrollWidth /* scroll - это реф*/
      const timerId = setInterval(() => {
        autoAddGraph(1, 300)
      }, 150 / props.state.ship.speed)
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
          <Interface />
          <Pause />
          <ReverseTimer />
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
}))
  (App);
