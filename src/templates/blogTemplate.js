import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  let styles = {
    maxWidth: "1000px",
  }
  return (
    <div className="blog-post-container" style={styles}>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        {frontmatter.start && (
          <h2>
            {frontmatter.start} to {frontmatter.end}
          </h2>
        )}
        {!frontmatter.start && <h2>{frontmatter.date}</h2>}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Link to="/"> &lt; Back</Link>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM YYYY")
        start(formatString: "MMMM YYYY")
        end(formatString: "MMMM YYYY")
        slug
        title
      }
    }
  }
`
