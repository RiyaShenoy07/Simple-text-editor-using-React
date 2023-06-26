import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Clicked");
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
      //console.log("Clicked");
      let newText= text.toLowerCase();
      setText(newText)
  }
    const handleOnChange = (event)=>{
       // console.log("Change");
       setText(event.target.value)
    }  
    const handleClearClick = ()=>{
      //console.log("Clicked");
      let newText= '';
      setText(newText)
  }
    const [text, setText]= useState('');
   // setText('Yay!');
  return (
    <>
   
    <div className="container" style={{color: props.mode==='dark'?'white':'#36454F'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor:props.mode==='dark'?'#36454F':'white',
   color:props.mode==='dark'?'white':'#36454F'}} id="myBox" rows="7"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#36454F'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
