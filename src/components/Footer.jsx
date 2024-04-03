import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="container-fluid bg-dark text-light text-center py-3" id="footer">
                Copyright <span id="currentYear"></span> | <a href="https://njwebdesigning.in" className="btn btn-dark" target="_blank">NJWEBDESIGNING</a>
                    <p className="my-3">Designed by N.JAGGANRAJ</p>
            </footer>
        </div>
    )
}

export default Footer