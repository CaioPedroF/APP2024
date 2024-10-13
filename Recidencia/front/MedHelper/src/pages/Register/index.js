import { View,Text,TextInput,TouchableOpacity } from 'react-native';
import styles from './style';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable'

export default function Register() {
 return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Animatable.Image
                animation='flipInY'
                duration={1000}
                style={{width:'100%'}}
                resizeMode='contain'
                source={require('../../assents/Logo1.png')}
            />
        <View style={styles.containerRegister}>
            <Text style={styles.textRegister}> Faça sua inscriçao </Text>
        </View>
        </View>
        <View style={styles.containerInput}>
            <Animatable.View animation='fadeInUp'duration={3000}>
                <TextInput placeholder="Seu nome Completo"  style={styles.textInput} placeholderTextColor="#FFF" />
            </Animatable.View>
            <Animatable.View animation='fadeInUp'duration={3000}>
                <TextInput placeholder="Seu Email"  style={styles.textInput} placeholderTextColor="#FFF"/>
            </Animatable.View>
            <Animatable.View animation='fadeInUp'duration={3000}>
                <TextInput secureTextEntry={true} placeholder="Sua Senha"  style={styles.textInput} placeholderTextColor="#FFF"/>
            </Animatable.View>
            <Animatable.View animation='fadeInUp'duration={3000}>
                <TextInput secureTextEntry={true} placeholder="Confirme sua Senha"  style={styles.textInput} placeholderTextColor="#FFF" />
            </Animatable.View>
            <Animatable.View animation='fadeInUp'duration={3000}>
                <TextInput placeholder="Seu numero de Telefone"  style={styles.textInput} placeholderTextColor="#FFF"/>   
            </Animatable.View>  
            <Animatable.View animation='fadeInUp'duration={3000}>
            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.textButton}> Inscreva-se </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHelp}>
                <Text style={styles.textHelp}>  Ajuda <AntDesign name="question" size={20} color="white" /> </Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
    </View>
    )
}