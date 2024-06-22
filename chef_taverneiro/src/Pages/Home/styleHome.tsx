import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  loginBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    minHeight:'100%',
    minWidth: '100%'
  },

    tarjacheftaberneiro: {
        verticalAlign:'top',
        width: '100%',
        height: 50,
        marginLeft:0,
        marginTop:0,
        marginBottom:0,
        alignItems:'center',
    },

    textInput: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        width: 300, 
        height: 50,
        backgroundColor: 'rgba(233, 233, 233, 0.8)',
        paddingHorizontal: 10,
        fontSize: 16,
        alignSelf: 'center'
    }

}
);