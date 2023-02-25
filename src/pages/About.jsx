/*import React from 'react';
import "../index.css";
//import "./home.css";
/**********IMAGES**********/
/*import kids from '../assets/kids.jpg';
import kids2 from '../assets/kids2.jpg';
import hands from '../assets/hands.jpg';

import girl from '../assets/girl.jpg';
import game from '../assets/game.jpg';
import comp from '../assets/comp.jpg';
import mic from '../assets/mic.jpg';

import about from '../assets/about.jpg';
import partner from '../assets/partner.jpg';
import team from '../assets/team.jpg';

function About() {
    return (
        <>
        <div class="bg-home"></div>
        <div class="content">
            <section class="himg">
                <a class="button" href="">Learn More</a>
                <a class="button" target="_blank" href="https://discord.gg/UgXPFdwgnV">Join Us</a>
            </section>
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
                <h1>Start a Chapter</h1>
                Good at organizing? Leading is your talent? What are you waiting for? Become a member of the chapter team now! Our chapters are in 
                different countries and here you will be organizing our chapters across the globe. The chapter lead is in charge of managing the chapter members, 
                responsible for developing people and the things happening in the chapter. Our organization is a safe space where your talent
                is respected and given credit for. We work for a better world, spread kindness, and organize events and much more! Apart from this, it\'s super fun
                to be in the team, so be a member and enjoy all the benefits as well!

                For more info, check out this link which will lead you to our information page with details more about joining the chapter team!
                
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
                <h1>Donate</h1>
                <p>Help support our cause!</p>
                <a href="https://hack.ms/donate-heartsoflove">https://hack.ms/donate-heartsoflove</a>
                <div class="row">
                    <div class="column">
                    </div>
                    <div class="column">
                        <img src={donate}></img>
                    </div>
                    <div class="column">
                    </div>
                </div>
            </section>
            <section class="hpartners">
                <h1>Partners</h1>
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
            </section>
            <section class="sponsors">
                <h1>Sponsors</h1> 
            </section>
        </div>
        </>
    );
}

export default Home; */


import React from 'react';
import "../index.css";
import "./about.css";

import team from '../assets/team.jpg';
import aboutbekind from '../assets/aboutbekind.png';
import aboutchess from '../assets/aboutchess.png';
import comp from '../assets/comp.jpg';
import aboutheart from '../assets/aboutheart.png';
import aboutmakepeople from '../assets/aboutmakepeople.png';
import aboutpersonheart from '../assets/aboutpersonheart.png';

function About() {
    return (
        <>
        <div class="bg-about"></div>
        <div class="content-about">
            <section class="aintro">
                <h1>Our Mission:</h1>
                <p>We are an organization striving to assist those in need of help to ensure comfort and consolation in relation to those who are disadvantaged.
                    Especially due to the Covid-19 pandemic, many civillians are in despair and are requesting for financial aid as well as other methods of support.
                    We aim to help those who are homeless, disadvantaged, or inconvenienced in order to achieve a well ordered society. By doing so, we can establish a superior lifestyle and provide shelter,
                    food, and other necessities with the aid of fundraisers, charity programs, and informational posts.
                </p>
                <div class="row">
                    <div class="column">
                        <img src={aboutheart}></img>
                    </div>
                    <div class="column">
                        <img src={aboutbekind}></img>
                    </div>
                    <div class="column">
                        <img src={aboutpersonheart}></img>
                    </div>
                    <div class="column">
                        <img src={aboutmakepeople}></img>
                    </div>
                </div>
            </section>
            <section class="avalues">
                <h1 style={{ color: '#a42430' }}>Our Values:</h1>
                <p>We strongly value our team members as well as supporters, as our #1 goal is to restore kindness and encourage others to reach out to those in need of help.
                    We firmly believe that achieving equality is essential and we can do so by supplying various resources to those who have been put into a disadvantage. From this, 
                    we can gain goodwill throughout all of society, securing our true goal of selflessness and sympathy.
                </p>
            </section>
            <section class="ameet">
                <h1 style={{ color: '#a42430' }}>Meet the Team:</h1>
                <p>Here are the people at Hearts of Love:
                </p>
            </section>
            <section class="apositions">
                <h1 style={{ color: '#a42430' }}>Open positions:</h1>
                <p>Are you interested in initiating a new chapter and gaining leadership? If so, 
                    look into this link to get more details for beginning a chapter!
                </p>
                <a href="https://docs.google.com/document/d/13L6dgCqwFmRD5GCJOMAYO7LhyiEDE087cLMdARDtDCo/edit" class="about">https://docs.google.com/document/d/13L6dgCqwFmRD5GCJOMAYO7LhyiEDE087cLMdARDtDCo/edit</a>
            </section>
            <section class="aevents">
                <h1 style={{ color: '#a42430' }}>Events</h1>
                <div class="row">
                    <div class="column">
                        <img src={comp}></img>
                    </div>
                    <div class="column">
                        <img src={aboutchess}></img>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default About;

