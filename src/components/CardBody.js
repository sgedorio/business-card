import React from 'react';
import email from '../img/mail.png';
import li from '../img/linkedin.png';

export default function CardBody() {
    return (
        <div className="card--body">
            <h1>Sean Gedorio</h1>
            <h3>Designer-Developer</h3>
            <a href="https://www.seangedorio.com" className="website">seangedorio.com</a>
            <div className="contact--main">
                <a href="mailto: sgedorio@gmail.com">
                    <div className="email">
                        <img src={email} alt="Email"></img>
                        <span>Email</span>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/seangedorio">
                    <div className="linkedin">
                        <img src={li} alt="LinkedIn"></img>
                        <span>Linkedin</span>
                    </div>
                </a>
                
            </div>
            <h2>About</h2>
            <p>I am a Product Designer with a strong desire to build simple, pragmatic, trustworthy products. My computer science background allows me to easily bridge the gap between designers & developers. I love simplifying complex problems, breaking down ambiguity, and iteratively ideating on solutions.</p>
            <h2>Interests</h2>
            <p>I love the consumer space and have a strong interest in working on productivity & developer tools. I'm a strong believer that delightful microinteractions and gamification are the cornerstones of building engaging products. Outside of work, I'm into gardening, working out, travelling, watching films, and going to shows!</p>
        </div>
    )
}