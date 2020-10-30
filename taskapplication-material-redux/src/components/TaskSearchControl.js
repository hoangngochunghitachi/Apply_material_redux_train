import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import styles from './../styles/styles';

class TaskSearchControl extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }

    onHandleChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        let { keyword } = this.state;
        const { classes } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Paper component="form" className={classes.taskSearchControl}>
                    <InputBase className={classes.inputTaskSearch} placeholder="Type keyword search" inputProps={{ 'aria-label': 'Type keyword search' }} name="keyword" value={keyword} onChange={this.onHandleChange} />
                    <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={this.onSearch}><SearchIcon /></IconButton>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyword) => {
            dispatch(actions.searchTask(keyword));
        }
    };
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskSearchControl));