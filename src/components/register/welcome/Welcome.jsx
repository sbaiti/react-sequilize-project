import React from 'react';
import posed from 'react-pose';
import './welcome.css';

const Box = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 50 }
});

class Welcome extends React.Component {
    state = {
        isVisible: true,
        welcome: 'Welcome to IT-beaum'
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
    }

    render() {
        const { isVisible, welcome } = this.state;
        return <Box className="box" pose={isVisible ? 'visible' : 'hidden'} >{welcome}</Box>;
    }
}
export default Welcome;