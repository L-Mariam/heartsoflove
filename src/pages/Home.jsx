import React from 'react';
import "../index.css";

function Home() {
    return (
        <div class="content">
            <section class="himg">
                <h1>Home</h1>
                <button>Learn More</button>
                <button>Join Us</button>
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
                <a href=""><img src="" alt=""/></a>
                <a href=""><img src="" alt=""/></a>
                <a href=""><img src="" alt=""/></a>
                <a href=""><img src="" alt=""/></a>
            </section>
            <section class="hdonate">
                <h1>Donate</h1>
                <p>Help support our cause!</p>
                <a href="https://hack.ms/donate-heartsoflove">https://hack.ms/donate-heartsoflove</a>
            </section>
            <section class="hpartners">
                <h1>Partners</h1>
                <a href=""><img src="" alt=""/></a>
                <a href=""><img src="" alt=""/></a> 
            </section>
            <section class="sponsors">
                <h1>Sponsors</h1>
                <a href=""><img src="" alt=""/></a>
                <a href=""><img src="" alt=""/></a> 
            </section>
        </div>
    );
}

export default Home;