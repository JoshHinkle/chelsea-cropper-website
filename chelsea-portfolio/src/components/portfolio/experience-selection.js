import React from "react"
import Spacer from "../common/spacer";
import Image from "../image";
import { Link } from "gatsby"
import ExperiencePage from "../../templates/experience-page";

export default class ExperienceSelection extends React.Component{
  
  constructor(props) {
    super(props)
  }

  renderSelections(projects) {
    return projects.map((project, i) => {
      return(
        <>
          <div className="row" key={i*100}>
            {this.renderSideColumn(project)}
            {this.renderImages(project)}
          </div>
          <Spacer height="15" />
        </>
      )
    })
  }

  renderImages(project) {
    return(
      <div className="nine columns">
        <Link to={`/portfolio/${project.slug}`}>
          <Image imgName={project.imagePath} />
        </Link>
      </div>
    ) 
  }

  renderSideColumn(project) {
    return(
      <div className="three columns">
        <h2>{project.title}</h2>
        <p className="grey">{project.description}</p>
      </div>
    )
  }

  render() {
    let content = this.props.content.experienceSelectionJson.data
    return (
      <>
        <div>
          <Spacer height="5"/>
          {this.renderSelections(content)}
        </div>
      </>
      ); 
  }
}