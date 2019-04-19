import React, { Component } from 'react'
import { View,Text, TouchableOpacity,TextInput,Alert } from 'react-native'
import styles from './styles'
import api from '../../services/api'

export default class login extends Component
{
    state =
    {
        cep : ""
    }
    
    handleCep = async () =>
    {
        const { cep } = this.state
        if(cep)
        {
            const response = await api.get(`getCep/${cep}`)
            if(!response.data.errors)
                this.props.navigation.navigate('main', {dados : response.data})
            else
                Alert.alert('Erro no cep',response.data.message)
        }
        else
            Alert.alert('Cep vazio','Digite algum cep para continuar...')
      

    }

    render()
    {
        return (
            
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.cep}  placeholder="Digite o seu cep" keyboardType="numeric" onChangeText={cep => this.setState({ cep })} />
                <TouchableOpacity style={styles.button} onPress={this.handleCep}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
            </View>
          
        )
    }
}
