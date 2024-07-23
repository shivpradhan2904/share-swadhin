import React ,{useState}from "react";

function TextForm(props) {

  const HandleUpText=()=>{
    console.log("all are changed to uppercase")
    setText(text.toUpperCase())
    props.showAlert("Converted to uppercase","Sucess")
  }
  const HandleClearText=()=>{
    setText('')
  }
  const handleOnChange=(event)=>{
    console.log("handles are changed")
    setText(event.target.value)
  }
  //basically text is a default variable whose default value is 'enter text here'
  const[text,setText]=useState('')
  // if you set the value of a state varible then it can shows errors
  // text="enter new text" .//wrong way
  // setText("Enter the new text here")//correct way
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}-</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={handleOnChange}
          value={text}
          rows="9"
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
        <div />
        <button className="btn btn-primary mx-2" onClick={ HandleUpText} > convert</button>
        <button className="btn btn-primary mx-2" onClick={ HandleClearText} > clearText</button>
      </div>
      <div className="container my-3" >
          <h1>Your text summary</h1>
          <p>{text.split(' ').length} words {text.length} characters</p>
          <p>{0.008*text.split(' ').length} Minutes read</p>
          <h1>Preview</h1>
          <p>{text}</p>
      </div>
    </div>
    </>
  );
}

export default TextForm;
