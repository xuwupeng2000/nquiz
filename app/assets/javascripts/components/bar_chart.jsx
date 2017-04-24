var BarChart = React.createClass({

  componentDidMount: function() {
    var config = {
      type: 'bar', 
      plot: { "tooltip": { "text": "At %t" } },
      series: this.props.series
    };

     
    zingchart.render({ 
      id : 'team-bar-chart', 
      data : config, 
      height: 400, 
      width: "100%" 
    });
  },

  render: function() {
    return (
      <div id="team-bar-chart"></div>
    );
  }

});
