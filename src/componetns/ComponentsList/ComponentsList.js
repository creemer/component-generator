import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ComponentsList extends Component {
    render() {
        const toRenderComponents = this.props.components.map((component, index) => {
            const styles = {
                width: '100px',
                height: '100px',
                display: 'inline-block',
                background: component.color,
            };

            if(component.type === 'round') {
                styles.borderRadius = '50%';
            }

            if(component.position === 'vertical') {
                styles.height = '160px'
            } else {
                styles.width = '160px'
            }

            return (
                <div key={index} style={styles} />
            )
        });
        return (
            <div>
                <h1>{this.props.title}</h1>
                {toRenderComponents}
            </div>
        );
    }
}

ComponentsList.propTypes = {
    components: PropTypes.array,
};

export default ComponentsList;
