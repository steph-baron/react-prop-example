import React from 'react'
import Person from './Person'

const Guests = ({people}) => {
  return (
    <div className="collection">
    <h3>Guests</h3>
      { people.map(person => <Person key={ person.id } person= {person} /> ) }
    </div>
  )
}

export default Guests
