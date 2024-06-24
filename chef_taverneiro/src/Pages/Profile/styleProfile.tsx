import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    background: {
        flex: 1,
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

        containerImput: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        },

        inputNome: {
          width: '90%',
          backgroundColor: 'rgba(168,168,168,0.5)',
          padding: 10,
          marginBottom: 10,
          borderRadius: 20,
          color: '#fff',
        },    

        // containerEmail: {
        //   flex: 1,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   marginBottom: '0%',
        //   backgroundColor: 'red'
        // },

        // flexTextNome: {
        //   position: 'absolute',
        //   flexDirection: 'row',
        //   fontSize: 18,
        //   fontWeight: 'bold',
        //   color: 'white',
        //   paddingBottom:50,
        //   paddingRight:210
        // },

        // flexTextEmail: {
        //     // position: 'absolute',
        //     flexDirection: 'row',
        //     fontSize: 18,
        //     fontWeight: 'bold',
        //     color: 'white',
        //     // paddingBottom:120,
        //     // paddingRight:210 
        // },

        inputEmail: {
          width: '90%',
          backgroundColor: 'rgba(168,168,168,0.5)',
          padding: 10,
          marginBottom: 10,
          borderRadius: 20,
          color: '#fff',
        },


      
});