import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonMeal: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    mealText: {
        marginLeft: 5,
        color: '#FFF',
        fontSize: 16,
        width:"80%",
    },
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingTop: 60,
    },
	title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
})