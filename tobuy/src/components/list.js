import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ADetail from './ADetails';

// class component is used to fetch data and 
// unlike function components class component always comes with render method

class AList extends Component {

    state = {list:[]};


componentDidMount () {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(Response => this.setState({list:Response.data}));
}

renderList() {
    return this.state.list.map(Response=> 
    <ADetail key={Response.title} data={Response}/>
    );
}

    render()  {
        console.log(this.state);
    return (
        <ScrollView>
            {this.renderList()}
        </ScrollView>
    );
    }
}

export default AList;