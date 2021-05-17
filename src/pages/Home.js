import React from 'react'
import Nav from '../components/NavBar'
export default function Home() {
    return (
        <div>
            <Nav />
            <section className='showcase'>
                <div className='showcase-overlay'>
                    <h1>Good Shoes Take you to Good Places</h1>
                    <p>
                    A shoe is not only a design, but it's a part of your body language, the way you walk.
                    The way you're going to move is quite dictated by your shoes.
                    </p>
                </div>
            </section>
        </div>
    )
}
