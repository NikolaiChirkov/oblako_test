import {StyleSheet} from 'react-native';

const PartialStyles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    modalContainer: {
        flexDirection: "column",
        alignContent: "flex-start",
        backgroundColor: "white",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        height: "auto",
        width: "100%",
        position: "absolute",
        bottom: 0
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 5
    },
    fab: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        margin: 5
    },
    modalNewTask: {
        width: "100%"
    }
});

export default PartialStyles;