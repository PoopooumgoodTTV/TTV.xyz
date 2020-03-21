import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/cat-about.jpg" }) {
        childImageSharp {
          fixed(width: 290) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h2>About</h2>
        <p>
          I'm Eric, and I've been building websites and web apps for 5+ years
          for great clients all over the world.
        </p>
        <p>
          More than anything, I like building{" "}
          <strong>
            fast websites that your users love to use and that get results that
            you want
          </strong>
          . It's not just enough to exist any more. Want a higher search
          ranking, more conversions, or more email subscribers? I'll help you
          get there.
        </p>
        <p>
          My focus is on JavaScript development and building sites with React
          and Gatsby—modern web technologies that won't leave you in the last
          decade of sluggish, cobbled-together websites.
        </p>
        <p></p>
        <p>
          Ready to get your project started, or want to see specific projects
          I've worked on? Send me a message at{" "}
          <a href="mailto:ericnmurphy@gmail.com">ericnmurphy@gmail.com</a> to
          get things rolling.
        </p>
        <p>
          <em>
            Disclaimer: Development work may or may not be outsourced to cats.
          </em>
        </p>
        <Img fixed={data.image.childImageSharp.fixed} />
      </div>
    </Layout>
  )
}

export default AboutPage
