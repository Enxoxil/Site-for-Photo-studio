import React, {Component} from 'react'

const withPopup = (WrapComponent) => {

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isShowPopupOn: false,
            };
            this.toggle = this.toggle.bind(this);
        }

        toggle() {
            this.setState(state => ({isShowPopupOn: !state.isShowPopupOn}));
            console.log('Push', this.state.isShowPopupOn)
        }

        render() {
            const {isShowPopupOn} = this.state;
            return (
                <>
                    <WrapComponent isShowPopup={isShowPopupOn} toggleShowPopup={this.toggle}/>
                </>
            );
        }
    }
}
export default withPopup;