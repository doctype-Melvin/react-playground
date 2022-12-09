import React from 'react';
import './App.css';

class Greetings extends React.Component{
    render() {
        return (
            <div className='box'>
                <h2> Hello Melvin ! </h2>
                <p> This is going to be an awesome <span class="day">Friday</span> ! </p>
            </div>
        )
    }
}

export default Greetings;
