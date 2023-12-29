import React from "react";
import others1 from "../assets/images/image-retro-pcs.jpg";
import others2 from "../assets/images/image-top-laptops.jpg";
import others3 from "../assets/images/image-gaming-growth.jpg";

function Layout() {
  return (
    <div className="grid">
      <div className="image"></div>
      <div className="heading">
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
      <div className="news">
        <div className="title">New</div>
        <article>
          <h3>Hydrogen VS Electric Cars</h3>
          <p> Will hydrogen-fueled cars ever catch up to EVs? </p>
        </article>
        <hr />
        <article>
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </article>
        <hr />
        <article>
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </article>
      </div>
      <div className="description">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read more</button>
      </div>
      <div className="others">
        <article>
          <img src={others1} alt="" />
          <div className="text">
            <div className="no">01</div>
            <div className="title">Reviving Retro PCs</div>
            <div className="intro">
              What happens when old PCs are given modern upgrades?
            </div>
          </div>
        </article>
        <article>
          <img src={others2} alt="" />
          <div className="text">
            <div className="no"> 02</div>
            <div className="title">Top 10 Laptops of 2022</div>
            <div className="intro">
              Our best picks for various needs and budgets.
            </div>
          </div>
        </article>
        <article>
          <img src={others3} alt="" />
          <div className="text">
            <div className="no">03</div>
            <div className="title">The Growth of Gaming</div>
            <div className="intro">
              How the pandemic has sparked fresh opportunities.
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Layout;
