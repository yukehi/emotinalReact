import React from 'react';
import HeadLine from "./Elemants/HaedLine";
import Img from './Elemants/Img';
import Sad from './imgs/sad.png';
import Form from './Elemants/Form'


function Middle() {
    return <div className='middle'>
    <HeadLine title="Let Your Emtion"/>
    <HeadLine title="FREE"/>
    <Img class='img img-sad'  src={Sad} />
    <Form classBtn1 = 'btn'
    classBtn2 = 'btn'
    classBtn3 = 'btn'
    classBtn4 = 'btn '
    classBtn8 = 'btn'
    classBtn7 = 'btn'
    classBtn6 = 'btn'
    classBtn5 = 'btn'
        idBtn1 = 'Joy'
        idBtn2 = 'Trust'
        idBtn3 = 'Feared'
        idBtn4 = 'Suprised'
        idBtn5 = 'Sad'
        idBtn6 = 'Disgust'
        idBtn7 = 'Angry'
        idBtn8 = 'Anticipated'
        titleBtn1= 'Joy'
        titleBtn2= 'Trust'
        titleBtn3= 'Feared'
        titleBtn4= 'Suprised'
        titleBtn5= 'Sad'
        titleBtn6= 'Disgust'
        titleBtn7= 'Angry'
        titleBtn8= 'Anticipated'
    
    />

</div>
}

export default Middle;