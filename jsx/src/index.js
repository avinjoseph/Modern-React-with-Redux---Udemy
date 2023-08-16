//1) Import the react libraries
import React from 'react'
import {createRoot} from 'react-dom/client';
import App from './App';
//2)Get the root element from the html

const el = document.getElementById('root');

//3) Tell the react to take control of the element

const root = createRoot(el);

//4) Create a component



//5) Show the component on the screen

root.render(<App />);