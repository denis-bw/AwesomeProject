import { StyleSheet,View,  ImageBackground } from 'react-native';
import img from '../img/BG.png'

export function PostsScreen({children}) {

  return (
    <View style={styles.containerPostsScreen}>
          <ImageBackground source={img} style={styles.imageBackground}>
              {children}
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
});