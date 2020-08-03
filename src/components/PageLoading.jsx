import React from 'react';
import './styles/PageLoading.css'
import Loader from './Loader.jsx'

function PageLoading() {
    return (
        <div className="PageLoading">
            <Loader />
            <h3>Loading</h3>
        </div>
    )
}

export default PageLoading;