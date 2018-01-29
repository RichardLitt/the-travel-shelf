import React from 'react'
import Person from './Person'
import teamData  from './team.json'

const Team = () => {
  return (
    <section id='team'>
      <div className='container'>
        <div className='row'>
          {teamData.map((person) => {
            return (
              <Person {...person} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
