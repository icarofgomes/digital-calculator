import {Component} from 'react';


class Display extends Component {
    render(){
        const cssDisplayclass = this.props.error ? 'display error' : 'display';
        return (
        <div className={cssDisplayclass}>
            {this.props.value}
        </div>
        )
    }
};

export default Display;