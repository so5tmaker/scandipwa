import React, { Component } from "react";
import './Checkout.extention.style';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { number } = this.props;
        return (
            <><div block="Checkout" elem="ProgressBar">
                <div block="Checkout" elem="StepBar" />
                <div block="Checkout" elem="StepBarActive" mods={{ isBilling: number === 2, isDetails: number === 3 }} />
            </div>
            </>
        );
    }
};

export default ProgressBar;
