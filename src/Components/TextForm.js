import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupClick = ()=>{
        setText(text.toUpperCase());
    }
    const handleonChange = (event)=>{
        setText(event.target.value);
    }
    const handlelowClick = () =>{
        setText(text.toLowerCase());    
    }
    const [text, setText] = useState('');
  return (
      <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Enter your text</label> */}
        <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
