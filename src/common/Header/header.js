import './header.css';
import React from "react";

//header components
const header = () => {
 
    return(<span  onClick={() => window.scroll(0, 0)} className='Header'><span role="img" aria-label="clapper board">🎬 </span> BOOK SHOW <span role="img" aria-label="Movie Camera ">🎥</span> </span>);
};

export default header;