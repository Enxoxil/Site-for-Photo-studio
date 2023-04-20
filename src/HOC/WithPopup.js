import React, {Component} from 'react'

const withPopup = (WrapComponent) => {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isShowPopupOn: false,
            };
        }

        toggle = () => {
            this.setState(({isShowPopupOn}) => ({isShowPopupOn: !isShowPopupOn}));
        }

        render() {
            const {isShowPopupOn} = this.state;
            return <WrapComponent isShowPopup={isShowPopupOn} toggleShowPopup={this.toggle}/>
        }
    }
}
export default withPopup;