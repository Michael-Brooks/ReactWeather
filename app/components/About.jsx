var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-centered">About</h1>
      <p>
        This is a weather application built on React. I have built this
        for "The Complete React Web App Developer" course.
      </p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used</li>
        <li><a href="http://openweathermap.orh">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.</li>
      </ul>
    </div>
  );
};

module.exports = About;