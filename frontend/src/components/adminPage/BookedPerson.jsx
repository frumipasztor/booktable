import React from 'react'

function BookedPerson({persons}) {
    

    return (
        <div>
            <h3>Foglaló neve: {persons.name}</h3>
            <h4>E-mail címe: {persons.email}</h4>
            <h4>Telefonszám: {persons.tel}</h4>
            <h4>Foglalt hely: {persons.head}</h4>
            <h4>Foglalás időpontja: {persons.date}</h4>
        </div>
    )
}

export default BookedPerson
