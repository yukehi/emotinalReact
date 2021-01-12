import React from 'react';
import Btn from './Btn';



function From(props) {
    function select(e){
        const cliked = e.target.id;
        props.onSelect(cliked);
    }

    const btnStyle = 'btn'
    const btnList = props.btnSum;
    // console.log(btnList);
    const btnSlected = btnList.map((btn) => {return <Btn  onClick={select} id={btn} class={props.class} BtnTitle={btn} />})
    return <div> 
        {btnSlected}
    </div>
            
}

export default From;
