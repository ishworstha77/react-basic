import React from 'react';
import {useState} from 'react'

function Header(props){
    const [value, setvalue] = useState(3);
    const pariwartan=()=>{
        setvalue(5);
    }



    return(
        <h1>
            I am header;
            {props.data}
            {props.arkodata}
<button onClick={pariwartan}>{value}</button>
        </h1>
    )
}

export default Header;