import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Header extends Component {
    renderContent(){
      switch (this.props.auth){
        case null:
          return;
        case false:
          return <li><a href="/auth/google">Login with Google</a></li>
        default: 
          return <li><a href="/api/logout">log out </a></li>;
      }
    }

    render(){
      console.log("props", this.props)
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
                Emaily
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderContent()}   
              </ul>
            
            </div>
          </nav>
        )
    }
}

function mapStateToProps({auth}){
  return{ auth: auth };
} //same as passing through state and auth: auth.state

export default connect(mapStateToProps)(Header);