import React,{useState} from 'react'


export default function Textarea(props) {
    const [text,setText]=useState("")

    const handleuppclick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        
    }
    const handlelowclick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        
    }
    const handleclrclick=()=>{
        setText('')
        
    }

    const handlecpyclick=(event)=>{
      navigator.clipboard.writeText(text);
      props.showalert('Text copied to clipboard','success');
  }

  const handleremxspaceclick=(event)=>{
    // let newText = text.split("/[ ]+/")
    setText(text.replace(/\s+/g, ' ').trim()
    )
}

    
    const handlechange=(event)=>{
        setText(event.target.value)

    }

    

  return (
    < div className='mx-0 ' style={{backgroundColor:props.mode==='light'?'white':'#23114a', color:props.mode==='light'?'black':'white'}} >
      <div className=" my-3 mx-5 " >
        <h4>{props.text}</h4>
  <textarea 
  className="form-control my-3 " 
  style={{backgroundColor:props.mode==='light'?'white':'#193e57', color:props.mode==='light'?'black':'white'}} 
  value={text} 
  onChange={handlechange}rows ="7"  
  id="floatingTextarea" 
  placeholder={props.text}></textarea>
  <button type="button" disabled={text.length===0} onClick={handleuppclick} className="btn btn-primary mx-2 mb-2">Convert to Uppercase</button>
  <button type="button" disabled={text.length===0} onClick={handlelowclick} className="btn btn-primary mx-2 mb-2">Convert to Lowercase</button>
  <button type="button" disabled={text.length===0} onClick={handleclrclick} className="btn btn-primary mx-2 mb-2">Clear All</button>
  <button type="button" disabled={text.length===0} onClick={handlecpyclick} className="btn btn-primary mx-2 mb-2" id="cpybtn">Copy Text</button>
  <button type="button" disabled={text.length===0} onClick={handleremxspaceclick} className="btn btn-primary mx-2 mb-2" id="cpybtn">Remove Extra Space</button>
  <br /><br />
  <h3>Text Summary</h3>
  <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
  <p>takes {0.005*text.split(" ").filter((e)=>{return e.length!==0}).length} minutes to read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:'Nothing to preview!'}</p>
</div>
    </div>
  )
}
