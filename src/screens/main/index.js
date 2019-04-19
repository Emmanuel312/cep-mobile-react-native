import React, { Component } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import styles from './styles'

export default class Main extends Component
{
    state =
    {
        dados : {}
    }
    async componentDidMount()
    {
        const dados = await this.props.navigation.getParam('dados', 'falhou')
        this.setState({dados})
    }
    render()
    {
        const { dados } =  this.state
        return (
            <View style={styles.container}>
                <Text style={styles.info}>{dados.street}, {dados.city}, {dados.state}, {dados.neighborhood} </Text>
            </View>
        )
    }
}

