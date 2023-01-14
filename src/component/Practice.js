import React,{forwardRef} from 'react'

const Practice = (props,ref) => {
  return (
    <h1 ref={ref}>{props.data}</h1>
  )
}



export default forwardRef(Practice);