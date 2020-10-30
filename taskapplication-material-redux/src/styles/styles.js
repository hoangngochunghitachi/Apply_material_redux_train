const styles = (theme) => ({
    taskForm: {
        width: '80%',
    },
    textField: {
        // margin: theme.spacing(1),
        width: '100%',
        fontSize: 15
    },
    formControl: {
        marginTop: theme.spacing(1),
        width: '100%',
    },
    taskSearchControl: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    inputTaskSearch: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: 17
    },
    iconButton: {
        padding: 10,
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
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor: "#0062cc",
        color: "white",
        "&:hover": {
            backgroundColor: "#0062cc"
        }
    }
})

export default styles;