/** Tags COMPONENT **/
import React from 'react'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className="tags">
      {tags.map((tag) => (
        <div key={tag} className="tag py-2 px-3 my-5 text-light">
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
