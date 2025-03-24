import { StyleSheet, View,Text } from "react-native";

export default function Task(prorp) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{prorp.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        marginHorizontal:20
    },
    itemLeft: {
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square: {
        height:24,
        width:24,
        opacity:0.4,
        backgroundColor:'#55BCF6',
        marginRight:15,
        borderRadius:5,
    },
    itemText: {
        maxWidth:'80%',
    },
    circular: {
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5
    },
})