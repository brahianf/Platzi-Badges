import React from 'react';
import './styles/Badge.css'
// createReactApp with Webpack empaquetan archivos importados
import confLogo from '../images/badge-header.svg';


// Componentes son clases
class Badge extends React.Component {
    // Método obligatorio que define cual va a ser el resultado de pantalla
    render() {
        const {
            firstName,
            lastName,
            avatarUrl,
            jobTitle,
            twitter
        } = this.props;

        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo} alt="logoConf"/>
                </div>
                <div className="badge_section-name">
                    <img className="badge_avatar" src={avatarUrl} alt="Avatar"/>
                    <h1>{firstName}<br/> {lastName}</h1>
                </div>
                <div className="badge_section-info">
                    <h3>{jobTitle}</h3>
                    <div>@{twitter}</div>
                </div>
                <div className="badge_footer">
                    #platziConf
                </div>
            </div>
        )
    }
}

export default Badge;