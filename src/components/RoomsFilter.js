import React, { useContext } from 'react'
import { RoomContext } from '../context'
import RoomsContainer from './RoomsContainer'
import Title from '../components/Title'

const getUnique = (items, value) => {
    return [... new Set(items.map((item) => item[value]))]
}

const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext)
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context

    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => { return <option value={item} key={index}>{item}</option> })

    let guests = getUnique(rooms, 'capacity')
    guests = guests.map((item, index) => { return <option value={item} key={index}>{item}</option> })
    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form action="" className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {guests}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" className="form-control" name="price" id="price" value={price} min={minPrice} max={maxPrice} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="size">Room size (sqft)</label>
                    <div className="size-inputs">
                        <input type="number" className="size-input" name="minSize" id="minSize" value={minSize} onChange={handleChange} />
                        <input type="number" className="size-input" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter
