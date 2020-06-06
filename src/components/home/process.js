import React from "react"
import Spacer from "../common/spacer";

export default class Process extends React.Component {

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

  renderColumns(columnData, screenWidth) {
    if (screenWidth > 550) {
      return (
        <div>
          <div className="row">
            {this.renderColumnTitles(columnData)}
          </div>
          <Spacer height={.5} />
          <div className="row">
            {this.renderColumnInfo(columnData)}
          </div>
        </div>
      )
    } else {
      return (
        <div className="row">
          {this.renderColumnsAsOneRow(columnData)}
        </div>
      )
    }
  }

  renderColumnTitles(columnData) {
    return columnData.map((element, i) => {
      return(
        <div className="four columns" key={i}>
          <h3 className="processColumnTitle">{element.title}</h3>
        </div>
      )
    })
  }
  renderColumnInfo(columnData) {
    return columnData.map((element, i) => {
      return(
        <div className="four columns grey" key={i}>
          <p>{element.content}</p>
        </div>
      )
    })
  } 

  renderColumnsAsOneRow(columnData) {
    return columnData.map((element, i) => {
      return (
        <div className="four columns grey" key={i}>
          <h3>{element.title}</h3>
          <p>{element.content}</p>
          <Spacer height={3} />
        </div>
      )
    })
  }

  render() {
    let title = this.props.content.title
    let columnData = this.props.content.columns
    let {width} = this.state
    return (
      <div>
        <div className="row">
          <h2 className="processTitle">{title}</h2>
        </div>
        <Spacer height={0.001} />
        {this.renderColumns(columnData, width)}
      </div>
    )
  }
}