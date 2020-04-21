import React, { useState, useEffect } from 'react'

// 函数型组件
const LikeButton = () => {
  const [ like, setLike ] = useState(0)
  
  useEffect(() => {
    document.title = `You clicked ${like} times`;
  })
  
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