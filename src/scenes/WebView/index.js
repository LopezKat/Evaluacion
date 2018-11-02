import React, { Component } from 'react';
import { WebView, Text } from 'react-native';

class WebViewSocial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uriWeb: ""
        };
    }

    componentDidMount = () => {
        const url = this.props.navigation.getParam('uriSocial', 'no-data'); 
         this.setState({
            uriWeb: url            
         })            
    }  

    render() {
        return (
           <WebView
                source={{ uri: "https://"+ this.state.uriWeb }}
                style={{ marginTop: 20 }}
            />
        );
    }
}

export default WebViewSocial;