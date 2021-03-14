// import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"
import Timeline from "@material-ui/lab/Timeline"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"

const styles = makeStyles({
  timeLineItem: {
    // listStyle: "none",
    // display: "flex",
    // position: "relative",
    minHeight: 70,
    // maxWidth: 1000,
  },
  timeline: {
    align: "left",
    maxWidth: 1000,
    // display: "flex",
  },
  timelineContent: {
    // maxWidth: 500,
    // align: "right",
  },
  timelineOppositeContent: {
    // maxWidth: 500,
    // align: "right",
    spacing: "50px 50x",
  },
})

export default function Home({ data }) {
  const classes = styles()

  return (
    <div>
      <div flexGrow={0}>
        <Grid container direction="row">
          <Grid spacing={1} xs={12}>
            <a href="https://www.github.com/vimeh">GitHub</a>
          </Grid>
          <Grid spacing={1} xs={12}>
            <a href="https://www.linkedin.com/in/vinaymehta/">LinkedIn</a>
          </Grid>
          <Grid spacing={1} xs={12}>
            <a href="https://twitter.com/vinaymeh">Twitter</a>
          </Grid>
          <Grid spacing={1} xs={12}>
            <a href="https://www.instagram.com/spicyvinay/">Instagram</a>
          </Grid>
        </Grid>
      </div>
      <Header headerText="What I've Been Up To" />
      <Timeline classes={{ root: classes.timeline }}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <TimelineItem classes={{ root: classes.timeLineItem }}>
            {node.frontmatter.featuredImage && (
              <TimelineOppositeContent
                classes={{ root: classes.timelineOppositeContent }}
              >
                <Link to={node.frontmatter.slug}>
                  <GatsbyImage
                    image={
                      node.frontmatter.featuredImage.childImageSharp
                        .gatsbyImageData
                    }
                  />
                </Link>
              </TimelineOppositeContent>
            )}
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent classes={{ root: classes.timelineContent }}>
              {node.frontmatter.end && (
                <h3>
                  {node.frontmatter.start} to {node.frontmatter.end}
                </h3>
              )}
              {(!node.frontmatter.end && node.frontmatter.start) && (
                <h3>
                  {node.frontmatter.start} to Present
                </h3>
              )}
              {!node.frontmatter.start && <h3>{node.frontmatter.date}</h3>}
              <p>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </p>
              {node.wordCount.words && (
                <p>
                  {node.frontmatter.lede} [{node.wordCount.words} words]
                </p>
              )}
              {!node.wordCount.words && (
                <p>
                  {node.frontmatter.lede}
                </p>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            slug
            date(formatString: "YYYY-MM")
            start
            end
            title
            lede
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 500, layout: CONSTRAINED)
              }
            }
          }
          excerpt
          wordCount {
            words
          }
        }
      }
    }
  }
`
