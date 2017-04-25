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

  onCancel: function () {
    this.setState({fetching: false, showKeyboard: false, pass: []});
  },

  render: function() {
    var keyboard = (
      <div className="">
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-content box">

            <div className="columns notification">
              <h3> Please enter the 4 numbers password</h3>
            </div>
            <div className="columns notification">
              {this.state.showKeyboard ? <h4> Password you typed: {this.state.pass}</h4> : null}
            </div>

            <div className="columns is-mobile">
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='1'> 1 </div>
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='2'> 2 </div>
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='3'> 3 </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='4'> 4 </div>
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='5'> 5 </div>
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='6'> 6 </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='7'> 7 </div>
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='8'> 8 </div>
              <div className="column is-one-third button is-large dail" onClick={this.onDail} value='9'> 9 </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-half button is-large dail" onClick={this.onDail} value='0'> 0 </div>
              <div className="column is-half button is-large dail" onClick={this.onCancel}> Cancel </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <a className="button is-info is-outlined" onClick={this.openKeyboard}> Select this team </a>
        {this.state.showKeyboard ? keyboard : null}
      </div>
    );
  }

});
