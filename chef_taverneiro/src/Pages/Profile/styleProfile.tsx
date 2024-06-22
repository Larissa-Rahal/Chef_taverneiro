import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    background: {
        flex: 1,
        width: 100,
        height:100,
        resizeMode: 'cover',
        justifyContent: 'center'
      },
    
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
      },

    circulo: {
        width: 150,
        height: 150,
        marginLeft:0,
        marginTop:0,
        marginBottom:0,
        justifyContent:'center'
        },

      profileIcon: {
        marginTop:75,
        position: 'absolute',
        opacity:0.7
        },

        containerCirculo: {
          flex: 1,
          flexDirection: 'row',
          position: 'absolute',
          marginLeft:65,
          marginRight:0,
          marginTop:50,
          marginBottom:390,
          padding: 0,
          paddingTop:0,
          paddingBottom:10
        },

        containerNome: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },

        flexTextNome: {
          position: 'absolute',
          flexDirection: 'row',
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white',
          paddingBottom:50,
          paddingRight:210
        },

        containerEmail: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },

        flexTextEmail: {
            position: 'absolute',
            flexDirection: 'row',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            paddingBottom:120,
            paddingRight:210 
        },

        inputNome: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 2,
          borderRadius:10,
          backgroundColor: 'rgba(168,168,168,0.5)',
          width: 270,
          paddingHorizontal: 5,
          paddingTop:8,
          marginTop:15,
          marginBottom: 0
        },

        inputEmail: {

          height: 40,
          borderColor: 'gray',
          borderWidth: 2,
          borderRadius:10,
          backgroundColor: 'rgba(168,168,168,0.5)',
          width: 270,
          paddingHorizontal: 0,
          paddingTop:0,
          marginTop:50,
          marginBottom: 100
        },


      
});