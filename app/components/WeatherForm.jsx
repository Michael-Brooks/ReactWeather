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
            <div><input placeholder="Search weather by city" type="search" ref="location"/></div>
            <div><button className="button expanded hollow">Get Weather</button></div>
          </form>
        </div>
      )
  }
});

module.exports = WeatherForm;

