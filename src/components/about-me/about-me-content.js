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
      let object = { __html: element }
      return <h3 key={i} dangerouslySetInnerHTML={object}></h3>
    });
  }

  renderContactInfo(contactInfo) {
    return (
      <div>
        {contactInfo.map((element, i) => <ContactLink key={i} content={element} />)}
      </div>
    )
  }

  render() {
    let content = this.props.content.aboutMeJson.data;
    return (
      <div>
        <Spacer height="15" />
        <div className="row">
          <div className="twelve columns">
            <div className="header-text-div" id="first-intro-typing-div">
              <h1>{content.title}</h1>
              {this.renderParagraph(content.introParagraph)}
              <Spacer height="2" />
              {this.renderContactInfo(content.contactInfo)}
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

const ContactLink = ({key, content}) => {
  let constructedLink = content.link ? (<a href={content.link} target="_blank">{content.text}</a>) : `${content.text}`
  let line = `${content.title}: `
  return (
    <div key={key}>
      <h4 className="aboutMeContact">{line} {constructedLink}</h4>
    </div>
  )
}