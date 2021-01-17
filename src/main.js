import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import './style.css';
import imgCompiling from './img/compiling.png';

// standard imports
ComponentA();
ComponentB();

// Dynamic Imports
let D = import('./components/Dynamic');
D.then((module) => module.default());

// set image src
const img = document.getElementById('imgCompiling');
img.src = imgCompiling;
