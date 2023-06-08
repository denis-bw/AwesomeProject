import { StyleSheet, View,  Text, TextInput,  TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import img from '../img/BG.png'

export function RegistrationScreen() {

    const [isFocusedLogin, setIsFocusedLogin] = useState(false);
    const [isFocusedAddres, setIsFocusedAddres] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
     const [secureTextEntry, setSecureTextEntry] = useState(true)
    
    const showPassword = () => setSecureTextEntry(prevState => !prevState)

    return (
      <View style={styles.containerPostsScreen}>
          <ImageBackground source={img} style={styles.imageBackground}>
                <View style={styles.constainerRegistration}>
                    <View style={styles.containerAvatar} >
                        <Ionicons name="ios-add-circle-outline" size={25} color="#FF6C00" style={styles.iconAddAvatar } />
                    </View>
                        <Text style={styles.textRegistration} >Реєстрація</Text>
                        <View style={styles.containerInput} >
                        <TextInput
                            onBlur={() => setIsFocusedLogin(false)}
                            onFocus={() => setIsFocusedLogin(true)}
                            style={[styles.textInput, isFocusedLogin && { borderColor: "#FF6C00" }]} 
                            placeholder="Логін" />
                        
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
                    
                        <TouchableOpacity style={styles.button} onPress={showPassword}>
                            <Text style={styles.showPassword} onPress={showPassword}>Показати</Text>
                        </TouchableOpacity> 
                    </View>
                    <TouchableOpacity>
                        <View style={styles.containerButton}>
                            <Text style={styles.ButtonText}>Зареєстуватися</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.LinkTextLogin}>Вже є акаунт? Увійти</Text>
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
        flex: 0.7,
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
    containerAvatar: {
        position: "absolute",
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
    textRegistration: {
        marginTop: 92,
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
    iconAddAvatar: {
        position: "absolute",
        top: 80,
        left: 108,
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