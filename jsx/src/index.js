//1) Import the react libraries
import React from 'react'
import creatRoot from 'react-dom'

//2)Get the root element from the html

const el = document.getElementById('root');

//3) Tell the react to take control of the element

const root = creatRoot(el);

//4) Create a component

function App(){
    return <h1>Hi There !</h1>
}

//5) Show the component on the screen

root.render(<App />);