import { Link } from "gatsby"
import React from "react"
import { Router } from "@reach/router"
import ExperienceSelection from "../portfolio/experience-selection"
import IndexPage from "../../pages";

class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    let state = this.state
    let columnBreak = 1160;
    let bigColumn = state.width > columnBreak ? "ten columns" : "eight columns"
    let littleColumns = state.width > columnBreak ? "one column" : "two columns"
    let columnStack = 550; 
    let navItemClass = state.width > columnStack ? "nav-text right" : "nav-text";
    let { category } = this.props
    let workSpanClass = category === "work" ? "grey nav-underline" : "grey"
    let aboutSpanClass = category === "about" ? "grey nav-underline" : "grey"
    return (
      <header>
        <div className="nav">
          <div className="container max-container nav-content">
            <div className="row">
              <div className={bigColumn}>
                <p className="nav-text">
                  <Link to="/">
                    <span className="black nobreak">
                      CHELSEA CROPPER
                    </span>
                    <span className="grey"> | </span>
                    <span className="grey nobreak">UX Design</span>
                  </Link>
                </p>
              </div>
              <div className={littleColumns}>
                <p className={navItemClass}>
                  <Link to="/portfolio">
                    <span className={workSpanClass}>Work</span>
                  </Link>
                </p>
              </div>
              <div className={littleColumns}>
                <p className={navItemClass}>
                  <Link to="/about">
                    <span className={aboutSpanClass}>About</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}




export default NavBar;
