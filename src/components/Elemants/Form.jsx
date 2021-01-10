import React from 'react';
import Btn from './Btn';



function From(p) {
    function select(e){
        const cliked = e.target.id;
        p.onSelect(cliked);
    }

    const btnList = p.btnSum;
    // console.log(btnList);
    
    return <div>
    {btnList.map(item => <Btn title={item.title} />)} 
    </div>
            
}

export default From;
