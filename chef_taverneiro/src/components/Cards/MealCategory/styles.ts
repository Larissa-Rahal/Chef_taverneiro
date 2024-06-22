import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'rgba(237, 222, 199, 0.9)', // Cor de fundo com transparência
        borderRadius: 5,
        width: 300,
        padding: 16,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // Centraliza o conteúdo horizontalmente
        flex: 1,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 5,
    },
    mealText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 8,
    },
    link: {
        color: '#007bff',
        textDecorationLine: 'none',
      }, 
})