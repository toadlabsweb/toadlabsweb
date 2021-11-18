import React from 'react' 
import { GatsbyImage } from 'gatsby-plugin-image'

const Team = ({ team }) => {
  if (!team) return null
  if (!Array.isArray(team)) return null

  return (
    <div className="team">
      <h2 className=" text-white text-center mt-6">OUR TEAM</h2>
      <div className="col-8 mx-auto"> 
      <ul className="row">
        {team.map((person) => {
          return (
            <div className="col-sm-6">
            <div className="card text-white bg-transparent border-0 text-center">
              <div className="card-body" key={person.id}>
                <GatsbyImage alt="" image={person.image.gatsbyImageData} />   
                <h4 className="card-title">{person.name}</h4>
                <h6 className="card-text">{person.title}</h6>
                <p>
                <div dangerouslySetInnerHTML={{ __html: person.shortBio?.childMarkdownRemark?.html, }} />     
                </p>
              </div>
            </div>
          </div> 
          )
        })}
      </ul>
      </div>
    </div>
  )
}

export default Team


 
