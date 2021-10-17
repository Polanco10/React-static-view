const React = require('react');
const NavBar = require('./../components/navbar')

function DefaultLayout(props) {
    return (
        <html>
            <head><title>{props.title}</title>
            </head>
            <body><NavBar></NavBar>
                {props.children}

            </body>
        </html>
    );
}

module.exports = DefaultLayout;