import React from 'react';
import PropTypes from 'prop-types' ;


function PropComponent(props) {
  return <div>{props.name}</div>
}

PropComponent.defaultProps = {
  name: "Jimmy",
  age: 9,
};
// Warning 문구 또한 커스텀 할 수 있다.
PropComponent.propTypes = {
  name: PropTypes.string,
  age: function(props, propName, componentName) {
    if (!/(7|8)/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
        propName +
        "(" +
        props[propName] +
        ")" + 
        "` supplied to" +
        " `" + 
        componentName + 
        "`. Validation failed."
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  )
}
