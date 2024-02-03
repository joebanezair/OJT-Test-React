import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'top',
      marginTop: '20%',
      padding: '5%',
      alignItems: 'left',
      backgroundColor: '#fff', 
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    text: {
      fontSize: 16,
      color: 'blue',
      marginTop: 10, // Margin top
    },
    buttonz: {
      textAlign: 'left',
      padding: '2%',
      alignSelf: 'flex-start', //width: equivalent to fit-content
      borderRadius: 10,
      margin: 10
    },
    button: {
      textAlign: 'center',
      padding: '2%',
      alignSelf: 'flex-start', //width: equivalent to fit-content
      borderRadius: 10,
      borderWidth: 0.5,
      borderColor: 'black',
      margin: 10
    },
    containerView:{
      marginBottom: 5,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: '#e0e0e0',
      alignItems: 'flex-start', // Align items to the top
      justifyContent: 'space-between', 
    },
    textStyle: {
      marginBottom: 10,
      fontWeight:'bold',
      textAlign: 'center'
    },
    textStyleText: {
      padding: 14,
    },
    textStyleText2: {
      padding: 17,
      paddingTop: 18.5,
    },
    textStyleText3: {
      padding: 17,
      paddingTop: 15
    }


});