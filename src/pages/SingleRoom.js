import React, { Component } from 'react'
import defaultBackground from '../images/room-1.jpeg'
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

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
		const [mainImage, ...defaultImages] = images
		return (
			<>
				<StyledHero img={mainImage || this.state.defaultBackground}>
					<Banner title={`${name} room`}>
						<Link to="/rooms" className="btn-primary">Back to rooms</Link>
					</Banner>
				</StyledHero>

				<section className="single-room">
					<div className="single-room-images">
						{defaultImages.map((item, index) => {
							return <img src={item} alt={name} key={index} />
						})}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3>Details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>Info</h3>
							<h6>Price: ${price}</h6>
							<h6>Size: ${size} SQFT</h6>
							<h6>Max capacity: {capacity} {capacity > 1 ? 'people' : 'person'}</h6>
							<h6>{pets?'pets allowed' : 'no pets allowed'}</h6>
							<h6>{breakfast && 'free breakfast'}</h6>
						</article>
					</div>
				</section>
				<section className="room-extras">
					<h6>Extras</h6>
					<ul className="extras">
						{extras.map((item, index) => { return <li key={index}>- {item}</li> })}
					</ul>
				</section>
			</>
		);
	}
}