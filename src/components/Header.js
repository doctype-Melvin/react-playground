import React, { Component } from "react";

export class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <ul className="nav">
                        <li className="item"><a href="#">Home</a></li>
                        <li className="item"><a href="#">About</a></li>
                        <li className="item"><a href="#">Contact</a></li>
                    </ul>
                </header>
            </div>
        )
    }
}