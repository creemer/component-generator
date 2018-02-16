import React, {Component} from 'react';

import Generator from '../Generator/Generator';
import ComponentsList from '../ComponentsList/ComponentsList';

import DynamicTest from '../DynamicTest/DynamicTest';

class Content extends Component {
    state = {
        menuComponents: [],
        asideComponents: []
    };

    addComponentsHandler = (component) => {
        if(component.where === 'menu') {
            let updatedMenuComponents = this.state.menuComponents.concat(component);
            this.setState({
                ...this.state,
                menuComponents: updatedMenuComponents,
            })
        }
        if(component.where === 'aside') {
            let updatedAsideComponents = this.state.asideComponents.concat(component);
            this.setState({
                ...this.state,
                asideComponents: updatedAsideComponents,
            })
        }
        console.log(this.state);
    };

    render() {

        return (
            <div>
                <ComponentsList components={this.state.menuComponents} title={'Menu'}/>
                <Generator submit={(component) => this.addComponentsHandler(component)}/>
                <ComponentsList components={this.state.asideComponents} title={'Aside'}/>
                <DynamicTest/>
            </div>
        );
    }
}

export default Content;
