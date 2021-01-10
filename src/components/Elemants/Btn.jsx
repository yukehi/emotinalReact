import React from 'react';




function Btn(p) {
    
    return <button key={p.id} onClick={p.onClick} className={p.class} id={p.id} >{p.BtnTitle}</button>
    
}

export default Btn;
