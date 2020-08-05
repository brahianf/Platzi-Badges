import React from 'react'

import PageLoading from '../components/PageLoading.jsx'
import PageError from '../components/PageError.jsx'
import api from '../api.js'
import BadgeDetails from './BadgeDetails.js'

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
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

    handleOpenModal = e => {
        this.setState({modalIsOpen:true})
    }

    handleCloseModal = e => {
        this.setState({modalIsOpen:false})
    }

    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null})

        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.setState({ loading: false})
            this.props.history.push('/badges')
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
            <BadgeDetails 
                onCloseModal={this.handleCloseModal}
                onOpenModal= {this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
                badge={this.state.data}
            />
        );
    }

}

export default BadgeDetailsContainer