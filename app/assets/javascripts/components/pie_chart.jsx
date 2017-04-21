var PieChart = React.createClass({

  componentDidMount: function() {
    var config = {
      "type":"pie3d",
      "series": this.props.series,
    };

     
    zingchart.render({ 
      id : 'team-pie-chart', 
      data : config, 
      height: 400, 
      width: "100%" 
    });
  },

  render: function() {
    return (
      <div id="team-pie-chart"></div>
    );
  }

});
