// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import formFields from './formFields'
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => { //destructured off of 
        return(
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
{/*             
            <div>
                <div> 
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div> 
                    <label>Survey Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Email body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Recipients</label>
                    <div>{formValues.emails}</div>
                </div>
            </div> */}

                <button 
                onClick={() => submitSurvey(formValues)}
                className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                    Back
                </button>
                <button className="green btn-flat white-text right">
                    Send Survey
                    <i className="material-icons right">email</i>
                </button>
        </div>
    )
}

function mapStateToProps(state) {
    // console.log(state)
    return { 
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(SurveyFormReview)