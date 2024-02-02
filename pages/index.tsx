import Head from 'next/head';
import React from 'react';
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="assets/globals.css" />
        <link rel="stylesheet" href="assets/styleguide.css" />
        <link rel="stylesheet" href="assets/style.css" />
      </Head> 
      
      { /*Navigation Links */}
      <nav className="navigation">
        <ul>
            <li><Link href="#First">Turn Challenges into Adventures </Link></li>
            <li><Link href="#Second">Micro-Changes Ignite Personal Growth</Link></li>
            <li><Link href="#Third">Action feeds motivation</Link></li>
            <li><Link href="#Fourth">Unlocking the potential in all</Link></li>
            <li><Link href="#Fifth">Our mission</Link></li>
            <li><Link href="#Sixth">Our Guiding Principles</Link></li>
            <li><Link href="#Seventh">Introducing lovegame</Link></li>
            <li><Link href="#Eight">Play the Love</Link></li>
        </ul>
      </nav>


      <div className="home">
        <div className="div">
          <div className="overlap">

            {/*Turn challenges into adventures*/}
            <div className="header" id="First">
              <img className="ellipse" src="assets/ellipse-2.png" />
              <div className="overlap-group">
                <img className="group" src="assets/group-1.png" />
                <p className="heading">
                  <span className="text-wrapper">Turn Challenges into </span>
                  <span className="span">Adventures</span>
                  <span className="text-wrapper">&nbsp;</span>
                </p>
                <p className="text">
                  <span className="text-wrapper-2">Experience the Joy of Growth: Play, Engage, Transform.<br /></span>
                  <span className="text-wrapper">Our purpose-driven mind games make dream-chasing an achievable, exhilarating
                    journey.
                  </span>
                </p>
                <img className="layer" src="assets/layer-1-1.png" />
              </div>
            </div>


            {/*Micro-changes*/}
            <div className="overlap-wrapper" id="Second">
              <div className="overlap-2">
                <p className="p">
                  <span className="span">Micro-</span>
                  <span className="span">Changes</span>
                  <span className="text-wrapper">
                    Ignite
                  </span>
                  <span className="text-wrapper">
                    Personal
                  </span>
                  <span className="text-wrapper">
                    Growth
                  </span>
                </p>
                <div className="overlap-3">
                  <p className="text-2">
                    Explore our fusion of coaching, learning, and gamification, all grounded in scientific insights. Our
                    methodology is tailored to engage and empower, transforming you from a mere observer to a leading
                    actor in your personal growth adventure.
                  </p>
                  <img className="mask-group" src="assets/mask-group-3.png" />
                  <div className="text-wrapper-3">72%</div>
                  <img className="vector" src="assets/vector-24.svg" />
                  <p className="text-wrapper-4">Want their lives to change</p>
                </div>
              </div>
            </div>


            <div className="menu">
              <img className="img" src="assets/vector.svg" />
              <div className="text-wrapper-5">micromojo</div>
              <img className="vector-2" src="assets/vector-25.svg" />
              <img className="vector-3" src="assets/vector-26.svg" />
            </div>
          </div>

          {/*Action feeds motivation*/}
          <div className="overlap-group-wrapper" id="Third">
            <div className="overlap-4">
              <img className="mask-group-2" src="assets/mask-group-2.png" />
              <p className="action-feeds">
                <span className="span">Action</span>
                <span className="text-wrapper"> feeds </span>
                <span className="span">motivation</span>
              </p>
              <p className="we-all-dream-of">
                <span className="text-wrapper-2">We all dream of changing something important in our lives.<br /></span>
                <span className="text-wrapper-6">The very aspects we yearn to improve – our relationships, romantic
                  partnerships, personal development,
                  and health – often remain mere wishes. <br />Self-improvement frequently stumbles in the absence of
                  action, which requires structure, enjoyment, involvement, and guided micro-progress. <br /></span>
              </p>
              <img className="group-2" src="assets/group-383.png" />
              <img className="group-3" src="assets/group-384.png" />
            </div>
          </div>

          {/*Footer*/}
          <div className="footer">
            <div className="container">
              <div className="links">
                <img className="column" src="assets/column.png" />
                <div className="rectangle"></div>
                <div className="column-2">
                  <div className="heading-3">About</div>
                  <div className="footer-links">
                    <div className="link">
                      <div className="link-2">Founders Note</div>
                    </div>
                    <div className="link">
                      <div className="link-2">Our Company</div>
                    </div>
                    <div className="link">
                      <div className="link-2">Our History</div>
                    </div>
                  </div>
                </div>
                <div className="column-2">
                  <div className="heading-3">Contact</div>
                  <div className="footer-links">
                    <div className="link">
                      <div className="link-2">Link Eleven</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="credits">
                <div className="divider"></div>
                <div className="div-2">
                  <div className="credits-2">
                    <p className="text-4">© 2023 Relume. All rights reserved Micromojo ApS CVR-nr. DK 44139170</p>
                    <div className="footer-links-2">
                      <div className="link-3">Privacy Policy</div>
                      <div className="link-3">Terms of Service</div>
                      <div className="link-3">Cookies Settings</div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="layer-2" src="assets/layer-1.svg" />
            </div>
            <img className="image" src="assets/image-12.png" />
          </div>


          <div className="overlap-5">
            <div className="header-2">


              {/*Introdcuting lovegame + micromojo */}
              <div className="overlap-6" id="Seventh">
                <div className="bottom-section-header">
                  <img className="vector-6" src="assets/vector.svg" />
                  <div className="text-wrapper-6">micromojo</div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-7">
                    <div className="overlap-group-2">
                      <div className="heading-4">Introducing lovegame</div>
                      <p className="relationships-are">
                        Relationships are key to how we experience life. They might seem hard to develop or reignite, but
                        with our approach, it's simpler. Join us on an adventure that brings enlightenment,
                        challenges, new perspectives, and inspires action, one step at a time. Our LoveGame guides you
                        through it like you never experienced before.
                      </p>
                      <img className="group-4" src="assets/group-12.png" />
                    </div>
                    <div className="text-button-standard">
                      <div className="woman">Learn more about lovegame</div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Play the Lovegame*/}
              <div className="buy-game-intro" id="Eight">
                <div className="overlap">
                  <img className="group" src="assets/group-12.png" />
                  <img className="image-2" src="assets/image-8.png" />
                  <img className="image-right" src="assets/image.png" />
                  <img className="image" src="assets/image-11.png" />
                  <div className="subheading">
                    <p className="span">Play the<br />Lovegame<br /></p>
                    <p className="text-wrapper-2"><br />Embark on a 10-day journey, meticulously crafted to rekindle the
                      spark in your
                      relationship<br /><br />Join
                      us on an adventure that brings enlightenment, challenges, new perspectives, and inspires action, one
                      step at
                      a time. Our LoveGame guides you through it like you never experienced before.<br /><br /></p>
                    <button className="button">
                      <div className="text-wrapper">Buy lovegame now</div>
                    </button>
                  </div>
                </div>
              </div>


            </div>

            {/*Our guiding principles*/}
            <div className="frame" id="Sixth">
              <div className="overlap-8">
                <p className="text-6">
                  <span className="text-wrapper-2">Element of Surprise</span>
                  <span className="text-wrapper-11">
                    Expect the unexpected, adding an exciting twist to your journey of self-discovery.<br /><br /></span>
                  <span className="text-wrapper-2">Seamless Solutions for Your Busy Life</span>
                  <span className="text-wrapper-11">Our solution is designed to be effortless, accessible, and perfectly suited
                    for a busy
                    lifestyle.<br /></span>
                  <span className="text-wrapper-2">Action-Oriented</span>
                  <span className="text-wrapper-11">
                    We emphasize actionable steps, turning insights and surprises into meaningful growth. </span>
                </p>
                <img className="mask-group-3" src="assets/mask-group-1.png" />
                <p className="text-7">
                  <span className="text-wrapper-2">Build on Insight</span>
                  <span className="text-wrapper-11">Every step is grounded in the best possible insights.<br /></span>
                  <span className="text-wrapper-2">Fun and Challenging</span>
                  <span className="text-wrapper-11">We believe growth should be enjoyable and stimulating<br /></span>
                  <span className="text-wrapper-2">Collective Journey</span>
                  <span className="text-wrapper-11">Transformation is not a solo endeavour – our approach fosters collaboration
                    and shared experiences<br />
                  </span>
                </p>
              </div>
              <p className="heading-5"><span className="text-wrapper">Our Guiding </span> <span className="span">Principles</span></p>
            </div>

            {/*Our mission is clear*/}
            <div className="rectangle-3" id="Fifth"></div>
            <p className="heading-6">
              <span className="text-wrapper">Our mission is clear: empower individuals to unlock their full potential through
              </span>
              <span className="text-wrapper-12">micro-changes,</span>
              <span className="text-wrapper">fostering meaningful and lasting </span>
              <span className="text-wrapper-12">transformation.</span>
            </p>

          </div>


          {/*Unlocking the potential*/}
          <div className="header-3" id="Fourth">
            <div className="overlap-9">
              <div className="overlap-10">
                <div className="mask-group-4"></div>
                <div className="text-wrapper-13">74%</div>
                <p className="text-8">74% have at least one personal goal they want havenâ€™t achieved.</p>
                <div className="text-9">*</div>
                <div className="text-10">*</div>
                <img className="vector-4" src="assets/vector-14.svg" />
                <img className="vector-5" src="assets/vector-16.svg" />
                <p className="heading-7">
                  <span className="text-wrapper">Unlocking the </span>
                  <span className="span">potential</span>
                  <span className="text-wrapper"> in all </span>
                </p>
              </div>
              <p className="heading-8">
                Everyone has the potential to grow and overcome life&#39;s challenges. We&#39;re here to support and
                celebrate your journey in a new format. <br /><br />We have explored today&#39;s solutions and found them
                lacking a crucial element â€“ alignment with our intrinsic nature as curious, playful, and fun-loving
                beings.
              </p>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
