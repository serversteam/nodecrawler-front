import React, { Component } from 'react';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import DataTablePage from './DataTablePage';

class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        
    }

    render() {
        return ( <div className="App">
                <h3 className="m-10">Scraped Data</h3>
                <DataTablePage />
            </div>
        );
    }
}

export default App;