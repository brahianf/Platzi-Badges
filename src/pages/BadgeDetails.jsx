import React from 'react'
import { Link } from 'react-router-dom'

// import '../components/styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge.jsx'
import DeleteBadgeModal from '../components/DeleteBadgeModal.jsx'

// Unica tarea de componente es presentar imformacion y no hace cambios en el estado -> function
function BadgeDetails (props) {
    return (
        <div className="BadgeDetails_hero">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={confLogo} alt="Logo de conferencia"/>
                </div>
                <div className="col-6 BadgeDetails_hero-attendant-name">
                    <h1> 
                        { props.badge.firstName}
                        { props.badge.lastName}
                    </h1>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <Badge 
                        firstName = {props.badge.firstName} 
                        lastName = {props.badge.lastName} 
                        email = {props.badge.email} 
                        twitter = {props.badge.twitter} 
                        jobTitle = {props.badge.jobTitle}
                    />
                </div>
                <div className="col">
                    <h2>Actions</h2>
                    <div>
                        <div> <Link  className="btn btn-primary mb-4" to ={`/badges/${props.badge.id}/edit`}> Edit </Link> </div>
                    </div>
                    <div>
                        <div>
                            <button
                                onClick={props.onOpenModal}
                                className="btn btn-danger">
                                    Delete
                            </button>
                            <DeleteBadgeModal
                                isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default BadgeDetails;