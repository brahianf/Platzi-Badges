import React from 'react'
import { Link } from 'react-router-dom'

import '../components/styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList.jsx'
import PageLoading from '../components/PageLoading.jsx'
import PageError from '../components/PageError.jsx'
import MiniLoader from '../components/MiniLoader.jsx'

import api from '../api.js'

class Badges extends React.Component {

    constructor (props) {
        // inicializar super clase component
        super(props)

        this.state = {
            loading: true,
            error: null,
            data: undefined
        };
    }

    componentDidMount (){
        this.fetchData()

        this.intervalId = setInterval( this.fetchData, 10000);
    }

    componentWillUnmount () {
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        // Si se vuelve a llamar a fetchData loading: false hay que regresarlo a true, y limpiar errores
        this.setState({
            loading: true,
            error: null,
        })
        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log({
            prevProps: prevProps,
            prevState: prevState
        })
        console.log({
            props: this.props,
            state: this.state,
        })
    }

    componentWillUnmount() {
        // momento preciso antes que salga componente del DOM
        // Limpiar memoria. liberar la perdida de memoria con muchos componentes y timeouts pendientes
        clearTimeout(this.timeoutId)
    }

    render () {
        if(this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if(this.state.error)  {
            return <PageError error={this.state.error} />;
        }

        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" 
                                src={confLogo} alt="conf logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badge_container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                            {/* Si state loading es true se muestra el msj */}
                            {this.state.loading && <MiniLoader />}
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Badges;