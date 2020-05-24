import React from 'react';
import './currentClip.css';

const currentClip=(props)=>{
    return(
        <div className="currentClip">
            {props.inside}
            <div onClick={()=>props.pardelete()} className="xxr">X</div>
        </div>
    );
}

export default currentClip;