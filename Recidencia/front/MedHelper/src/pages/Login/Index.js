import React from 'react'
import {View, Text,TextInput,TouchableOpacity,Image} from 'react-native'
import styles from './style'
import * as Animatable from 'react-native-animatable'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation} from '@react-navigation/native';

export default function Login(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Animatable.Image
                    animation='flipInY'
                    duration={1000}
                    style={{width:'100%'}}
                    resizeMode='contain'
                    source={require('../../assents/Logo1.png')}
                />
            <View style={styles.containerWelcome}>
                 <Text style={styles.textWelcome}>MedHelper</Text>
            </View>
            </View>
            <View style={styles.form}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    keyboardType='email-address'
                    placeholderTextColor="#FFF"
                ></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    placeholderTextColor="#FFF"
                ></TextInput>    
            </View>
            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.optionText}>Inscrever-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Text style={styles.optionText}>Manter Logado</Text>
                    <Ionicons name="bookmark-outline" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{ alignItems: 'center'}}>
                    <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}