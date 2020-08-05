import React from 'react'
import { Link } from 'react-router-dom'

// import '../components/styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge.jsx'
import DeleteBadgeModal from '../components/DeleteBadgeModal.jsx'

function useIncreaseCount(max){
    const [ count, setCount ] = React.useState(0);

    if ( count > max) {
        setCount(0)
    }
    return [ count, setCount ]
}

// Unica tarea de componente es presentar imformacion y no hace cambios en el estado -> function
function BadgeDetails (props) {
    const [count, setCount] = useIncreaseCount(4)
    // const count=3;
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
                        <div>
                            <button onClick={ () => {
                                setCount(count + 1);
                            }} className="btn btn-primary mr-4">
                                Increase Count: {count}
                            </button>
                            <Link
                                className="btn btn-primary mb-4"
                                to ={`/badges/${props.badge.id}/edit`}
                            >
                                Edit
                            </Link>
                        </div>
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