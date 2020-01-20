import React from "react"

const Spacer = (props) => {
  let height = props.height
  if (!height) height = "5"; 
  height = height + "rem"
  return (
    <div className="row" style={{height: height}} />
  )
}

export default Spacer