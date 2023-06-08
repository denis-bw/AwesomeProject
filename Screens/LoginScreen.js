import { StyleSheet, View,  Text, TextInput,  TouchableHighlight } from 'react-native';
import { useState } from 'react';

export function LoginScreen() {

    
    const [isFocusedAddres, setIsFocusedAddres] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    
  return (
        <View style={styles.constainerRegistration}>
            
                <Text style={styles.textRegistration} >Увійти</Text>
                <View style={styles.containerInput} >
                    <TextInput
                        keyboardType="email-address"
                        onBlur={() => setIsFocusedAddres(false)}
                        onFocus={() => setIsFocusedAddres(true)}
                        style={[styles.textInput, isFocusedAddres && { borderColor: "#FF6C00" }]} 
                        placeholder="Пароль"  />
                    <TextInput
                        onBlur={() => setIsFocusedPassword(false)}
                        onFocus={() => setIsFocusedPassword(true)}
                        style={[styles.textInput, isFocusedPassword && { borderColor: "#FF6C00" }]} 
                        placeholder="Адреса електронної пошти" />
                    <Text style={styles.showPassword}>Показати</Text>
                </View>
            <TouchableHighlight>
                <View style={styles.containerButton}>
                    <Text style={styles.ButtonText}>Увійти</Text>
                </View>
            </TouchableHighlight>
            <Text style={styles.LinkTextLogin}>Немає акаунту? Зареєструватися</Text>
        </View>
  );
}


const styles = StyleSheet.create({
    constainerRegistration: {
        flex: 0.5,
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
        marginBottom: 42,
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
        top: 80,
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