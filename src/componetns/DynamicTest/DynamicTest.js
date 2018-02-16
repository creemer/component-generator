import React, {Component} from 'react';

class DynamicTest extends Component {
    state = {
        AnotherComponent: null,
        value: ''
    };

    loadImage = () => {
        import('./' + this.state.value)
            .then(AnotherComponent => {
                console.log(AnotherComponent);
                this.setState({ AnotherComponent: AnotherComponent.default() });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    AnotherComponent: <div>NO data recieved!</div>
                })
            });

    };

    inputHandler = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        let component = null;
        let {AnotherComponent} = this.state;

        if (!AnotherComponent) {
            component = <div>Loading...</div>;
        } else {
            component = AnotherComponent
        }

        return (
            <div className={'DynamicTest'}>
                {component}
                <button onClick={this.loadImage}>Add Image</button>
                <input
                    type="text"
                    placeholder={'Blue or Green or Red'}
                    onChange={(event) => this.inputHandler(event)}/>
            </div>

        );
    }
}

export default DynamicTest;
