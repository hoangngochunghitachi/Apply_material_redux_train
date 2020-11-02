const styles = (theme) => ({
    taskForm: {
        width: '80%',
    },
    textField: {
        fontSize: 15
    },
    formControl: {
        marginTop: theme.spacing(1),
        width: '100%',
    },
    textSearchControl: {
        width: '100%',
    },
    inputTaskSearch: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: 17
    },
    iconSearch: {
        // padding: 10,
        fontSize: 20,
        color: "#0062cc"
    },
    lblStatus: {
        fontSize: 17
    },
    selectStatus: {
        fontSize: 15,
        fontFamily: "FontAwesome"
    },
    tableHead: {
        fontWeight: "bold",
        fontSize: 15,
        fontFamily: "FontAwesome"
    },
    tableCell: {
        fontSize: 15,
        fontFamily: "FontAwesome"
    },
    btnSort: {
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "#0062cc",
        color: "white",
        "&:hover": {
            backgroundColor: "#0062cc"
        },
        fontFamily: "FontAwesome"
    },
    btnAddJob: {
        fontSize: 12,
        paddingLeft: theme.spacing(1),
        fontFamily: "FontAwesome"
    },
    iconAddJob: {
        fontSize: 20,
        marginRight: 3,
        marginTop: -4,
    },
    iconSort: {
        fontSize: 15,
        marginLeft: 5,
    },
    iconAction: {
        marginRight: 5,
    },
    btnAction: {
        fontSize: 10,
        fontFamily: "FontAwesome"
    },
    lblNote: {
        fontSize: 17,
        fontFamily: "FontAwesome"
    },
    iconCloseForm: {
        cursor: "pointer",
        "&:hover": {
            color: "red"
        },
        float: "right",
        // textAlign: "center"
    }
})

export default styles;