import React,{ useState } from 'react';

 function Sheader(props){

    const [value, setValue] = useState(2);
    // let x=3;

    const change=()=>{
       setValue(4); 
    //    alert(value);
    }
     return(
         <h1>
             i am third;
             Read virtual Dom; state, props. // Array destructureing, arrow function (javascript es6)
             <button onClick={change}> {value} </button>
             {props.ishwor}
         </h1>
     )
 }
 export default Sheader;
     
    