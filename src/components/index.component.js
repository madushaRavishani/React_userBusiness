import axios from 'axios';
import React, { Component } from 'react';
import TableRow from './TableRow';

export default class Index extends Component{

    constructor(props){
        super(props);
        this.state = {business : []};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/business')
        .then((res) => {
            this.setState({business : res.data});
        }).catch((error) => {
            console.log(error)
        });
    }

    tabRow(){
        return this.state.business.map((object, i) =>{
            return <TableRow obj={object} key={i}/>
        });

    }



    render(){
        return(
            <div>
                <h3 align='center'>Business List</h3>
                <table className='table table-striped' style={{marginTop:20}}>
                    <thead>
                    <tr>
                        <th>Person</th>
                        <th>Business</th>
                        <th>NIC Number</th>
                        <th colspan="2">Action</th>
                    </tr>

                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
  
        );
}}