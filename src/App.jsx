import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import a from './new'
function App() {
const numbers = [1,2,3,4,5,6]
const [one , two , ...number] = numbers
console.log(one);
console.log(number);
console.log(a);

if (a>10) {
  console.log("a>10");
  
}else(
  console.log("a<10")
)
///////////

const answer = true
function b() {
  console.log('answer is true');
}
function c() {
  console.log('answer is false');
}
answer ? b() : c();
}

export default App
