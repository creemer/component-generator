import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './Input/Input';
import './Generator.css'

class Generator extends Component {
    state = {
        component: {
            where: 'menu',
            color: 'blue',
            type: 'square',
            position: 'vertical',
        }
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.submit(this.state.component);
    };

    inputHandler = (event, prop) => {
        this.setState({ component: {
            ...this.state.component,
            [prop]:  event.target.value
        }});
    };


    render() {
        return (
            <div>
                <form onSubmit={event => this.submitHandler(event)} className="Generator">
                    <section>
                        <label>Where to put? </label>
                        <Input
                            type={'select'}
                            change={(event) => this.inputHandler(event, 'where')}
                            value={this.state.component.where}
                            options={ ['menu', 'aside'] }
                            />
                    </section>
                    <section>
                        <label>Element type </label>
                        <Input
                            type={'select'}
                            change={(event) => this.inputHandler(event, 'type')}
                            value={this.state.component.type}
                            options={ ['round', 'square'] }
                        />
                    </section>
                    <section>
                        <label>Element color </label>
                        <Input
                            type={'text'}
                            change={(event) => this.inputHandler(event, 'color')}
                            value={this.state.component.color}
                            placeholder={"Enter some color"}/>
                    </section>
                    <section>
                        <label>Element position </label>
                        <Input
                            type={'select'}
                            change={(event) => this.inputHandler(event, 'position')}
                            value={this.state.component.position}
                            options={ ['vertical', 'horizontal'] }
                        />
                    </section>
                    <button type="submit">Send it</button>
                </form>
            </div>
        );
    }
}

Generator.propTypes = {
    submit: PropTypes.func,
};

export default Generator;
