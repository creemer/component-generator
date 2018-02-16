import React, {Component} from 'react';
import Loadable from 'react-loadable';

const Loading = (props) => {
    if (props.error) {
        return <div>Error!</div>;
    } else {
        return null;
    }
};

const LoadableComponent = Loadable({
    loader: () => import('./Image'),
    loading: Loading
});

class DynamicTest extends Component {
    state = {
        loaded: null
    };

    loadImage = () => {
        this.setState({ loaded: <LoadableComponent/> });
    };

    componentDidMount() {
        console.log('LoadableComponent', LoadableComponent);
    }


    render() {
        return (
            <div className={'DynamicTest'}>
                {this.state.loaded}
                <button onClick={this.loadImage}>Add Image</button>
            </div>
        );
    }
}

export default DynamicTest;
