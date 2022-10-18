import React from 'react'
import withLoading from './withLoading';

function Button() {
  return <button>Button</button>;
}

export default withLoading(Button);

// 원본 컴포넌트를 변경하면 안된다.
// 입력된 Component를 확장된Component와 별도로 재사용 할 수 없다
// 또한, componentDidUpdate를 변형하는 EnhancedComponent에 또 다른
// HOC를 적용하면 첫 번째 HOC의 기능은 무시되어진다.
// 그리고 이 HOC는 생명주기 메서드가 없는 함수component에서도 작동하지 않는다.
