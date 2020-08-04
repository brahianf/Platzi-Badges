import React from 'react'

class BadgeForm extends React.Component {
    // state = {};
    // handleChange = (e) => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // })
    //     // Guardar información en estado objeto 
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }
    handleClick = (e) => {
        console.log('Button was click')
    }
    // handleSubmit = (e) => {
    //     // evitar que el formulario se envie
    //     e.preventDefault();
    //     console.log('Form was submit')
    //     console.log(this.state)
    // }
    render () {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>twitter</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button 
                        // type="button" 
                        onClick={this.handleClick} 
                        className="btn btn-primary">
                        Save
                    </button>

                    {/* Si existe este error */}
                    {this.props.error && (
                        <p className="text-danger">
                            {this.props.error.message}
                        </p>
                    )}
                </form>
            </div>

        )
    }
}

export default BadgeForm;