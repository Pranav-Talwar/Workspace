import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        setText(text.toUpperCase())
    }
    const handleLoClick = ()=>{
        setText(text.toLowerCase())
    }
    const handleClear = ()=>{
        setText("")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
    }
    const handleSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div>
    
        <div className="mb-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <label htmlFor="myBox" className="form-label" ><h1>{props.heading}</h1></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                backgroundColor: props.mode === 'light' ? 'white' : 'grey', 
                color: props.mode === 'dark' ? 'white' : '#042743'
            }}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary  mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-warning mx-2 my-1" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-info mx-2 my-1" onClick={handleSpaces}>Clear Extra Spaces</button>




    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'#042743'}} >
        <h3>{text.split(/\s+/).filter((E) => {return E.length !== 0}).length} words and {text.length} characters</h3>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
