import React from 'react'
import '../components/styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'

import Badge from '../components/Badge.jsx'
import BadgeForm from '../components/BadgeForm.jsx'
import PageLoading from '../components/PageLoading.jsx'
import api from '../api.js'

class BadgeNew extends React.Component {
    state ={ 
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

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

    handleSubmit = async e => {
        // Se detiene evento para no enviar datos a pagina no especificada
        e.preventDefault()
        this.setState({ loading: true, error: null})

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            // usar props que las paginas dan a react router, le pasa el push para redirigir user a /badges
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error})
        }
    }

    render (){
        if(this.state.loading){
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img 
                        className="BadgeNew_hero-image img-fluid" 
                        src={header} 
                        alt="Logo"
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'First_Name'}
                                lastName={this.state.form.lastName || 'Last_Name'}
                                twitter={this.state.form.twitter || 'Twitter'}
                                jobTitle={this.state.form.jobTitle || 'Job_Title'}
                                email={this.state.form.email || 'Email'}
                                avatarUrl="https://i.imgur.com/U2naWZD.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error = {this.state.error}
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default BadgeNew;