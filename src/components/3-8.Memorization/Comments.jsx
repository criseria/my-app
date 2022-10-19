import React, {useCallback} from 'react'
import CommentItem from "./CommentItem";

export default function Comments({commentList}) {
  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={commentList.content}
          likes={comment.likes}
          onClick={handleClick}
          // onClick={() => console.log(`눌림`)} 
          // 인라인으로 함수를 주면 새로 랜더링 될 때 마다 새로운 함수가 만들어 지는 것 이므로
          // 이것 때문에 props가 바뀌었기 때문에 메모를 해놨더라도 메모리제이션을 사용 할 수 없다.
          // 함수로 handleChange를 빼더라도 Comments 자체가 리랜더 되기때문에 설정한 함수도 계속해서 새로 생성된다.
          // 그러므로 이럴때 useCallback을 사용한다.
          // 특정한 값을 메모리제이션 할 때는 useMemo를 사용하고
          // 특정함수를 메모리제이션 할 때는 useCallback을 사용한다.
        />
      ))}
    </div>
  );
}
