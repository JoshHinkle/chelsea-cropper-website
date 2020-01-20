import React from "react"

const Contact = (props) => {
  let object = { __html: props.content.content }
  return (
    <h5 className="grey" dangerouslySetInnerHTML={object}></h5>
  )
}

export default Contact