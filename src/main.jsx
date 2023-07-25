// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />

//   </React.StrictMode>,
// )

// chapter-2 RENDERING WITH JSX 

// 1)  HELLO.JSX

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import App from "./App";
// import './index.css'

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <div>
//   <p>
//     Hello, <strong>JSX</strong>
//   </p>
//   <App/>
//   </div>
// );

// 2) BUILTIN HTML TAGZ
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//   <div>
//     <button />
//     <code />
//     <input />
//     <label />
//     <p />
//     <pre />
//     <select />
//     <table />
//     <ul />
//   </div>  
// );

// 3) HTML TAG CONVERSION 

// import * as React from 'react'
// import * as ReactDOM from "react-dom";
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(<button title="My Button" foo="bar">
// My Button
// </button>
// );
// root.render(<Button/>)

// 4) Describing UI structures
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <section>
//         <header>
//             <h1>
//                 A header in the header section
//             </h1>
//         </header>
//         <nav>
//             <a href="item">Nave item in the nav tag</a>
//         </nav>
//         <main><p>
//             The main content</p></main>
//             <footer>
//                 <small>
//                     &copy; 2023
//                 </small>
//             </footer>
//     </section>
// );



// 5) CREATING YOUR OWN JSX ELEMENTS
// import * as React from "react";
// import * as ReactDOM from "react-dom";

// class MyComponent extends React.Component {
//     render(){
//         return (
//             <section>
//             <h1>
//                 My Section</h1>
//                 <p>Content in my Componenet</p></section>
//         );
//     }
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyComponent/>);

// 6 CREATING YOUR OWN </JSX>
// A)  ENCAPSULATING HTML

// import * as React from "react";
// import * as ReactDOM from "react-dom";

// class MyComponent extends React.Component {
//     render(){
//         return (
//         <section>
//         <h1>
//             Mycomponent</h1>
//             <p>
//                 Content in my component</p></section>
//         );
//     }
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyComponent/>)

// B) Nested Elements

// import * as React from "react";
// import * as ReactDOM from "react-dom";

// import MySection from "./MySection";
// import MyButton from "./MyButton";

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <MySection>
        
//         <MyButton>Myhello</MyButton>
//     </MySection>
// )

// NAMEDSAPCE-COMPONENT

// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import MyComponent from "./MyComponent";

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <MyComponent>
//         <MyComponent.First/>
//         <MyComponent.Second/>
//     </MyComponent>
// );

// Using JavaScript expressions
// You'll also learn how to map collections of data to JSX elements.

// Dynamic property values and text

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// const enabled=false;
// const text = 'A Button';
// const placeholder='input value ...';
// const size=50;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <section>
//         <button disabled={!enabled}>{text}</button>
//             <input placeholder={placeholder} size={size} />
        
//     </section>
// )

// Mapping collections to elements

import * as React from "react";
import * as ReactDOM from "react-dom";

const array=["First","Second","Third"];
const obj={
    first: 1,
    second:2,
    third:3,
};

const root =
 ReactDOM.createRoot(document.getElementById("root"));
 root.render(
    <section>
        <h1>Array</h1>
        <ul>
            {array.map((i)=>(<li key={i}>{i}</li>))}
        </ul>
        <h1>Object</h1>
        <ul>
            {Object.keys(obj).map((i)=>(
                <li key={i}><strong>{i}:</strong>{obj[i]}</li>
            ))}
        </ul>
    </section>
 );