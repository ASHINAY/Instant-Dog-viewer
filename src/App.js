import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
  const[img,setImg] = useState("")
  const[btndisabled,setBtnDisabled] = useState(false);
  const onBtnClick = () =>{
    const url = "https://random.dog/woof.json";
    axios
    .get(url)
    .then((response)=>{
      let imgUrl = response.data.url
      let lastThreeLetter = imgUrl.slice(-3);
      if(lastThreeLetter==="mp4"){
          onBtnClick()
      }else{
      setImg(imgUrl);
      setBtnDisabled(false);
    }
      console.log(lastThreeLetter);
    })
    .catch((error)=>{
      console.log("Error:",error)
    })
  }
  return (
    <div className="App">
      <h1>Instant Dog Viewer</h1>
      <button onClick={onBtnClick} disabled={btndisabled}>Show me a Dog</button>
      {img !== "" ?  (<img className='img' src={img}/>) : null}
    </div>
  );
}

export default App;
