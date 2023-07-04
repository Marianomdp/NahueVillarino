import React from "react";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio-container" style={{ minHeight: "82vh" }}>
      <br></br>

      <h1> Biography</h1>
      <div className="bio-in">
        <p>
          {" "}
          "Hi, I'm Nahuel Villarino, a professional photographer and
          videographer with over 10 years of experience. I was born in Mar del
          Plata, Buenos Aires, Argentina, and I've had the amazing opportunity
          to capture special moments and create visual stories in various fields
          throughout my career.
          <br></br>
          <br></br>
          From private social events to lively clubs, bars, and exciting
          concerts, I've had the chance to document a wide range of occasions.
          I'm also skilled in product photography and capturing the breathtaking
          landscapes of destinations like Cerro Catedral (Bariloche). The beauty
          of nature has always fascinated me, and I strive to capture its
          essence through my lens.
          <br></br>
          <br></br>
          Although I'm originally from Mar del Plata, I've traveled extensively
          around the world. At the age of 21, I embarked on my first
          international trip to Ecuador, where I explored the Amazon rainforest,
          discovered stunning beaches, and met incredible people who have had a
          lasting impact on both my personal and professional life. This
          experience ignited my passion for capturing unique images that tell
          powerful stories. I later ventured to Peru in search of the legendary
          wave in Lobitos. I stayed at a surf camp with two friends, embracing
          the thrill of the ocean, capturing mesmerizing photos, and enjoying a
          carefree lifestyle. Eventually, I returned to Argentina.
          <br></br>
          <br></br>
          After spending several years honing my craft in my home country, I
          felt a strong desire to explore new horizons. This led me to Brazil,
          where I encountered diverse wonders. Itacoatiara was my first
          destination, with its mythical and impressive waves leaving a lasting
          impression on me. Places like Pampo, Costao, and Shock provided me
          with awe-inspiring moments that fueled my creativity. Buzios followed,
          offering unique opportunities to capture nature's beauty, swim
          alongside majestic turtles, and witness breathtaking sunsets. My time
          in Brazil allowed me to amass a vast collection of photos and videos.
          Finally, I visited Ubatuba, which welcomed me with open arms and
          captivated me with its abundant natural beauty. I had unforgettable
          experiences there, from riding the waves to encountering fascinating
          spiders and forming deep connections with fellow adventurers.
          <br></br>
          <br></br>
          Upon returning to my hometown of Mar del Plata, Argentina, I dedicated
          myself to building my own brand and working with a diverse range of
          clients. I had the privilege of collaborating with renowned brands
          such as Branca, Puma Energy, CBSe, Corona, and Quilmes, among others.
          Nightclubs became a primary focus, and I had the pleasure of working
          alongside internationally acclaimed DJs, including Martinez Brothers,
          Eelke Kleijn, Sam Paganinni, Angy Kore, Nick Warren, Guy Mantzur,
          Ricardo Villalobos, and Miss Monique. These experiences in the
          electronic music scene expanded my creative horizons and enriched my
          portfolio.
          <br></br>
          <br></br>
          After facing the challenges posed by the quarantine in Argentina, I
          felt an insatiable urge to explore new frontiers, embrace change, and
          immerse myself in fresh experiences and perspectives. As a versatile
          photographer, I thrive on the opportunities provided by change, which
          unlock my creativity and enable me to deliver exceptional results.
          That's why I made the decision to start a new chapter in Australia,
          where I'm currently based. This exciting new beginning fuels my
          motivation, and I'm dedicated to pushing the boundaries of my passion
          for photography and videography."
        </p>
        <br />
        <br />
        <img
          className="img-bio"
          src="https://res.cloudinary.com/dnj3a7mfg/image/upload/v1687879054/NGF_2732_u37ram.jpg"
          alt="Nahuel Villarino"
        />
      </div>
    </div>
  );
};

export default Bio;
