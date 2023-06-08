import { StyleSheet, View,  Text, TextInput, TouchableOpacity,  ImageBackground } from 'react-native';
import { useState } from 'react';
import img from '../img/BG.png'

export function LoginScreen() {

    
    const [isFocusedAddres, setIsFocusedAddres] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    
    const showPassword = () => setSecureTextEntry(prevState => !prevState)
   
  return (<View style={styles.containerPostsScreen}>
          <ImageBackground source={img} style={styles.imageBackground}>
        <View style={styles.constainerRegistration}>
            
                <Text style={styles.textRegistration} >Увійти</Text>
                <View style={styles.containerInput} >
                    <TextInput
                        keyboardType="email-address"
                        onBlur={() => setIsFocusedAddres(false)}
                        onFocus={() => setIsFocusedAddres(true)}
                        style={[styles.textInput, isFocusedAddres && { borderColor: "#FF6C00" }]} 
                        placeholder="Адреса електронної пошти"  />
                  <TextInput
                       autoComplete='off'
                        secureTextEntry={secureTextEntry}
                        onBlur={() => setIsFocusedPassword(false)}
                        onFocus={() => setIsFocusedPassword(true)}
                        style={[styles.textInput, isFocusedPassword && { borderColor: "#FF6C00" }]} 
                        placeholder="Пароль" />
              
                    <TouchableOpacity style={styles.button}  onPress={showPassword}>
                        <Text style={styles.showPassword}>Показати</Text>
                    </TouchableOpacity>      
                </View>
            <TouchableOpacity>
                <View style={styles.containerButton}>
                    <Text style={styles.ButtonText}>Увійти</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.LinkTextLogin}>Немає акаунту? Зареєструватися</Text>
          </View>
          </ ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
     containerPostsScreen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        resizeMode: 'cover',
        width: "auto",
        height: "auto",
    },
    constainerRegistration: {
        flex: 0.6,
        backgroundColor: '#fff',
        width: "100%",
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: "#F6F6F6",
        height: 50,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "#E8E8E8",
        borderRadius: 8,
        minWidth: 340,
        marginLeft: 16,
        marginRight: 16, 
        padding: 16,
    },
    containerInput: {
        display: 'flex',
        gap: 16,
        marginBottom: 30,
    },
    textRegistration: {
        marginTop: 32,
        marginBottom: 32,
        fontFamily: "Roboto",
        fontSize: 30,
        lineHeight: 35,
        fontWeight: 500,
    },
    containerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
        minWidth: 340,
        height: 50,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginBottom: 16,
    },
    ButtonText: {
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
    },
    LinkTextLogin: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        color: "#1B4371",
        marginBottom: 80,
    },
    
    showPassword: {
        position: "absolute",
        top: -50,
        left: 255,
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        color: "#1B4371",
    }
});