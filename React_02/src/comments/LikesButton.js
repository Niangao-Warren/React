import React, {useState} from 'react'

// 函数型组件
const LikeButton = () => {
  // 当前的state，更新state的函数
  const [ like, setLike ] = useState(0)
  console.log(useState(0))
  return (
  <button onClick={() => {setLike(like + 1)}}>
    喜欢数 {like}
  </button>
  )
}

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       like: 0
//     };
//   }

//   render() {
//     return (
//       <button onClick={() => this.setState({ like: this.state.like + 1 })}>
//         喜欢数 {this.state.like}
//       </button>
//     );
//   }
// }

export default LikeButton