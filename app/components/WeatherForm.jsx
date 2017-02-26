var React = require('react');

var WeatherForm = React.createClass({
  handleSearch: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
      return (
        <div>
          <form onSubmit={this.handleSearch}>
            <div><input placeholder="Enter city name" type="text" ref="location"/></div>
            <div><button>Get Weather</button></div>
          </form>
        </div>
      )
  }
});

module.exports = WeatherForm;

