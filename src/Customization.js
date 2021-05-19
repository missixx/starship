// import { connect } from 'react-redux'
// import './Styles/Customization.css'

// function Customization(props) {
//     const skin = props.state.ship.skins
//     const currentSkinValue = props.state.ship.currentSkinValue

//     return (
//         <div className={props.state.controller.isCustomization ? 'custom-container' : 'custom-container_none'}>
//             <div className='exit' onClick={props.onExitCustomization}>EXIT</div>
//             <div className='custom-inner'>
//                 <div className='custom-name'>{props.state.ship.skins[currentSkinValue].name}</div>
//                 <div className='custom-image' style={{backgroundImage: skin[currentSkinValue].url }}></div>
//                 <button className='left-arrow' onClick={props.onChangePrevSkin}>&#8249;</button>
//                 <button className='right-arrow' onClick={props.onChangeNextSkin}>&#8250;</button>
//             </div>
//         </div>
//     )
// }

// // 

// export default connect((state) => ({ state: state }), (dispatch) => ({
//     onChangeNextSkin: () => dispatch({ type: 'NEXT_SKIN' }),
//     onChangePrevSkin: () => dispatch({ type: 'PREV_SKIN' }),
//     onExitCustomization: () => dispatch({ type: 'EXIT_CUSTOMIZATION' })
// }))(Customization)