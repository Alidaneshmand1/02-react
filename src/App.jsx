import Users from './User'
import { useState } from 'react'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import a from './new'
import Quiz from './Quiz'
function new1() {
  console.log("this is new");
  
}

function App(props) {
  ///props///

// return (
//   <>
//   <h2>I am {props.brand}</h2>
//   </>
// )

// const numbers = [1,2,3,4,5,6]
// const [one , two , ...number] = numbers
// console.log(one);
// console.log(number);
// console.log(a);

// if (a>10) {
//   console.log("a>10");
  
// }else(
//   console.log("a<10")
// )
// ///////////

// const answer = true
// function b() {
//   console.log('answer is true');
// }
// function c() {
//   console.log('answer is false');
// }
// answer ? b() : c();

// ///////

// const myStyle = {
//   color: "red",
//   backgroundColor: "lightyellow",

// }

// return (
//   <>
// <h2 style={myStyle}>text</h2>
// </>
// )


// //////

// const names = ['ali','reza','nima','yegane']
// return (
//   <div>
//     {names.map((name , index) =>{return <h1 key={index}>
//       {name}
//     </h1>} )}
//   </div>
// )

// const names = [
//   {name:'ali' , age:19},
//   {name:'reza' , age:36},
//   {name:'mmd' , age:45},
// ]

// return (
//   <div>
//     {names.map((user , idenx) => {
//       return <h2>{user.name} : {user.age}</h2>
//     })}
//   </div>
// )
// return<div><h1><Users/></h1></div>
return <div><h2><Quiz/></h2></div>

}
export default App
