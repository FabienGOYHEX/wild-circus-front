import React, { Component } from 'react';
import './index.css'



class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: [
                {
                    name: 'Pierre',
                    age: '12',
                    img: 'https://cdn.static05.nicematin.com/media/npo/1440w/2018/08/39691171.jpg'
                },
                {
                    name: 'PILOU',
                    age: '47',
                },
                {
                    name: 'PAUL',
                    age: '102',
                }
            ]
        }
    }
    deletePerson = (index) => {
        const people = [...this.state.people]
        people.splice(index, 1)
        this.setState({ people })
    }

    render() {
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-5"> People</h1>
                <ul className="list-group w-100">
                    {this.state.people.map((person, index) => (
                        <li className='list-group-item d-flex flex-row justify-content-between align-items-center' >
                            <img src={`${person.img}`} alt="hh" className="w-25" />
                            <span>{`nom : ${person.name} age : ${person.age} `}</span>

                            <button className="btn btn-small btn-danger" onclick="deletePerson(index)"> delette </button>
                        </li>
                    ))}

                </ul>

            </div>
        )
    }
}
export default Listing