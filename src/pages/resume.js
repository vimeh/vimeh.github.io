import React from "react"
import resume from "../media/Vinay_Mehta_Resume_nocontact.png"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



export default function Home() {
  return (
    <div style={{ minHeight: '500px'}}>
      {/* <Link to="/"> &lt; Back</Link> */}
      {/* <object data={resume} type="application/pdf" width='100%' height='1000px'>
          <p>
            Your browser does not support PDFs.
            <a href={resume}>Download the PDF</a>.
          </p>
        </object> */}
      <StaticImage src="../media/Vinay_Mehta_Resume_nocontact.jpg"/>
      {/* <img src={resume}/> */}
    </div>
  )
}