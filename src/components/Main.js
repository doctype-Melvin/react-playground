import React from "react";

export class Main extends React.Component {
    render () {
        let message = ''
        if (true) {
            message = <p> This is some dynamic string ! </p>
        }
        return (
            <div className="mainSection">
                <h2 className="title">This is a title</h2>
                <div className="textCt">
                    <p className="para">
                    'This is the first chapter in a step-by-step guide about main React concepts. 
                    You can find a list of all its chapters in the navigation sidebar. If you’re reading
                    this from a mobile device, you can access the navigation by pressing the button in 
                    the bottom right corner of your screen.
                    </p>
                    <p className="para">
                    React is a JavaScript library, and so we’ll assume you have a basic understanding of the JavaScript language. If you don’t feel very confident, we recommend going through a 
                    JavaScript tutorial to check your knowledge level and enable you to follow along this guide without getting lost. It might take you between 30 minutes and an hour,
                    but as a result you won’t have to feel like you’re learning both React and JavaScript at the same time.
                    </p>
                    {/* Insert dynamic data below */}
                    { message }
                    <p>I know you are {this.props.name} and you're {this.props.age} years old. </p>
                </div>
            </div>
        )
    }
}