import React from 'react'

const Higeroder = () => {
  return (
  <>
    <h1>Higeroder</h1>
    <HOC data={Change}/>
    </>
    
  )
}

function HOC(props){
    return <h1 style={{backgroundColor:"red"}}><props.data/></h1>
}

function Change() {
  return (
    <h1>Change</h1>
  )
}


export default Higeroder