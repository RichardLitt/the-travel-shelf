import React from 'react'
import SocialIcons from './SocialIcons'

const Person = (props) => {
  return (
    <div className="col-lg-3">
      <div className="webdeveloper text-center">
        <img src={props.avatar} className="img-fluid rounded-circle avatar" alt={props.name} />
        <h4>{props.name}</h4>
        <p className="text-muted">{props.jobTitle}<br />{props.jobSubTitle}</p>
        <p className="bio">{props.bio}</p>
        <SocialIcons list={props.social} />
      </div>
    </div>
  )
}

export default Person
