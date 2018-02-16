import React from 'react';
import Aux from '../../../hoc/Aux';

const Input = (props) => {
    let input = null;

    if (props.type === 'text') {
        input = <input
            {...props}
            type="text"
            value={props.value}
            onChange={props.change}
            className="Input"/>
    }

    if (props.type === 'select') {
        input = (
            <select
                {...props}
                value={props.value}
                onChange={props.change}
                className="Input">
                {props.options.map((opt, index) => {
                    return <option
                        key={index}
                        value={opt}>{opt}
                    </option>
                })}
            </select>
        )
    }

    return (
        <Aux>
            {input}
        </Aux>
    );
};

export default Input;
