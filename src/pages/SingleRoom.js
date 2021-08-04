import React, { Component } from 'react'
import defaultBackground from '../images/room-1.jpeg'
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBackground: defaultBackground
		};
	}
	static contextType = RoomContext;

	// componentDidMount() {
	//   console.log(this.props);
	// }
	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);

		if (!room) {
			return (
				<div className="error">
					<h3>No such room could be found</h3>
					<Link to='/rooms' className="btn-primary">Back to rooms</Link>
				</div>
			);
		}
		const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
		return (
			<Hero hero="roomsHero">
				<Banner title={`${name} room`}>
					<Link to="/rooms" className="btn-primary">Back to rooms</Link>
				</Banner>
			</Hero>
		);
	}
}