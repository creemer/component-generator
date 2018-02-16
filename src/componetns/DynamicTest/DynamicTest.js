import React, {Component} from 'react';

class DynamicTest extends Component {
    state = {
        AnotherComponent: null
    };

    loadImage = () => {
        import('./Image')
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
            </div>

        );
    }
}

export default DynamicTest;
