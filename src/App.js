import { useRef } from "react";
import Practice from "./component/Practice";
import Higeroder from "./component/Higeroder";
const App = () => {
  const inputRef = useRef(null)
  function styleChange(){
    inputRef.current.style.color="red"
  }
  return (
  <>
  <Practice data={"Hello!"} ref={inputRef}/>
  <Higeroder/>
  <button onClick={styleChange}>Click</button>
  </>
  )
}

export default App