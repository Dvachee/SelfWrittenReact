import {ReactCompositeComponentWrapper, ReactReconciler} from './FeactCompositeComponentWrapper';
import {TopLevelWrapper} from './TopLevelWrapper';

export const React = {
    createClass(spec) {
        function Constructor(props) {
            this.props = props;
        }

        Constructor.prototype = Object.assign(Constructor.prototype, spec);

        return Constructor;
    },
    createElement(type, props, children) {
        const element = {
            type,
            props: props || {}
        };

        if (children) {
            element.props.children = children;
        }
        return element;
    },

    render(element, container) {
        const wrapperElement = this.createElement(TopLevelWrapper, element);
        const componentInstance = new ReactCompositeComponentWrapper(wrapperElement);
        return ReactReconciler.mountComponent(
            componentInstance,
            container
        );
    }
};
