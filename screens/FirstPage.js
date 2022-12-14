import { View, Text ,TextInput , Button , StyleSheet} from 'react-native'
import React , {useState} from 'react'

const FirstPage = ({navigation}) => {

    const [nameText , setNameText] = useState('');
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
            <Text style={styles.textStyle}>Please insert your name to pass it second screen</Text>
            <TextInput
                placeholder='Insert Here'
                style={styles.input}
                value = {nameText}
                onChangeText={setNameText}
            />
            <Button title='Go Next' onPress={()=> navigation.navigate('SecondPage',{
                name:nameText
            })}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    input: {
        borderColor:'black',
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#F8F8FF'
        },
});

export default FirstPage