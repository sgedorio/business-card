import React from 'react';
import gh from '../img/gh.png';
import twitter from "../img/twitter.png";
import insta from "../img/insta.png";

export default function CardFooter() {
    return (
        <div className="card--footer">
            <a href="https://github.com/seangedorio"><img src={gh} alt="Github"></img></a>
            <a href="https://www.twitter.com/gedoritos"><img src={twitter} alt="Twitter"></img></a>
            <a href="https://www.instagram.com/gedoreos"><img src={insta} alt="Instagram"></img></a>
        </div>
    )
}