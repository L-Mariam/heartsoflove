import React from 'react';
import "../index.css";
import "./shop.css";

function Shop() {
    return (
        <>
        <div class="bg-shop"></div>
        <div class="content-shop">
            <h1>Look below to see the latest items in our shop!</h1>
            <p class = "subheading"> A Jolly Good Show Hoodie</p>
            <section class="contents-shop">
                <a href="" title="Get our Hoodie!">
                    <article class="card-shop">
                    <div class="card-content-shop">
                        <img src="placeholder.jpg" alt=""/>
                    </div>
                    </article>
                </a>
                <a href="" title="Get our Hoodie!">
                    <article class="card-shop">
                    <div class="card-content-shop">
                        <img src="placeholder.jpg" alt=""/>
                    </div>
                    </article>
                </a>
            </section>
            <p>Click here to shop: <a href="https://my-store-c87b67.creator-spring.com/listing/a-jolly-good-show-hoodie" class="join"  title="Get our Hoodie!">https://my-store-c87b67.creator-spring.com/listing/a-jolly-good-show-hoodie </a> </p>
        </div>
        </>
    );
}

export default Shop;