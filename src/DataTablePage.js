import React, { Component } from 'react';

import { MDBDataTable } from 'mdbreact';

class DataTablePage extends Component {
    constructor(props) {
        super(props);
        //initial state for australia map and cities as null
        this.state = {
            data: {
                columns: [],
                rows: []
            }
        };
    }

    componentDidMount() {
        this.getData();
        setInterval(() => {
            this.getData();
        }, 2000);
    }

    getData() {
        fetch(`${process.env.REACT_APP_API_URL}/v1/api/get-data`)
        .then(response => response.json())
        .then((rowsData) => {

            //set state for datatable
            this.setState({
                data: {
                    columns: [
                        {
                            label: 'URL',
                            field: 'url',
                            sort: 'asc',
                            width: 150
                        },
                        {
                            label: 'Title',
                            field: 'title',
                            sort: 'asc',
                            width: 270
                        },
                        {
                            label: 'Heading',
                            field: 'heading',
                            sort: 'asc',
                            width: 200
                        },
                        {
                            label: 'Description',
                            field: 'description',
                            sort: 'asc',
                            width: 100
                        }
                    ],
                    rows: rowsData
                }
            });

        })
        .catch(error => console.log(error));
    }

    render() {
        const { data } = this.state;
        return <div>{<MDBDataTable striped bordered hover data={data} />}</div>;
    }
}

export default DataTablePage;