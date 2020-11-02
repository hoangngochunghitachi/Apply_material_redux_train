import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import { withStyles } from '@material-ui/core/styles';
import styles from './../styles/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    componentWillMount() {
        if (this.props.taskEditting && this.props.taskEditting.id !== null) {
            this.setState({
                id: this.props.taskEditting.id,
                name: this.props.taskEditting.name,
                status: this.props.taskEditting.status
            });
        } else {
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskEditting) {
            this.setState({
                id: nextProps.taskEditting.id,
                name: nextProps.taskEditting.name,
                status: nextProps.taskEditting.status
            });
        } else if (!nextProps.taskEditting) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }

    onExitForm = () => {
        this.props.onCloseForm();
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false
        }

        this.setState({
            [name]: value
        });
    }

    onSave = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onClear();
        this.onExitForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    render() {
        const { classes } = this.props;
        if (!this.props.isDisplayForm) return null;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {!this.state.id ? 'Add Job' : 'Update Job'}
                    </h3>
                    <span
                        className="fa fa-times-circle text-right"
                        onClick={this.onExitForm}
                    ></span>
                </div>
                <div className="panel-body">
                    <form className={classes.taskForm} autoComplete="off" onSubmit={this.onSave}>
                        <TextField id="standard-basic" label={<Typography variant="headline" component="h6"> Name </Typography>} InputProps={{ classes: { input: classes.textField } }} name="name" value={this.state.name} onChange={this.onHandleChange} />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple" className={classes.lblStatus}>Status</InputLabel>
                            <Select className={classes.selectStatus} native name="status" value={this.state.status} onChange={this.onHandleChange}>
                                <option value={true}>Active</option>
                                <option value={false}>Hide</option>
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <div className="text-center">
                            <Button type="submit" className={classes.btnAction} variant="contained" color="primary" >Save</Button>&nbsp;
                            <Button variant="contained" className={classes.btnAction} color="secondary" onClick={this.onClear}>Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditting: state.taskEditting
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskForm));