import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const About = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Me</h1>
        <p>
          <i>
            "Impostor syndrome is a psychological pattern in which an individual
            doubts their accomplishments despite external evidence of their
            competence
          </i>
        </p>
        Hi I'm an impostor, my name is Roberto and I'm a 40 y.o. Project
        Manager. Since I was a youngster I had a passion for programming
        languages.
        <p>
          I recently asked myself: why not bring into fruition my avid interest
          in this field to enhance my career?{" "}
        </p>
        I began putting every possible effort to achieve this goal (and still
        continuing to do so) once I decided to pursue this path.{" "}
        <p>
          This blog is a story in continuous evolution to keep track of my
          progress, paths, errors, achievements in the hopes of helping other
          people to share this adventure.{" "}
        </p>
        <p>Special thanks to Jaga Santagostino, my mentor. Stay tuned!</p>
      </Layout>
    </div>
  )
}

export default About
