import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    minHeight: "100%",
    minWidth: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

    tarjacheftaberneiro: {
      width: 'auto',
      alignItems:'center',
    },

    textInput: {
        marginTop: 5,
        padding: 5,
        borderRadius: 8,
        width: '90%', 
        height: 50,
        backgroundColor: 'rgba(233, 233, 233, 0.8)',
        paddingHorizontal: 10,
        fontSize: 16,
        alignSelf: 'center', 
        bottom: 25
    }

}
);
