import { Link } from 'react-router-dom'
import React from 'react';

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Appu's Project Tracker!</span></h1>
            </header>
            <main className="public__main">
                <p>Stay Organized, Collaborate Better, Achieve More</p>
                <address className="public__addr">
                Create, assign, and track tasks with ease.<br />
                    Keep everyone aligned and working toward shared goals.<br />
                    Organize your team by assigning roles and responsibilities.<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Nandakumar T</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public