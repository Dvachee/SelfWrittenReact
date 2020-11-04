import {ReactDOMComponent} from './ReactDomComponent'

export class ReactCompositeComponentWrapper {
    constructor(element) {
        this._currentElement = element;
    }

    mountComponent(container) {
        const Component = this._currentElement.type;
        const componentInstance =
            new Component(this._currentElement.props);
        this._instance = componentInstance;

        if (componentInstance.componentWillMount) {
            componentInstance.componentWillMount();
        }

        const markUp = this.performInitialMount(container);

        if (componentInstance.componentDidMount) {
            componentInstance.componentDidMount();
        }

        return markUp;
    }

    performInitialMount(container) {
        const renderedElement = this._instance.render();

        const child = instantiateReactComponent(renderedElement);
        this._renderedComponent = child;

        return ReactReconciler.mountComponent(child, container);
    }
}

export const ReactReconciler = {
    mountComponent(internalInstance, container) {
        return internalInstance.mountComponent(container);
    }
};

function instantiateReactComponent(element) {
    console.log(element)
    if (typeof element.type === 'string') {
        return new ReactDOMComponent(element);
    } else if (typeof element.type === 'function') {
        return new ReactCompositeComponentWrapper(element);
    }
}
