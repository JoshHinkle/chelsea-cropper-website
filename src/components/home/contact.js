import React from "react"

const Contact = (props) => {
  let object = { __html: props.content.content }
  return (
    <div className="row">
      <h5 className="grey" dangerouslySetInnerHTML={object}></h5>
    </div>
  )
}

export default Contact