import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SnackBar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './NavBar.css';
import { IconButton } from '@material-ui/core';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { format: "hex", open: false };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }

    handleFormatChange(e) {
        this.setState({format: e.target.value, open: true});
        this.props.handleFormatChange(e.target.value);
    }

    closeSnackBar() {
        this.setState({open: false});
    }

    render() {
        return (
            <header className="NavBar">
                <div className="Logo">
                    <Link to="/">colorpicker</Link>
                </div>
                {this.props.showingAllColors && (<div className="sliderContainer">
                        <span>Level: {this.props.level} </span>
                        <div className="Slider">
                            <Slider defaultValue={this.props.level} 
                                min={100} 
                                max={900} 
                                onAfterChange={this.props.changeLevel} 
                                step={100}/>
                        </div>
                    </div>
                )}
                <div className="SelectContainer">
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <SnackBar anchorOrigin={{vertical: "bottom", horizontal: "left" }}
                    open={this.state.open} autoHideDuration={3000} 
                    message={<span id="messageId">Format Changed to {this.state.format.toUpperCase()}!</span>}
                    ContentProps={{
                        "aria-describedby": "messageId"
                    }}
                    onClose={this.closeSnackBar}
                    action={[
                        <IconButton onClick={this.closeSnackBar} color="inherit" key="close" aria-label='close'>
                            <CloseIcon />
                        </IconButton>
                    ]}/>
            </header>
        );
    }
}

export default NavBar;