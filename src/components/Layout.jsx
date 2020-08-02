import React from 'react';

import Navbar from './Navbar.jsx'

function Layout (props) {
    
    // const children = props.children;
    // retornar lo mismo que esta interno en el layout
    return (
        // React.Fragment componente especial para regresar mas de un elemento como si fuera 1
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;