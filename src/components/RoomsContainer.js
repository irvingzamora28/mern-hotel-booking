import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
// import { RoomConsumer } from '../context'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)

// function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     console.log(value);
//                     const {loading, sortedRooms, rooms} = value
//                     if (loading) {
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             Hello from Rooms container
//                             <RoomsFilter roms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }

// export default RoomsContainer
