import React from "react"
import Landing from "./landing";
import Process from "./process";
import Contact from "./contact";
import Spacer from "../common/spacer";

const Homepage = (props) => {
  let {data} = props.content.homepageJson
  return (
    <>
      <Landing content={data.landing}/>
      <Process content={data.process}/>
      <Spacer height={15}/>
      <Contact content={data.contact}/>
    </>
  )
}

export default Homepage