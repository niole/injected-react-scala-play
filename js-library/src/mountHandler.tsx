import * as React from 'react';
import * as ReactDOM from 'react-dom';
import componentExports from './components';

type Props = { [propName: string]: any };

export const mount = (componentName: string, props: Props, mount: HTMLElement): void => {
    const Component = componentExports[componentName];

    if (!Component) {
        throw new Error(`Component: ${componentName} does not exist. Check imports`);
    }

    ReactDOM.render(<Component {...props} />, mount);
};
