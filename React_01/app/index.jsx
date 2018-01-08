import React from 'react'
import { render } from 'react-dom'

import './static/css/common.less'

// 定义组件
class Hello extends React.Component {
    // jsx 返回多个节点
    // render(){
    //     return ( 
    //         <div>
    //             {/* 注释 */}
    //             <p className="n1">Nian糕_1</p>
    //             <p style={{color:'#ccc',fontSize:'20px'}}>Nian糕_2</p>
    //             <p>Nian糕_3</p> 
    //         </div> 
    //     )
    // }

    // jsx 事件
    // render(){
    //     return (
    //         <p onClick={this.clickText.bind(this)}>Nian糕</p>
    //     )
    // }
    // clickText(e) {
    //     e.preventDefault();
    //     console.log(this);
    // }


    // jsx 循环
    // render() {
    //     const arr = ['Nian糕_1', 'Nian糕_2', 'Nian糕_3']
    //     return (
    //         <div>
    //             <ul>
    //                 {arr.map((item, index) => {
    //                     return <li key={index}>this is {item}</li>
    //                 })}
    //             </ul>
    //         </div>
    //     )
    // }

    // jsx 判断
    render(){
        return (
            <div>
                {
                    true
                    ? <p>Nian糕_true</p>
                    :<p>Nian糕_false</p>
                }
            </div>
        )
    }
    
}

// 渲染组件到页面
render(
    <Hello/>,
    document.getElementById('root')
)