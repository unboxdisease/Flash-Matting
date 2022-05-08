import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            image1:'',
            image2:''
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                DIP Project!
           </div>
        )
    }
}