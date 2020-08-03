import React from 'react'
import { Link } from 'react-router-dom'

import '../components/styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList.jsx'
import PageLoading from '../components/PageLoading.jsx'
import PageError from '../components/PageError.jsx'

import api from '../api.js'

class Badges extends React.Component {

    constructor (props) {
        // inicializar super clase component
        super(props)

        console.log('1.constructor()')
        this.state = {
            loading: true,
            error: null,
            data: undefined
        };
    }

    componentDidMount (){
        console.log('3.componentDidMount')
        this.fetchData()
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
        console.log(' 5. componentDidUpdate()')
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
        console.log(' 6. componentWillUnmount()')
        // Limpiar memoria. liberar la perdida de memoria con muchos componentes y timeouts pendientes
        clearTimeout(this.timeoutId)
    }

    render () {
        console.log('2/4 .render()')
        if(this.state.loading === true)  {
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
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default Badges;