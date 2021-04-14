import React from 'react';

import Post from './Post';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello Word</h1>
                <Post title="Incluindo qualquer texto"/> 
                <Post title="Colocando um texto aqui"/> 
                <Post title="eu sla o que ue to fazendo"/> 
            </div>
        );
    }
}