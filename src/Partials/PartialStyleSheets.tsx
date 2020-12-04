import {StyleSheet} from 'react-native';

const PartialStyles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    modalContainer: {
        flexDirection: "column",
        alignContent: "flex-start",
        backgroundColor: "white",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        height: "auto"
    },
    modalListItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
    },
    modalInput: {
        width: "90%",

    }
});

export default PartialStyles;