import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EvilIcons from '@expo/vector-icons/EvilIcons';

function SellScreen() {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image style={styles.image} source={require("../../../assets/toydeer.jpeg")} />
                </View>
                <View style={styles.textbox}>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, }}>New Year's toy deer</Text>
                    <Text style={{ fontSize: 18, opacity: 0.5, marginTop: 10, }}>White</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 25 }}>$12.99</Text>
                    <TouchableOpacity style={styles.exit}>
                        <Text><FontAwesome6 name="x" size={18} color="gray" /></Text>
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', flexDirection: 'row', marginTop: 80, marginLeft: 140, alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: '400' }}>1</Text>
                        <TouchableOpacity>
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image style={styles.image} source={require("../../../assets/glasspiecone1.jpeg")} />
                </View>
                <View style={styles.textbox}>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, }}>New Year's toy deer</Text>
                    <Text style={{ fontSize: 18, opacity: 0.5, marginTop: 10, }}>White</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 25 }}>$12.99</Text>
                    <TouchableOpacity style={styles.exit}>
                        <Text><FontAwesome6 name="x" size={18} color="gray" /></Text>
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', flexDirection: 'row', marginTop: 80, marginLeft: 140, alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: '400' }}>1</Text>
                        <TouchableOpacity>
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image style={styles.image} source={require("../../../assets/candle1.jpeg")} />
                </View>
                <View style={styles.textbox}>
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, }}>New Year's toy deer</Text>
                    <Text style={{ fontSize: 18, opacity: 0.5, marginTop: 10, }}>White</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 25 }}>$12.99</Text>
                    <TouchableOpacity style={styles.exit}>
                        <Text><FontAwesome6 name="x" size={18} color="gray" /></Text>
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', flexDirection: 'row', marginTop: 80, marginLeft: 140, alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={styles.minus}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: '400' }}>1</Text>
                        <TouchableOpacity>
                            <Text style={styles.plus}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: ''

    },
    image: {
        width: 120,
        height: 120,
        marginLeft: 10,
    },
    textbox: {
        marginLeft: 25,
    },
    exit: {
        position: 'absolute',
        right: -90,
        marginTop: 12,
    },
    plus: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 40,
        borderWidth: 0.2,
        height: 40,
        width: 40,
        marginLeft: 10,
        fontWeight: '300'

    },
    minus: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 40,
        borderWidth: 0.2,
        height: 40,
        width: 40,
        marginRight: 10,
        fontWeight: '300',
    },
})
export default SellScreen