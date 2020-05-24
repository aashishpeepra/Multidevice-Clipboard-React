import React from 'react';
import CurrentClip from './currentClip/currentClip';
import './currentClips';

const currentClips = (props) => {
    let k=0;
    console.log("here"+props.data);
    return (
        <div className="currentClips">
            <h3 style={{ marginBottom: "15px" }}>Your Clipbaord</h3>
            <div>
                {props.data!==undefined?
                props.data.map(obj=><CurrentClip pardelete={()=>props.delete(obj.vals)} key={k++} inside={obj.item}/>):
                <CurrentClip inside="Some Error in received data"/>
            }
            </div>
            <button type="button" onClick={()=>props.delete("")} style={{ backgroundColor: "#000", color: "#fff", borderRadius: "200px", padding: "10px 15px", cursor: "pointer", boxShadow: "0 0 0", border: "0px solid #000" }}>
                Clear all
            </button>
        </div>
    );
}

export default currentClips;