import React from "react"
import Spacer from "../common/spacer"
import { Link } from "gatsby";

export default class Landing extends React.Component{

  renderParagraph(textLines) {
    return textLines.map((element, i) => {
      let object = {__html: element.content}
      return (<h3 key={i} dangerouslySetInnerHTML={object}></h3>)
    });
  }

  render() {
    let content = this.props.content
    return (
      <div className="intro-container">
        <Spacer height="15" />
        <div className="row">
          <div className="twelve columns">
            <div className="header-text-div" id="first-intro-typing-div">
              <h1>{content.title}</h1>
              {this.renderParagraph(content.introParagraph)}
            </div>
          </div>
        </div>
        <Spacer height="3" />
        <div className="row">
          <div className="four columns">
            <Link to="/portfolio">
              <div className="black-button">
                {content.buttonText}
              </div>
            </Link>
          </div>
        </div>
        <Spacer height={10}/>
      </div>
    )
  }
}