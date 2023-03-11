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
import aboutredchess from '../assets/aboutredchess.webp';

import aboutbhosale from '../assets/aboutbhosale.jpg';
import aboutchiu from '../assets/aboutchiu.jpeg';
import aboutkaushik from '../assets/aboutkaushik.JPG';
import aboutlee from '../assets/aboutlee.jpg';
import aboutsakura from '../assets/aboutsakura.jpeg';
import aboutyengle from '../assets/aboutyengle.png';

function About() {
    return (
        <>
        <div class="bg-about"></div>
        <div class="content-about">
            <section class="aintro">
                <h1>Our mission:</h1>
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
                <h1 style={{ color: '#a42430' }}>Our values:</h1>
                <p>We strongly value our team members as well as supporters, as our #1 goal is to restore kindness and encourage others to reach out to those in need of help.
                    We firmly believe that achieving equality is essential and we can do so by supplying various resources to those who have been put into a disadvantage. From this, 
                    we can gain goodwill throughout all of society, securing our true goal of selflessness and sympathy.
                </p>
            </section>
            <section class="ameet">
                <h1 style={{ color: '#a42430' }}>Meet the Team:</h1>
                <h2 style={{ color: '#6ca8a6' }}>Chapters</h2>
                <img class = "one" src={aboutyengle}></img>
                <h3 style={{ color: '#384a66' }}>Jimena Ramos Yengle (Age: 21)</h3>
                <p>Jimena (she/her) is an artist who loves to live life with joy, she dedicates her time to leading social artistic projects around the world, and to writing romantic novels such as "Roma Enamorada" and "From here to the Cathedral".</p>
                <br></br>
                <br></br>
                <h3 style={{ color: '#384a66' }}>Emma Furlong (Age: 16)</h3>
                <p>Hi, I’m Emma! I love volunteering and am a part of multiple organizations regarding it. I love giving back to my community in clubs such as NAHS, NHS, Key Club, and Servant Leadership. In my free time, I enjoy reading, baking, playing sports, and coding.</p>
                <br></br>
                <br></br>
                <h2 style={{ color: '#6ca8a6' }}>Content</h2>
                <img class = "one" src={aboutbhosale}></img>
                <h3 style={{ color: '#384a66' }}>Tanishka Bhosale (Age: 16)</h3>
                <p>My name is Tanishka I am 16 years old. I am interested in Computer Science, Astronomy, Human-Computer Interaction, and AI. I have taken various courses on Python, and HCI in my free time. I am currently working on a research paper on Quantum computing. I also run a small blog on Astronomy and my various interests.</p>
                <br></br>
                <br></br>
                <img class = "one" src={aboutchiu}></img>
                <h3 style={{ color: '#384a66' }}>Erika Chiu</h3>
                <p>Erika Chiu is a dedicated freshman in high school who has an interest in going into the technology career field. Some of her hobbies include reading, coding, debate, and volunteer work in different organizations with different impacts. She is the Director of Events in Hearts of Love, as well as a writer for the Content Creation team.</p>
                <br></br>
                <br></br>
                <h2 style={{ color: '#6ca8a6' }}>Discord Moderation</h2>
                <h3 style={{ color: '#384a66' }}>Evan Chen (Age: 15, School: JFSS)</h3>
                <p>I have a lot of free time and work with discord bots. If there's something I don't know, google will be there for me.</p>
                <img class = "two" src={aboutkaushik}></img>
                <h3 style={{ color: '#384a66' }}>Lekha Kaushik (Age: 17)</h3>
                <p>Well, I love to code. Leadership and debating are my strongest points. Always been the in the top students list. traditional aesthetics are my thing.</p>
                <br></br>
                <br></br>
                <h2 style={{ color: '#6ca8a6' }}>Editorial</h2>
                <h3 style={{ color: '#384a66' }}>Shunmei Z.</h3>
                <p>I enjoy hiking and reading!</p>
                <br></br>
                <br></br>
                <h3 style={{ color: '#384a66' }}>Jackey Chen (Age: 19, School: Queens College)</h3>
                <p>A typical guy who loves the game of basketball more specifically the NBA, approaches the game analytically</p>
                <br></br>
                <br></br>
                <h2 style={{ color: '#6ca8a6' }}>Event Management</h2>
                <img class = "one" src={aboutsakura}></img>
                <h3 style={{ color: '#384a66' }}>Y. Ishita Sakura</h3>
                <p>Ishita is an amateur poet/writer, resulting in her overthinking skills. She's passionate about research work, management, organization and calligraphy. Lives in her poetry and isn't hesitant to meet new people and lend a helping hand.</p>
                <br></br>
                <br></br>
                <img class = "one" src={aboutchiu}></img>
                <h3 style={{ color: '#384a66' }}>Erika Chiu</h3>
                <p>Erika Chiu is a dedicated freshman in high school who has an interest in going into the technology career field. Some of her hobbies include reading, coding, debate, and volunteer work in different organizations with different impacts. She is the Director of Events in Hearts of Love, as well as a writer for the Content Creation team.</p>
                <br></br>
                <br></br>
                <h2 style={{ color: '#6ca8a6' }}>Outreach</h2>
                <h3 style={{ color: '#384a66' }}>Arita Zaman</h3>
                <p>I'm a high school student who loves to give back to the community!</p>
                <br></br>
                <br></br>
                <h2 style={{ color: '#6ca8a6' }}>Web Development</h2>
                <h3 style={{ color: '#384a66' }}>Bella Wang (Age: 16)</h3>
                <p>As an aspiring software developer, Bella is interested in machine learning, game development, and robotics. In her free time, she likes to play chess, soccer, and listen to rock music</p>
                <br></br>
                <br></br>
                <img class = "two" src={aboutlee}></img>
                <h3 style={{ color: '#384a66' }}>Claire Lee</h3>
                <p>Claire Lee is interested in web development, security and privacy, and natural language processing. She hopes to continue making progress in utilizing engineering for humanitarian causes.</p>
                <br></br>
                <br></br>
                <h3 style={{ color: '#384a66' }}>Lina Mariam (Age: 19)</h3>
                <p>Sophomore in Univeristy pursuing Software Engineering. Reads books and makes art during downtime. </p>
                <br></br>
            </section>
            <section class="apositions">
                <h1 style={{ color: '#a42430' }}>Open positions:</h1>
                <p>Are you interested in initiating a new chapter and gaining leadership? If so, 
                    look into this link to get more details for beginning a chapter!
                </p>
                <a href="https://docs.google.com/document/d/13L6dgCqwFmRD5GCJOMAYO7LhyiEDE087cLMdARDtDCo/edit" class="about">Begin a Chapter!</a>
            </section>
            <section class="aevents">
                <h1 style={{ color: '#a42430' }}>Events</h1>
                <div class="row">
                    <div class="column">
                        <img src={comp}></img>
                    </div>
                    <div class="column">
                        <img src={aboutredchess}></img>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default About;

