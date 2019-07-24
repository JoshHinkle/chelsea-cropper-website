import React, { Component } from 'react'
import Spacer from "../common/spacer"
import Image from "../image"
import Resume from "./resume"

export default class AboutMeContent extends Component {
  constructor(props){ 
    super(props)
  }

  renderParagraph(textLines) {
    return textLines.map((element, i) => {
      return <h3>{element}</h3>
    });
  }

  render() {
    let content = this.props.content.aboutMeJson.data;
    console.log(content)
    return (
      <div>
        <Spacer height="15" />
        <div className="row">
          <div className="twelve columns">
            <div className="header-text-div" id="first-intro-typing-div">
              <h1>{content.title}</h1>
              {this.renderParagraph(content.introParagraph)}
            </div>
          </div>
        </div>
        <Spacer height="7" />
        <Image imgName={content.imagePath} fullPage />
        <Resume content={content.resumeFields} />
      </div>
    )
  }
}
