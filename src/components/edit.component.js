import React, { Component } from 'react';
import axios from 'axios';


export default class Edit extends Component{

    constructor(props){
        super(props)
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: '',
            business_name: '',
            business_nic_number: ''

        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/business/edit'+this.props.match.params.id)
        .then((res) => {
            this.setState({
                person_name : res.data.person_name,
                business_name : res.data.business_name,
                business_nic_number : res.data.business_nic_number
            });
        })
        .catch((error) => {
            console.log(error)
        });
    }

    onChangePersonName(e){
        this.setState({person_name: e.target.value});
     }
 
     onChangeBusinessName(e){
        this.setState({business_name: e.target.value});
     }
 
     onChangeNICNumber(e){
         this.setState({business_nic_number: e.target.value});
     }
    
     onSubmit(e){
        e.preventDefault();
        const obj = {
            person_name : this.state.person_name,
            business_name : this.state.business_name,
            business_nic_number : this.state.business_nic_number
        };
        axios.post('http://localhost:4000/business/update'+this.props.match.params.id,obj)
            .then((res) => {
                console.log(res.data)
            });
        this.props.history.push('/index');
       
    }

     

    render(){
        return(
            <div className="form-wrapper">
             <h3>Update Business</h3> 
                <form onSubmit={this.onSubmit}>  
                    <div className="form-group">    
                        <label>Add Person Name:</label>
                        <input type="text" onChange={this.onChangePersonName} className="form-control"/>
                    </div>

                    <div className="form-group">    
                        <label>Add Business Name:</label>
                        <input type="text" onChange={this.onChangeBusinessName} className="form-control" />
                    </div>

                    <div className="form-group">    
                        <label>NIC:</label>
                        <input type="text" onChange={this.onChangeNICNumber} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                    
                </form>
            </div>
        );

}}