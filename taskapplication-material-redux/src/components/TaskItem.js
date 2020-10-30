import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';
import styles from './../styles/styles';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }

    render() {
        const { task, index } = this.props;
        return (
            <TableRow>
                <TableCell align="right">{index + 1}</TableCell>
                <TableCell align="right">{task.name}</TableCell>
                <TableCell align="right"><CheckCircleIcon color={task.status ? 'primary' : 'disabled'} onClick={this.onUpdateStatus} /></TableCell>
                <TableCell align="right">
                    <Button type="submit" variant="contained" color="primary" onClick={this.onUpdate}>Edit</Button>&nbsp;
                    <Button variant="contained" color="secondary" onClick={this.onDelete}>Delete</Button>
                </TableCell>
            </TableRow>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDelete: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task))
        }
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskItem));