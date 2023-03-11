import React from 'react';
import "../index.css";
import "./home.css";
/**********IMAGES**********/
import kids from '../assets/kids.jpg';
import kids2 from '../assets/kids2.jpg';
import hands from '../assets/hands.jpg';

import chpt from '../assets/startachapter.jpg';

import girl from '../assets/girl.jpg';
import game from '../assets/game.jpg';
import comp from '../assets/comp.jpg';
import mic from '../assets/mic.jpg';

import donate from '../assets/donate.jpg';
import partner from '../assets/partner.jpg';
import team from '../assets/team.jpg';

function Home() {
    return (
        <>
        <div class="bg-home">
            <div class="button-link">
            <a class="home-button">Learn More</a>
            <a target="_blank" href="https://discord.gg/UgXPFdwgnV" class="home-button">Join Us</a>
            </div>
        </div>
        <div class="content">
            <section class="hintro">
                <h1>Who are we?</h1>
                <p>Welcome to Hearts of Love. We are a student-led organization formed to help the world be a better place.
                Here any skill can be useful as long as you're willing to work hard to make our world a better place for everyone!
                <br/>
                We are Hearts of Love and our mission is to help our community become a better place by promoting kindness, teamwork,
                responsibility, and proactiveness in order to assist the homeless and orphanages that exist in our world. We want to be helpers
                not bystanders, by providing assistance to the homeless, disadvantaged children, orphanages and senior citizens in terms of 
                improving their living standards as well as necessities that may be necessary for a healthy lifestyle such as access to food, water
                , shelter, education, resources, and more...through a continuous cycle of events, fundraisers, charity programs, and much more!
                We also plan to create media advertisements and monthly newletters about our cause and to bring people together in order to help 
                out these people in our world and community! 
                </p>
                <div class="row">
                    <div class="column">
                        <img src={kids}></img>
                    </div>
                    <div class="column">
                        <img src={hands}></img>
                    </div>
                    <div class="column">
                        <img src={kids2}></img>
                    </div>
                </div>
            </section>
            <section class="hchapter">
                <h1>Start Your Own Chapter!</h1>
                <div class="chpt">
                    <div class="chpt-content">
                        <p>Good at organizing? Leading is your talent? What are you waiting for? Become a member of the chapter team now! Our chapters are in 
                        different countries and here you will be organizing our chapters across the globe. The chapter lead is in charge of managing the chapter members, 
                        responsible for developing people and the things happening in the chapter. Our organization is a safe space where your talent
                        is respected and given credit for. We work for a better world, spread kindness, and organize events and much more! Apart from this, it\'s super fun
                        to be in the team, so be a member and enjoy all the benefits as well!

                        For more info, check out this link which will lead you to our information page with details more about joining the chapter team!
                        </p>
                    </div>
                    <img src={chpt}></img> 
                </div>
                <button href="">Apply Now</button>
            </section>
            <section class="hevents">
                <h1>Events</h1>
                <div class="row">
                    <div class="column">
                        <img src={girl}></img>
                    </div>
                    <div class="column">
                        <img src={game}></img>
                    </div>
                    <div class="column">
                        <img src={comp}></img>
                    </div>
                    <div class="column">
                        <img src={mic}></img>
                    </div>
                </div>
            </section>
            <section class="hdonate">
            <a href="https://hack.ms/donate-heartsoflove" target="_blank"><h1>Donate</h1>
                <div class="row">
                    <div class="column">
                    </div>
                    <div class="column">
                        <img src={donate}></img>
                    </div>
                    <div class="column">
                    </div>
                </div>
                </a>
            </section>
            <section class="hpartners">
            <a href="https://docs.google.com/document/d/1kGBv1cQDpJnLfaDYxR3_lFiJdEWFxEE4Rqq7FOaGLZQ/edit?usp=sharing" target="_blank"><h1>Partners</h1>
                <div class="row">
                    <div class="column">
                        <img src={partner}></img>
                    </div>
                    <div class="column">
                        <img src={team}></img>
                    </div>
                    <div class="column">
                    </div>
                </div>
                </a>
            </section>
            <section class="sponsors">
            <a href="https://docs.google.com/document/d/1mjHVq2c_9rork1arxWy12FW8aUZTJKY0IvbzVuWenWA/edit" target="_blank"><h1>Sponsors</h1></a>
            </section>
        </div>
        </>
    );
}

export default Home;