import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

const Services = () => {
    const state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium voluptatem perspiciatis odit, explicabo aliquam ipsam ipsa quidem!',
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium voluptatem perspiciatis odit, explicabo aliquam ipsam ipsa quidem!',
            },
            {
                icon: <FaShuttleVan />,
                title: "Free shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium voluptatem perspiciatis odit, explicabo aliquam ipsam ipsa quidem!',
            },
            {
                icon: <FaBeer />,
                title: "Free Beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium voluptatem perspiciatis odit, explicabo aliquam ipsam ipsa quidem!',
            }
        ]
    }
    return (
        <section className="services">
            <Title title="services"></Title>
            <div className="services-center">
                {state.services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
}

export default Services
