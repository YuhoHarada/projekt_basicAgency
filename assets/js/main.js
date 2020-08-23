const aside = document.querySelector("aside")
let link = ".."
if (index) {
    link = "assets"
}
aside.innerHTML = `
        <div id="asideHeader">
            <h3>(6) Internal Works <br> ©2020 c/o BASIC®</h3>
            <p>
                A collection of internal project and initiatives under <br> the BASIC® brand.
            </p>
            <div id="close"><img src="${link}/img/close.svg" alt=""></div>
        </div>
        <section>
            <article>
                <div class="inhalt">
                    <img src="${link}/img/selected-work1.jpg" alt="">
                    <h4>Culture Manual® ©2018</h4>
                    <h5>Agency Culture & Onboarding</h5>
                    <p>
                        To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.
                    </p>
                    <a href="#">VISIT THE SITE</a>
                </div>
                <div class="num">01</div>
            </article>
            <article>
                <div class="inhalt">
                    <img src="${link}/img/selected-work2.jpg" alt="">
                    <h4>Moves® ©2019</h4>
                    <h5>Our New HQ</h5>
                    <p>
                        When we moved into our new HQ, we put together a site experience providing an in-depth look into the two-year process imagining, designing, and developing our new office we call home.
                    </p>
                    <a href="#">VISIT THE SITE</a>
                </div>
                <div class="num">02</div>
            </article>
            <article>
                <div class="inhalt">
                    <img src="${link}/img/selected-work3.jpg" alt="">
                    <h4>Culture Manual® ©2018</h4>
                    <h5>Agency Culture & Onboarding</h5>
                    <p>
                        To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.
                    </p>
                    <a href="#">VISIT THE SITE</a>
                </div>
                <div class="num">03</div>
            </article>
            <article>
                <div class="inhalt">
                    <img src="${link}/img/selected-work4.jpg" alt="">
                    <h4>Culture Manual® ©2018</h4>
                    <h5>Agency Culture & Onboarding</h5>
                    <p>
                        To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.
                    </p>
                    <a href="#">VISIT THE SITE</a>
                </div>
                <div class="num">04</div>
            </article>
            <article>
                <div class="inhalt">
                    <img src="${link}/img/selected-work5.jpg" alt="">
                    <h4>Culture Manual® ©2018</h4>
                    <h5>Agency Culture & Onboarding</h5>
                    <p>
                        To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.
                    </p>
                    <a href="#">VISIT THE SITE</a>
                </div>
                <div class="num">05</div>
            </article>
        </section>
    `

document.getElementById("toAside").addEventListener("click", () => {
    aside.style.height = "100vh"
    aside.style.padding = "5vh 5vw"
})

document.getElementById("close").addEventListener("click", () => {
    aside.style.height = "0"
    aside.style.padding = "0 5vw"
})
