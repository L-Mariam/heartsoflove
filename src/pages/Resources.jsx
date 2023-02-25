import React from 'react';
import "../index.css";
import "./resources.css";

function Resources() {
    return (
        <>
        <div class="bg-resources"></div>
        <div class="content-resources">
        <section class="cards">
            {/* card 1 */}
            <a href="" title="Go to our Newsletters">
                <article class="card">
                    <h1> Newsletters </h1>
                    <div class="card-content">
                    <img src="placeholder.jpg" alt="" /> 
                    </div>
                </article>
            </a>
            {/* card 2 */}
            <a href="" title="Go to our Newsletters">
                <article class="card">
                    <h1> Blogs </h1>
                    <div class="card-content">
                    <img src="placeholder.jpg" alt="" /> 
                    </div>
                </article>
            </a>
            {/* card 3 */}
            <a href="" title="Go to our Newsletters">
                <article class="card">
                    <h1> Chapters </h1>
                    <div class="card-content">
                    <img src="placeholder.jpg" alt="" /> 
                    </div>
                </article>
            </a>
            {/* card 4 */}
            <a href="" title="Go to our Newsletters">
                <article class="card">
                    <h1> <br></br> </h1>
                    <div class="card-content">
                    <img src="placeholder.jpg" alt="" /> 
                    </div>
                </article>
            </a>
            {/* card 5 */}
            <a href="" title="Go to our Newsletters">
                <article class="card">
                    <h1> Podcasts </h1>
                    <div class="card-content">
                    <img src="placeholder.jpg" alt="" /> 
                    </div>
                </article>
            </a>
        </section>
        </div>
        </>
    );
}

export default Resources;