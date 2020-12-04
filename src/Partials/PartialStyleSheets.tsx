import {StyleSheet} from 'react-native';

const PartialStyles = StyleSheet.create({
    listItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
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
        flex: 1,
        justifyContent: "flex-start",
        width: "100%",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%"
    },
    newTaskElement: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15
    }, 
    newTaskInput: {
        height: 70,
        paddingHorizontal: 15,
        fontSize: 22
    },
    newTaskCategory: {
        fontSize: 18,
        paddingLeft: 15,
        color: "gray"
    }
});

export default PartialStyles;