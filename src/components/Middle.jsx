import React from 'react';
import HeadLine from "./Elemants/HaedLine";
import Img from './Elemants/Img';
import Sad from './imgs/sad.png';
import Form from './Elemants/Form'


function Middle(props) {
    const buttons = ['Joy','Trust','Feared','Suprised','Sad','Disgust','Angry','Anticipated'];

    return <div className='middle'>
    <HeadLine title="Let Your Emtion"/>
    <HeadLine title="FREE"/>
    <Img class='img img-sad'  src={Sad} />
    <Form onSelect={props.onEmotionSelect}
    btnSum = {buttons}
    />

</div>
}

export default Middle;