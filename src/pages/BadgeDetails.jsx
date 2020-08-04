import React from 'react'
import { Link } from 'react-router-dom'

// import '../components/styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading.jsx'
import PageError from '../components/PageError.jsx'
import Badge from '../components/Badge.jsx'
import api from '../api.js'

class BadgeDetails extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    // Cuano el componente esté listo se traen los datos
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading:true, error: null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
                    // this.props.match -> tiene objeto -> params-> tiene variable -> badgeId 
            )
            this.setState({ loading: false, data: data})

        } catch (error) {
            this.setState({ loading: false, error: error})
        }
    }

    render () {
        if(this.state.loading){
            return <PageLoading />;
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return (
            <div className="BadgeDetails_hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails_hero-attendant-name">
                            <h1> 
                                { this.state.data.firstName}
                                { this.state.data.lastName}
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName = {this.state.data.firstName} 
                                lastName = {this.state.data.lastName} 
                                email = {this.state.data.email} 
                                twitter = {this.state.data.twitter} 
                                jobTitle = {this.state.data.jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div> <Link  className="btn btn-primary mb-4" to ={`/badges/${this.state.data.id}/edit`}> Edit </Link> </div>
                            </div>
                            <div>
                                <div> <button className="btn btn-danger"> Delete </button> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default BadgeDetails