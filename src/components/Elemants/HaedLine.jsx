import React from 'react';

function HeadLine(p) {
    return <h1 className={p.name} id={p.id}>{p.title}</h1>
}

export default HeadLine;