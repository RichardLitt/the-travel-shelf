import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './Admin.css'

class Admin extends Component {

  renderCheckBox(field){



    return (
        <div className="form-check">
          <input type="checkbox" name={field.name} id={field.id} {...field.input} />
            <label className="form-check-label" htmlFor={field.id}>{field.id}</label>
        </div>
    )
  }


  renderTextField(field) {
    const { meta: { touched, error } } = field;

    let type
    if(field.type === 'text'){
      type = (
        <input className={`form-control ${touched && error ? "is-invalid" : ""}`}
               type={field.type}
               {...field.input}
        />
      )
    }

    if(field.type === 'textarea'){
      type = (
        <textarea className={`form-control ${touched && error ? "is-invalid" : ""}`}
                  rows={field.rows}
                  type={field.type}
                  {...field.input} />
      )
    }

    return (
      <div className={'form-group'}>
        <label>{field.label}</label>
        {type}
        <div className="text-danger">
          {touched ? error : ""}
        </div>
        <small className="form-text text-muted">
          {field.help}
        </small>
      </div>
    );
  }

  onSubmit = values => {
    console.log(values)
  }


  render () {
    return (
      <div>
        <div className='container'>
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
              <Field
                label="Bookstore Name"
                name="name"
                type='text'
                help='The name of the bookstore'
                component={this.renderTextField}
              />
              <Field
                label="Summary"
                name="summary"
                type='textarea'
                rows='3'
                help='An introduction to the store in 100 characters or less.'
                component={this.renderTextField}
              />
              <Field
                label="Review"
                name="review"
                type='textarea'
                rows='15'
                help='A review for the store.'
                component={this.renderTextField}
              />
              <Field
                label="Website Url"
                name="url"
                type='text'
                component={this.renderTextField}
                help='example: www.examplebookstore.com'
              />
              <Field
                label="Telephone Number"
                name="telephone"
                type='text'
                component={this.renderTextField}
                help='example: 1 514 056 8445'
              />
              <Field
                id='coffee'
                name="coffee"
                component={this.renderCheckBox}
              />
              <Field
                id="wifi"
                name="Wifi"
                component={this.renderCheckBox}
              />
              <Field
                id="plugs"
                name="plugs"
                type='checkbox'
                component={this.renderCheckBox}
              />
              <Field
                id='events'
                name="events"
                type="checkbox"
                component={this.renderCheckBox}
              />
              <Field
                label="Twitter Account"
                name="twitter"
                type='text'
                component={this.renderTextField}
                help='The stores twitter account'
              />
              <Field
                label="Facebook Account"
                name="facebook"
                type='text'
                component={this.renderTextField}
                help='The stores facebook account'
              />
              <Field
                label="Instagram Account"
                name="instagram"
                type='text'
                component={this.renderTextField}
                help='The stores instagram account'
              />
              <Field
                label="Country"
                name="addressCountry"
                type='text'
                component={this.renderTextField}
                help='The country the store is located in'
              />
              <Field
                label="Region"
                name="addressRegion"
                type='text'
                component={this.renderTextField}
                help='The region the store is located in. This could represent a State or a Province...'
              />
              <Field
                label="Locality"
                name="addressLocality"
                type='text'
                component={this.renderTextField}
                help='The locality the store is located in. This would typically represent a city.'
              />
              <Field
                label="Postal Code"
                name="postalCode"
                type='text'
                component={this.renderTextField}
                help='The the stores postal code.'
              />
              <Field
                label="Street Address"
                name="streetAddress"
                type='text'
                component={this.renderTextField}
                help='The stores street address.'
              />
              <Field
                label="Longitute"
                name="long"
                type='text'
                component={this.renderTextField}
                help='A number representing the east(+) or west(-) angle'
              />
              <Field
                label="Longitute"
                name="lat"
                type='text'
                component={this.renderTextField}
                help='A number representing the north(+) or south(-) angle'
              />
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
          </div>
      <Footer />
      </div>
    )
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.name) {
    errors.name = "Please add the bookstore's name";
  }
  if (!values.summary) {
    errors.summary = "Please add a summary";
  }
  if (!values.review) {
    errors.review = "Please add a review";
  }


  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}
export default reduxForm({validate, form: 'submitStoreForm' })(Admin)
