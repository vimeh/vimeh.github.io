import React from "react"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
// import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
// import Paper from "@material-ui/core/Paper"

const styles = makeStyles({
  /* Styles applied to the root element. */
  root: {
    listStyle: "none",
    display: "flex",
    position: "relative",
    minHeight: 70,
  },
  missingOppositeContent: {
    "&:before": {
      content: '""',
      // flex: 0,
      padding: "6px 16px",
    },
  },
})

export default function Post(props) {
  const classes = styles()

  return (
    <TimelineItem
      classes={{
        root: classes.root,
        missingOppositeContent: classes.missingOppositeContent,
      }}
    >
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <p>{props.frontmatter.date}</p>
        <a href={props.frontmatter.slug}>{props.frontmatter.title}</a>
        <p>{props.text}</p>
        {/* {props.frontmatter.featuredImage && (
          <GatsbyImage image={props.frontmatter.featuredImage.gatsbyImageData}
          />
        )}
        {props.frontmatter.featuredImage && <p>{props.frontmatter.featuredImage.gatsbyImageData}</p>}
        <p>pageQuery.blogPost</p> */}
      </TimelineContent>
    </TimelineItem>
  )
}
