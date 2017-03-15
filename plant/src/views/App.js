import React from 'react'
import Navbar from 'component/nav'

const App = ({ children, location }) => (
    <div className="off-canvas-wrapper">
        <div className="off-canvas-wrapper-inner">
            <div className="off-canvas-content">
                <Navbar location={location} />

                <div className="page-content">
                    { children }
                </div>

                <footer>
                    this is footer
                </footer>
            </div>
        </div>

    </div>
);

export default App
