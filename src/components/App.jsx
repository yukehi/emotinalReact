import React, {useState} from 'react';
import Hader from './Hader'
import EmotionForm from './EmotionForm'
import ColorForm from './ColorForm'
import Engine,{createResult} from '../engine'
import Btn from './Elemants/Btn';

function App() {
  const [emotion, setEmotion] = useState("");
  const [color, setColor] = useState("");

  const onEmotionSelect = (selectedEmotion) => {
    setEmotion(selectedEmotion);
    
    return 
  };

  const onColorSelect = (selectedColor) => {
    setColor(selectedColor);
    
    return 
  };

  function reset(){
    setColor('')
    setEmotion('')
  }

  createResult(emotion,color)

  return (<>
    <Hader />
    <EmotionForm onColorSelect={onColorSelect}/>
    <ColorForm onEmotionSelect={onEmotionSelect}/>
    <div className='answer'><Btn class='btn' BtnTitle='Reset' onClick={reset}/></div>
    
  </>)
}

export default App;
