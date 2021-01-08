import React from 'react';
import Btn from './Btn';



function From(p) {
    function select(e){
        const cliked = e.type
        console.log(cliked);
    }

    return (
        <div>
            <Btn onClick={select} class={p.classBtn1} BtnTitle={p.titleBtn1} id={p.idBtn1}/>
            <Btn onClick={select} class={p.classBtn2} BtnTitle={p.titleBtn2} id={p.idBtn2}/>
            <Btn onClick={select} class={p.classBtn3} BtnTitle={p.titleBtn3} id={p.idBtn3}/>
            <Btn onClick={select} class={p.classBtn4} BtnTitle={p.titleBtn4} id={p.idBtn4}/>
            <Btn onClick={select} class={p.classBtn5} BtnTitle={p.titleBtn5} id={p.idBtn5}/>
            <Btn onClick={select} class={p.classBtn6} BtnTitle={p.titleBtn6} id={p.idBtn6}/>
            <Btn onClick={select} class={p.classBtn7} BtnTitle={p.titleBtn7} id={p.idBtn7}/>
            <Btn onClick={select} class={p.classBtn8} BtnTitle={p.titleBtn8} id={p.idBtn8}/>
            
        </div>
    )
}

export default From;
