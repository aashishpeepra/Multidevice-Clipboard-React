import React from 'react';
import './addClip.css';


const  addClip=(props)=>{
    return(
        <div className="addClip">
        <h3>Add Clip</h3>
            <form  id="thisForm">
                <input value={props.valv}  onChange={props.clip} type="text"  />
            </form>
            <button onClick={()=>props.post()} className="btnUpload" id="thisButton" type="button" style={{ backgroundColor: "#000", color: "#fff", borderRadius: "200px", padding: "10px 15px", cursor: "pointer", boxShadow: "0 0 0", border: "0px solid #000" }}>
                Upload
            </button>
            {}
        </div>
    )
    
}

export default addClip;