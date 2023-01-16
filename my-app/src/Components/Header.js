import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>
                    <a href="/">Alishah Hashwani</a>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#about-me">About Me</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}


export default Header;