var DailPassword = React.createClass({
  getInitialState: function() {
    return { showKeyboard: false, pass: [] };
  },

  componentDidMount: function() {
  },

  openKeyboard: function () {
    var currentValue = !this.state.showKeyboard;
    this.setState({ showKeyboard: currentValue});
  },

  onDail: function (event) {
    var value = event.target.innerText;
    var passwords = this.state.pass;
    passwords.push(value);
    this.setState({pass: passwords});
    console.log('click', this.state.pass);
  },

  authPass: function (pass) {

  },

  render: function() {
    var keys = (
      <div>
        <div className="row">
          <div className="three columns"> <a className="button" onClick={this.onDail} value='1'> 1 </a> </div>
          <div className="three columns"> <a className="button" onClick={this.onDail} value='2'> 2 </a> </div>
          <div className="three columns"> <a className="button" onClick={this.onDail} value='3'> 3 </a> </div>
        </div>
        <div className="row">
          <div className="three columns"> <a className="button" onClick={this.onDail}> 4 </a> </div>
          <div className="three columns"> <a className="button" onClick={this.onDail}> 5 </a> </div>
          <div className="three columns"> <a className="button" onClick={this.onDail}> 6 </a> </div>
        </div>
        <div className="row">
          <div className="three columns"> <a className="button" onClick={this.onDail}> 7 </a> </div>
          <div className="three columns"> <a className="button" onClick={this.onDail}> 8 </a> </div>
          <div className="three columns"> <a className="button" onClick={this.onDail}> 9 </a> </div>
        </div>
      </div>
    );

    return (
      <div>
        <a className="button" onClick={this.openKeyboard}> Select this team </a>
        <div>{this.state.pass}</div>
        {this.state.showKeyboard ? keys : null}
      </div>
    );
  }

});
