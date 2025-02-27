import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useProduct } from "../../context/ProductContext/ProductContext";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function SellPage() {
    const { products } = useProduct(); // Context'ten ürünleri al


    return (
        <ScrollView>
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
                                <Text style={{ fontSize: 20, fontWeight: '400' }}>1</Text>
                                <TouchableOpacity>
                                    <Text style={styles.plus}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                )}
            />
        </View>
        <View>
            <Text>New2025</Text>
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
        marginBottom: 10
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
});

export default SellPage;
