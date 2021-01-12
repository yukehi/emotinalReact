import React from 'react';
import HeadLine from "./Elemants/HaedLine";
import Contant from "./Elemants/Contant";
import Form from './Elemants/Form'
import Img from './Elemants/Img';
import Love from './imgs/in love.png';
import happy from './imgs/happy.png';

function ColorForm(props) {
    const buttons = ['yellow','lime','green','aqua','orange','red','pink','blue']
    const styles = 'btn btn-size '

    function con(e){
        console.log(e)
    }
    return <div className = 'bottom' >
        <HeadLine class='yelid'title = 'pick the color that most express you' / >
        <HeadLine class='bold' title = 'Now' / >
        <Img class='img img-happy'  src={happy} />
        <Img class='img img-love'  src={Love} />
        <Form onSelect = {props.onColorSelect}
        btnSum ={buttons}
        class = {styles}
     />
        </div>
}

export default ColorForm;