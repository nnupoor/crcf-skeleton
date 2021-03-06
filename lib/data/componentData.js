const stringHelper = require('../utils/stringHelper');

/**
 * Creates default React component
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createReactComponent(componentName) {
  const name = stringHelper.capitalizeFirstLetter(componentName);

  return `import React, { Component } from 'react';

class ${name} extends Component {
  render() {
    return (
      <div>
        ${name}
      </div>
    );
  }
}

export default ${name};
  `;
}

/**
 * Creates React stateless functional component
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createReactFunctionalComponent(componentName) {
  const name = stringHelper.capitalizeFirstLetter(componentName);

  return `import React from 'react';

const ${name} = () => {
  return (
    <div>
      ${name}
    </div>
  );
}

export default ${name};
  `;
}

/**
 * Creates default React Native component
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createReactNativeComponent(componentName) {
  const name = stringHelper.capitalizeFirstLetter(componentName);

  return `import React, { Component } from 'react';
  import { View, Text } from 'react-native';

class ${name} extends Component {
  render() {
    return (
      <View>
        <Text>${name}</Text>
      </View>
    );
  }
}

export default ${name};
  `;
}

/**
 * Creates default Typescript React Native component
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createTypeScriptReactNativeComponent(componentName) {
  const name = stringHelper.capitalizeFirstLetter(componentName);

  return `import * as React from 'react';
  import { View, Text } from 'react-native';

class ${name} extends React.Component<any, any>  {
  public render() {
    return (
      <View>
        <Text>${name}</Text>
      </View>
    );
  }
}

export default ${name};
  `;
}

/**
 * Creates default Typescript React component
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createTypeScriptReactComponent(componentName) {
  const name = stringHelper.capitalizeFirstLetter(componentName);

  return `import * as React from 'react';

class ${name} extends React.Component<any, any>  {
  public render() {
    return (
      <div>
        ${name}
      </div>
    );
  }
}

export default ${name};
  `;
}

/**
 * Creates default React component with prop types
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createReactComponentWithProps(componentName) {
  const name = stringHelper.capitalizeFirstLetter(componentName);

  return `import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ${name} extends Component {
  render() {
    return (
      <div>
        ${name}
      </div>
    );
  }
}

${name}.propTypes = {

};

export default ${name};
  `;
}

/**
 * Creates React stateless functional component with prop types
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createReactFunctionalComponentWithProps(componentName) {
  const name = stringHelper.capitalizeFirstLetter(componentName);

  return `import React from 'react';
import PropTypes from 'prop-types';

const ${name} = () => {
  return (
    <div>
      ${name}
    </div>
  );
}

${name}.propTypes = {

};

export default ${name};
  `;
}

/**
 * Creates default index file
 *
 * @param {String} componentName - Component name
 * @param {Boolean} upperCase - If true then capitalize first letter
 * @returns {String}
 */
function createIndex(componentName, upperCase) {
  return `export { default } from './${
    upperCase === true ? stringHelper.capitalizeFirstLetter(componentName) : componentName
    }';`;
}

/**
 * Creates index file includes all folder
 *
 * @param {Array} folders - folders array
 * @returns {String}
 */
function createIndexForFolders(folders) {
  return `${folders
    .map(folderName => `import ${folderName} from './${folderName}' \n`)
    .join('')}export {
    ${folders
    .map((folderName, index) => {
      if (index === folders.length - 1) return folderName;

      return `${folderName}, \n`;
    })
    .join('')}
}`;
}

/**
 * Creates default React Native component with prop types
 *
 * @param {String} componentName - Component name
 * @returns {String}
 */
function createReactNativeComponentWithProps(componentName) {
  const name = stringHelper.capitalizeFirstLetter(componentName);

  return `import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class ${name} extends Component {
  render() {
    return (
      <View>
        <Text>${name}</Text>
      </View>
    );
  }
}

${name}.propTypes = {

};

export default ${name};
  `;
}
/**
 * Creates default test file for component
 *
 * @param {String} componentName - Component name
 * @param {Boolean} upperCase - If true then capitalize first letter
 * @param {Boolean} isTypeScript - if true then import React from 'react'; changes to TypeScript mode.
 * @returns {String}
 */
function createTest(componentName, upperCase, isTypeScript, isSmoke) {
  const componentNameUpperCase = stringHelper.capitalizeFirstLetter(componentName);

  return  isSmoke ? 
    `import ${isTypeScript ? '* as' : ''} React from 'react';
    import { shallow } from 'enzyme';
    import ${componentNameUpperCase} from './${
      upperCase === true ? componentNameUpperCase : componentName
    }';

    describe('<${componentNameUpperCase} />', () => {
      test('renders', () => {
        const wrapper = shallow(<${componentNameUpperCase} />);
        expect(wrapper).toMatchSnapshot();
      });
    });
    
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<${componentNameUpperCase} />, div);
      ReactDOM.unmountComponentAtNode(div);
    }); ` : 
    `import ${isTypeScript ? '* as' : ''} React from 'react';
      import { shallow } from 'enzyme';
      import ${componentNameUpperCase} from './${
        upperCase === true ? componentNameUpperCase : componentName
      }';

      describe('<${componentNameUpperCase} />', () => {
        test('renders', () => {
          const wrapper = shallow(<${componentNameUpperCase} />);
          expect(wrapper).toMatchSnapshot();
        });
      });
    `;
}

module.exports = {
  createReactComponent,
  createReactFunctionalComponent,
  createReactNativeComponent,
  createTypeScriptReactComponent,
  createTypeScriptReactNativeComponent,
  createReactComponentWithProps,
  createReactFunctionalComponentWithProps,
  createReactNativeComponentWithProps,
  createIndex,
  createIndexForFolders,
  createTest,
};
