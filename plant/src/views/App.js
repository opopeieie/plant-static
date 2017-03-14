import React from 'react'
import Navbar from 'component/nav'

const App = ({ children, location }) => (
    <div>
        <Navbar location={location} />

        <div className="container">
            { children }
        </div>

        <footer>
            this is footer
        </footer>
    </div>
);

export default App
