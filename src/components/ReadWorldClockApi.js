import React from 'react';
import axios from 'axios-jsonp-pro';

import ReactJson from 'react-json-view';
import fetchJsonp from 'fetch-jsonp';

/**
 * Class to make the communication with the http://worldclockapi.com/ and retrieve data we need
 */
export default class ReadWorldClockApi extends React.Component {

    //create the sctructure to storage the data
    constructor(props){
        super();
        this.state = {
            clockData: '', //used for storage the response from the endpoint
            url: props.url, //receive the URL from APP.js to know what endpoint use
            messageTitle: props.messageTitle, //receive a text from the APP.js
            isJSONP: props.isJSONP //used to identify if the endpoint is an JSONP or not
        }
    }    

    componentDidMount(){
        try{            
            if(this.state.isJSONP === true){ //if true will use the JSONP 
               fetchJsonp(this.state.url, {jsonpCallback: 'callback', jsonpCallbackFunction: 'callback'})
                .then( function(response) {return response.json()})
                .then(clockData => {
                    this.setState({clockData})
                })
            }else{ //for non JSONP just get the information
                axios.get(this.state.url)
                .then(response => {
                    const clockData = response.data;
                    this.setState({clockData});
                })
            }
            
        }catch (e){
            console.error(e);
        }        
    }

    render(){
        return(            
            <div>
                <h2>{this.state.messageTitle}</h2>
                <h4>{this.state.clockData !== '' ? <ReactJson src={this.state.clockData}/> : ''}</h4>
            </div>
        )
    }
}