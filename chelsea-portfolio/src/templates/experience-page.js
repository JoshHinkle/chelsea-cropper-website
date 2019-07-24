import React from "react"
import Layout from "../components/layout";
import { isAuthenticated, login} from "../utils/auth"
import Image from "../components/image"
import Spacer from "../components/common/spacer"

export default class ExperiencePage extends React.Component {
  constructor(props) {
    super(props)
  }

  renderLanding(title, content) {
    return (
      <div>
        <BigSpacer />
        <div className="centered">
          <h1>{title}</h1>
        </div>
        <LittleSpacer />
        <div className="row">
          <div className="one column"></div>
          <div className="ten column header-text-div">
            {content.map(line => {
              return <h3 className="grey ">{line}</h3>
            })}
          </div>
        </div>
        <BigSpacer />
      </div>
    )
  }

  renderRowSummary(rows) {
    return rows.map(row => {
      return (
        <div className="row">
          <div className="one column"><p /></div>
          <div className="two columns"><h3>{row.title}</h3></div>
          <div className="eight columns header-text-div"><h3>{row.content}</h3></div>
        </div>
      )
    })
  }

  renderDisclaimer(disclaimer) {
    return (
      <div>
        <BigSpacer />
          <div className={"full-width disclaimer-parent"}>
            <div className="disclaimer-child">
              <div className="disclaimer-child-child">
                <h3 className="disclaimer">{disclaimer}</h3>
              </div>
            </div>
          </div> 
        <BigSpacer />
      </div>
    )
  }

  renderDoubleImages(imgPath1, imgPath2) {
    return (
      <div className="row">
        <div className="six columns">
          <Image imgName={imgPath1} />
        </div>
        <div className="six columns">
          <Image imgName={imgPath2} />
        </div>
      </div>
    )
  }

  renderSingleImage(imgPath) {
    return (
      <div className="row">
        <div className="twelve columns">
          <Image imgName={imgPath} />
        </div>
      </div>
    )
  }
  
  renderMutlipleSingleImages(imgPaths) {
    return imgPaths.map(imgPath => {
      return (
        <div>
          {this.renderSingleImage(imgPath)}
          <LittleSpacer />
        </div>
      )
    })
  }

  render() {
    if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
    }
    let content = this.props.pageContext.data.pageContent;
    console.log(content)

    return(
      <Layout category="work">
        {this.renderLanding(content.title, content.summary)} 
        {this.renderRowSummary(content.rowSummary)}
        {this.renderDisclaimer(content.disclaimer)}
        <Image imgName={content.image0} fullPage/>
        <Section section={content.section1} />
        {this.renderDoubleImages(content.image1, content.image2)}
        <Section section={content.section2} />
        {this.renderSingleImage(content.image3)}
        <Section section={content.section3} />
        {this.renderSingleImage(content.image4)}
        <Section section={content.section4} />
        {this.renderDoubleImages(content.image5, content.image6)}
        <Section section={content.section5} />
        {this.renderMutlipleSingleImages([content.image7, content.image8, content.image9])}
        <Section section={content.section6} />
        {this.renderMutlipleSingleImages([content.image10, content.image11])}
        <Section section={content.section7} />
        {this.renderMutlipleSingleImages([content.image12, content.image13, content.image14, content.image15, content.image16])}
      </Layout>
    )
  }
}

const Section = ({section}) => {
  return (
    <div>
      <BigSpacer />
      <div className="centered">
        <h2>{section.title}</h2>
      </div>
      <ExtraLittleSpacer />
      <div className="row">
        <div className="one column"></div>
        <div className="ten column header-text-div">
          {section.content && section.content.map(line => {
            return <h3 className="grey ">{line}</h3>
          })}
        </div>
      </div>
      <BigSpacer />
    </div>
  )
}

const ExtraLittleSpacer = () => {return <Spacer height="2"/>}
const LittleSpacer = () => {return <Spacer height="7"/>}
const BigSpacer = () => {return <Spacer height="11" />}