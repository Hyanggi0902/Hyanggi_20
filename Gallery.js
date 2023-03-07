import React, { useState } from "react";
import './Gallery.css';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_num: 0,
            img_path: "img/0.jpg",
        };
    }
    leftImage = () => {
        this.setState({
            img_num: (this.state.img_num-1 >= 0)?(this.state.img_num - 1):(this.state.img_num + 6),
            img_path: "img/" + this.state.img_num + ".jpg",
            // img_num: (this.state.img_num - 1) % 7,
        });
        // this.setState({
            
        // });
        // this.forceUpdate();
        this.render();
    };
    rightImage = () => {
        this.setState({
            img_num: (this.state.img_num+1 <= 6)?(this.state.img_num + 1):(this.state.img_num - 6),
            img_path: "img/" + this.state.img_num + ".jpg",
        });
        // this.setState({
        // const [state, updateState] = React.useState();
        // const forceUpdate = React.useCallback(() => updateState({}), []);
        // })
        // this.forceUpdate();
        this.render();
    };
    render() {

        // img_path = "img/" + this.state.img_num;
        return (
        <div class='img_gallery'>
            <div class='main_img'>
                <h1 align='center'>{this.state.img_num}</h1>
                <img src={this.state.img_path}
                    width="540"
                    height="310"
                    alt="main"/>
                <div class='button_div'>
                    <button onClick={() => this.leftImage()}>Left</button>
                    <button onClick={() => this.rightImage()}>Right</button>
                </div>
            </div>
        </div>
        )
    }
}