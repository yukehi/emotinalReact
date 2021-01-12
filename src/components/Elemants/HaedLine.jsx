import React from 'react';

function HeadLine(p) {
    return <h1 className={p.class} id={p.id}>{p.title}</h1>
}

export default HeadLine;