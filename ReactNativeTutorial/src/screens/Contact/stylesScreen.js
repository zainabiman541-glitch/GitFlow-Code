import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    heading:{
        fontSize:30,
        textAlign: 'center',
        color: '#FF6F61',
        fontWeight:'bold',
        marginVertical:15,
    },
    list:{
        flex:1,
        backgroundColor:'#1E1E2C',
        paddingHorizontal: 20,
    },
    item:{
        backgroundColor:'#2A2A40',
        padding: 15,
        marginVertical:8,
        borderRadius: 8
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    email:{
        fontSize: 16,
        fontStyle: 'italic',
        color: '#8D93AB',
        marginTop: 8
    }
})