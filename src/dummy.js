// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//     let inventory = ["Books", "Pens", "Notebooks"];
//     let [books, setchange] = useState(1);
//     let [pen, penchange] = useState(2);
//     let [notebooks, notebookchange] = useState(1);
//     let total = books + pen + notebooks;

//     let change = (x, y, z) => {

//         if (total >= 10) {
//             return
//         }

//         return y(z + x)
//     }
//     return (
//         <div className="App">
//             <div id='inventor'>

//                 <CHANGE func={change} setchange={setchange} items={books} />
//                 <CHANGE func={change} setchange={penchange} items={pen} />
//                 <CHANGE func={change} setchange={notebookchange} items={notebooks} />

//                 <div>total:{total}</div>
//             </div>
//         </div>
//     );
// }
// function CHANGE({ func, setchange, items }) {
//     return <div><button onClick={() => { func(-1, setchange, items) }}>-</button><button>items:{items}</button><button onClick={() => { func(1, setchange, items) }}>+</button></div>
// }

// export default App;
