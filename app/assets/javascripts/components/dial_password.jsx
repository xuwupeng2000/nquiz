var DailPassword = React.createClass({
  getInitialState: function() {
    return { showKeyboard: false, pass: [], fetching: false };
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

    if (passwords.length < 4) {
      passwords.push(value);
      this.setState({pass: passwords});

      if (passwords.length === 4) {
        this.authPass(passwords);
      }
    }
  },

  authPass: function (passwords) {
    this.setState({fetching: true});

    $.ajax({
      method: 'post',
      url: this.props.auth_url,
      data: {team_id: this.props.team_id, pass: passwords}
    })
    .done((data) => {
      window.location.href = data.url; 
    })
    .fail((err) => {
      alert('Well that is a wrong password');
    })
    .complete(() => {
      this.setState({fetching: false, showKeyboard: false, pass: []});
    });
  },

  render: function() {
    var keys = (
      <div className="modal full-padding">
        <div className="modal">
          <div className="modal-content">
            <h3> Please enter the 4 numbers password</h3>
            {this.state.showKeyboard ? <h4> Password you typed: {this.state.pass}</h4> : null}
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
            <div className="row">
              <div className="three columns"> <a className="button" onClick={this.onDail}> 0 </a> </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <a className="button" onClick={this.openKeyboard}> Select this team </a>
        {this.state.showKeyboard ? keys : null}
      </div>
    );
  }

});
