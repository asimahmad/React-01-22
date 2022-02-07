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
    const handleClear = () =>{
        setText("");
    }
    const handlemakeBold = () =>{
        if(counter%2==0){
            setTextStyle({
                fontWeight:'bold'
            })
        }
        else{
            setTextStyle({
                fontWeight:'normal'
            })
        }
    }
    const [textStyle, setTextStyle] = useState();
    const [text, setText] = useState('');
    const [counter, setCounter] = useState(1);
  return (
      <>
    <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Enter your text</label> */}
        <textarea className="form-control" style={textStyle} value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={()=>{handlemakeBold() ;setCounter(counter+1);}}>Bold</button>

    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p style={textStyle}>{text}</p>
    </div>
    </>
  )
}
