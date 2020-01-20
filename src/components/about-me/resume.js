import React, { Component } from 'react'
import Spacer from "../common/spacer"

export default class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, titleColumns: "two"};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let titleColumns = window.innerWidth > 1000 ? "two" : "three"
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight, 
      titleColumns
    })
  }

  renderSections(sections) {
    return sections.map((section, i) => {
      return (
        <div>
          {this.renderSection(section)}
        </div>
      )
    })
  }

  renderSection(section) {
    let title = section.title
    return(
      this.renderEntries(section.entries, title)
    )
  }

  renderEntries(entries, title) {
    return entries.map((entry, i)  => {
      let entryTitle = i === 0 ? title : ""
      return this.renderEntry(entry, entryTitle)
    })
  }

  renderEntry(entry, entryTitle) {
    return (
      <div>
        {this.renderHeaderRow(entry, entryTitle)}
        {this.renderDetailsRow(entry.content)}
        <Spacer />
      </div>
    )
  }

  renderHeaderRow(entry, entryTitle) {
    let paragraphText = entryTitle ? "paragraph-text" : ""
    let littleColumns = `${this.state.titleColumns} columns `
    let bigColumns = `${this.state.titleColumns === "two" ? "five columns paragraph-text" : "four columns paragraph-text"}`
    return (
      <div className="row">
        <div className={littleColumns + paragraphText}>
          <p className="experience-title">{entryTitle}</p>
        </div>

        <div className={bigColumns}>
          <p className="experience-title">{entry.title}</p>
          <p className="experience-subtitle nobreak">{entry.subtitle}</p>
        </div>
        <div className="five columns paragraph-text">
          <p className="experience-date">{entry.date}</p>
        </div>

      </div>
    )
  }

  renderDetailsRow(content) {
    let columns = `${this.state.titleColumns} columns`
    let bigColumns = `${this.state.titleColumns === "two" ? "ten" : "nine"} columns paragraph-text`

    return (
      <div className="row">
        <div className={columns}><p /></div>
        <div className={bigColumns}>
          <ul className="experience-description">
            {content.map(line => <li>{line}</li>)}
          </ul>
        </div>
      </div>
    )
    
  }


  render() {
    let { content } = this.props
    return (
      <div>
        <Spacer height="10" />
        { this.renderSections(content) }
      </div>
    )
  }
}
