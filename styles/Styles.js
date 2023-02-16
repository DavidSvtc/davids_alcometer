import { StyleSheet } from "react-native";

const colors = {
  background: { 
    lightmode: '#579BB1',
    darkmode: "#041C32"
  },
   primary: {
    lightmode: "#d3bea2",
    darkmode: "#ECB365"
   },
}

// General Layout 
const Styles = StyleSheet.create({

    container: {
      flex: 1,
      padding: 20
    },

    img:{
      padding: 10,
      marginBottom: 1,
      alignItems: "center"
    },

    headline: {
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: 'AntonRegular',
      marginVertical: 10
     },

     smallheadline: {
      padding: 5,
      marginBottom: 1,
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: 'AntonRegular',
      
     },

     input: {
      marginLeft: 30,
      marginRight: 10,
      fontWeight: "bold",
     },

     numInp: {
        marginLeft: 20
     },

     button: {
      marginTop: 20,
     },

     radioStyle: {
      flexDirection: 'row',
      alignItems: 'center',
     },

     switch: {
      marginTop: 60,
      marginLeft: 17  
     },

     rbtext: {
      color: "#ffffff"
     }
  });


  //Light Theme 

  export const MyLightTheme = StyleSheet.create({
    ...Styles,
    container: {
      ...Styles.container,
      backgroundColor: colors.background.lightmode,
    },

    input: {
      backgroundColor: colors.primary.lightmode
     },
     
     button: {
      ...Styles.button,
      backgroundColor: colors.primary.lightmode,
      textColor: '#000000'
     },

     numInp: {
      ...Styles.numInp,
        buttoncolor: colors.primary.lightmode
    },

    
  });

  //Dark Theme

  export const MyDarkTheme = StyleSheet.create({
    ...Styles,
    container: {
      ...Styles.container,
      backgroundColor:colors.background.darkmode,
      color: '#000000'
    },
    
    headline:{
      ...Styles.headline,
      color: colors.primary.darkmode,
     
    },
    
    smallheadline: {
      ...Styles.smallheadline,
      color: colors.primary.darkmode,
     },
     
    input: {
      backgroundColor: colors.primary.darkmode
     },

     button: {
      ...Styles.button,
      backgroundColor: colors.primary.darkmode,
      textColor: colors.background.darkmode
     },

     numInp: {
      ...Styles.numInp,
        buttoncolor: colors.primary.darkmode
    },

  

  });