import React from 'react';
import HeadLine from "./Elemants/HaedLine";
import Img from './Elemants/Img';
import Sad from './imgs/sad.png';
import Angry from './imgs/angry.png';
import Form from './Elemants/Form';


function EmotionForm(props) {
    const buttons = ['Joy','Trust','Feared','Suprised','Sad','Disgust','Angry','Anticipated'];
    const style = 'btn'
    return <div className='middle'>
    <HeadLine class='yelid2' title="Let Your Emtion"/>
    <HeadLine class='bold' title="FREE"/>
    <Img class='img img-sad'  src={Sad} />
    <Img class='img img-angry'  src={Angry} />
    <Form onSelect={props.onEmotionSelect}
    btnSum = {buttons}
    class={style}
    />

</div>
}

export default EmotionForm;