import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useProduct } from "../../context/ProductContext/ProductContext";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

function SellPage() {
    const { products } = useProduct();


    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>

                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.product}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                            <View style={styles.textbox}>
                                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, }}>{item.title}</Text>
                                <Text style={{ fontSize: 18, opacity: 0.5, marginTop: 10, }}>White</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 25 }}>{item.price}</Text>
                                <TouchableOpacity style={styles.exit}>
                                    <Text><FontAwesome6 name="x" size={18} color="gray" /></Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', marginTop: -30, marginLeft: 130, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity>
                                        <Text style={styles.minus}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20, fontWeight: '400' }}>2</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.plus}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    )}
                />
            </View>
            <View style={styles.seasonbox}>
                <Text style={styles.season}>New2025</Text>
                <Text style={styles.applied}>Promocode appiled <AntDesign name="checkcircle" size={24} color="green" /></Text>
            </View>
            <View style={styles.paycontainer}>
                <View style={styles.pay1}>
                    <Text style={styles.textpay}>Subtotal: </Text>
                    <Text style={styles.textpay}>Delivery Fee: </Text>
                    <Text style={styles.textpay}>Discount: </Text>
                </View>
                <View style={styles.pay2}>
                    <Text style={styles.text$}>$34.99</Text>
                    <Text style={styles.text$}>$5.00</Text>
                    <Text style={styles.text$}>20%</Text>
                </View>
            </View>
            <View style={styles.shadow}>
                <TouchableOpacity style={styles.checkbox}>
                    <Text style={styles.checktext}>Check out for $31.99</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        padding: 20,
        backgroundColor: "white"
    },
    title:
    {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    product:
    {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        width: "100%",
        paddingBottom:15,
    },
    image:
    {
        width: 120,
        height: 120,
        marginLeft: -8,
    },
    textbox: {
        marginLeft: 25,
    },
    exit: {
        position: 'absolute',
        right: 0,
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
        fontWeight: '300',

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
    seasonbox: {
        marginTop: -15,
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 3,
        borderColor: 'gray',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,


    },
    season: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 20,

    },
    applied: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        marginRight: 20,

    },
    paycontainer: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20,
        marginTop:-10,
    },
    pay1: {
        width: 200,
        flex: 1,
        padding: 20,
        alignItems: "flex-start",
    },
    pay2: {
        width: 200,
        flex: 1,
        padding: 20,
        alignItems: "flex-end"
    },


    textpay: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '300',

    },
    text$: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',

    },
    shadow: {
        height: 200,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    checkbox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 410,
        borderRadius: 100,
        borderWidth: 1,
        marginLeft: 0,
        marginTop: -60,
        backgroundColor: 'black',



    },
    checktext: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',

    },

});

export default SellPage;
