import React from "react";
class Registration extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        uname: "",
        pass: "",
        email: "",
        mobile: "",
        fin: "",
      };
    }
  
    onChangeCtrl=(e)=> {
      var cname = e.target.name;
      var cval = e.target.value;
      console.log(cname+" "+cval)
      this.setState({ [cname]: cval });
    }
  
    onSubmit=(e)=> {
      e.preventDefault();
      var ereg = new EReg(
        this.state.uname,
        this.state.pass,
        this.state.email,
        this.state.mobile
      );
      let a = JSON.stringify(ereg);
      this.setState({ fin: a });
    }
  
    render() {
      return (
        <div>
          <form method="post" onSubmit={this.onSubmit}>
            <table className="table table-bordered">
              <tr>
                <td>
                  <span className="badge">username</span>
                </td>
                <td>
                  <input
                    type="text"
                    required="true"
                    name="uname"
                    onChange={this.onChangeCtrl}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">password</span>
                </td>
                <td>
                  <input
                    type="text"
                    required="true"
                    name="pass"
                    onChange={this.onChangeCtrl}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">email</span>
                </td>
                <td>
                  <input
                    type="text"
                    required="true"
                    name="email"
                    onChange={this.onChangeCtrl}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="badge">mobile</span>
                </td>
                <td>
                  <input
                    type="text"
                    required="true"
                    name="mobile"
                    onChange={this.onChangeCtrl}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" className="btn btn-info" value="Send" />
                </td>
                <td>
                  <input type="reset" value="Cancel" />
                </td>
                {/* <td>
                    <input type="submit" value="All Employees"/>
                </td> */}
              </tr>
            </table>
          </form>
          <br />
          {/* <div className="alert alert-info">
            {this.state.uname +
              " " +
              this.state.email +
              " " +
              this.state.mobile +
              " " +
              this.state.pass}
          </div> */}
          <div className="alert alert-danger">{this.state.fin}</div>
        </div>
      );
    }
  }
  
  class EReg {
    constructor(uname, pass, email, mobile) {
      this.uname = uname;
      this.pass = pass;
      this.email = email;
      this.mobile = mobile;
    }
  }
  
  export default Registration;

  