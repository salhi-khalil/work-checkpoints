import React from "react";

const About = () => {
  return (
    <div className="About">
      <h1>Objective:</h1>
      <p>
        In this checkpoint, we are going to use the movie app we have created in
        the previous checkpoint and afterwards, we will use the router library
        to route our views.
      </p>
      <hr />
      <h1>Instructions:</h1>
      <ol>
        <li>
          We will add a description and the trailer link (embed video link) to
          the object movie.
        </li>
        <li>
          Every time I click on a movie card, it will take me to the movie
          description and trailer page.
        </li>
        <li>In the description page, I can navigate back to the home page.</li>
      </ol>
    </div>
  );
};

export default About;
