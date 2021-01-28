//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'

const FIELDS = [
    { label: 'Survey Title',  name: 'title', noValueError: 'Provide a survey title' },
    { label: 'Subject Line',  name: 'subject', noValueError: 'Provide a subject' },
    { label: 'Email Body',  name: 'body', noValueError: 'Provide the body of the email' },
    { label: 'Recipient List',  name: 'emails', noValueError: 'provide list of recipients' }

]


class SurveyForm extends Component {
    renderFields(){
        // return(
            // <div>
            //     <Field label="Survey Title" type="text" name="title" component={SurveyField} />
            //     <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
            //     <Field label="Email Body" type="text" name="body" component={SurveyField} />
            //     <Field label="Recipient List" type="text" name="emails" component={SurveyField} />
            // </div>
        // )
        return _.map(FIELDS, ({ label, name }) => { //used es6 syntax to destructure the field object into label and name properties
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        })
    }


    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {/* <Field
                    type="text"
                    name="surveyTitle"
                    component="input"
                    /> */}
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">Next 
                    <i className="material-icons right">done</i></button>
                 </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {};

    // if(!values.title){
    //     errors.title = 'You must provide a title!'
    // }
    // if(!values.subject){
    //     errors.subject = 'You must provide a subject'
    // }
    // if(!values.body){
    //     errors.body = 'You must provide a body!'
    // }
    // if(!values.emails){
    //     errors.emails = 'You must provide emails!'
    // }
    errors.emails = validateEmails(values.emails || '')
    
    _.each(FIELDS, ({ name, noValueError }) => {
        if (!values[name]){
            errors[name] = noValueError
        }
    })

    return errors;
}

export default reduxForm({
    validate, // validate: validate,
    form: 'surveyForm'
})(SurveyForm)