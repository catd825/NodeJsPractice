import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends  Component {
    render(){
        // debugger
        return(
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email credits" 
                amount={500} //equiv to $5usd
                token={token => this.props.handleToken(token)} //expects a callback function, called afer we receive the auth token from stripe api
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >   
                    <button className="btn">
                        Add Credits
                    </button>
                </StripeCheckout>
        )
    }
}

//no map state to props
export default connect(null, actions)(Payments);