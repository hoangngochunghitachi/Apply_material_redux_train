const styles = (theme) => ({
    taskForm: {
        width: '80%',
    },
    textField: {
        // margin: theme.spacing(1),
        // width: '100%',
        fontSize: 15
    },
    formControl: {
        marginTop: theme.spacing(1),
        width: '100%',
    },
    textSearchControl: {
        // padding: '2px 4px',
        // display: 'flex',
        // alignItems: 'center',
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
        fontSize: 15
    },
    table: {
        // width: 650,
    },
    tableHead: {
        fontWeight: "bold",
        fontSize: 15,
    },
    tableCell: {
        fontSize: 15,
    },
    btnSort: {
        fontSize: 12,
        fontWeight: "bold",
        backgroundColor: "#0062cc",
        color: "white",
        "&:hover": {
            backgroundColor: "#0062cc"
        }
    },
    btnAddJob: {
        fontSize: 12,
        paddingLeft: theme.spacing(1),
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
    btnEdit: {
        marginRight: 5,
    },
    btnAction: {
        fontSize: 10,
    },
    lblNote: {
        fontSize: 17,
    }
})

export default styles;