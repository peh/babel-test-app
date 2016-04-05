import React from 'react'

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TestComponent';
        this.state = {
            count: 0
        }
    }

    getIncr() {
        return 1
    }

    render() {
        return <div>
            count:
            {this.state.count}
            <button onClick={()=>{
        	let n = this.state.count + this.getIncr();
        	this.setState({
        		count: n
        	});
        }}>++</button>
        </div>;
    }
}