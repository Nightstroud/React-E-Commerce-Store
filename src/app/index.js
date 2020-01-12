import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div><h1>This is the header to the file.</h1></div>
        );
    }
}

render(<App/>, window.document.getElementById('root'));