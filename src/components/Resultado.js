import React, { Component } from 'react';

import { StyleSheet, View, Image } from 'react-native';

const moedaCara = require("../imgs/moeda_cara.png");
const moedaCoroa = require("../imgs/moeda_coroa.png");

export default class Resultado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultado: '',
        }
    }

    componentWillMount() {
        let caraCoroa = '';
        const numAleatorio = Math.floor(Math.random() * 2);
        if(numAleatorio === 0){
            caraCoroa = 'cara';
        }else{
            caraCoroa = 'coroa';
        }
        this.setState({resultado: caraCoroa});
    }

    render() {
        if(this.state.resultado === 'cara'){
            return(
                <View style={styles.resultado}>
                    <Image source={ moedaCara } />
                </View>
            )
        }
        return(
            <View style={styles.resultado}>
                <Image source={ moedaCoroa } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    resultado:{
        flex: 1,
        backgroundColor: "#61bd8c",
        justifyContent: "center",
        alignItems: "center"
    }
})