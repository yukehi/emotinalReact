import React, {useState} from 'react';
import Btn from './Elemants/Btn'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'



function App() {
  const [emotion, setEmotion] = useState("");
  const [color, setColor] = useState("");

  const onEmotionSelect = (selectedEmotion) => {
    setEmotion(selectedEmotion);
  };

  const onColorSelect = (selectedColor) => {
    setColor(selectedColor);
  };

  return (<>
    <Top />
    <Middle onEmotionSelect={onEmotionSelect}/>
    <Bottom onColorSelect={onColorSelect} />
    <p>emotion is: {emotion}</p>
    <p>color is: {color}</p>
  </>)
}

export default App;
