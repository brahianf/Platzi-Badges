import React from 'react'
import '../components/styles/BadgeNew.css'
import header from '../images/badge-header.svg'

import Badge from '../components/Badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx'

class BadgeNew extends React.Component {
    state ={ form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }};

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name]= e.target.value;
        this.setState({
            // form: nextForm
            form: {
                // Spret de valores anteriores en this.state.form y se agrega nuevo
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    render (){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://i.imgur.com/U2naWZD.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default BadgeNew;