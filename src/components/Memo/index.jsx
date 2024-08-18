

import { memo, useEffect, useState } from "react";

/**
 * 函数组件的最大弱点：渲染执行
 * 
 * 当一个组件的状态发生了改变的时候，相关视图是必然要更新的
 * 函数组件在视图更新需求来临的时候，函数是必然要执行的
 * 
 */

const ChildComponent =memo( (props)=>{
  useEffect(()=>{
    console.log('ChildComponent render')
  })
  return <div><p>{props.count2}</p></div>
})

const UseMemo = () =>{
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);


    
    return (
      <div>
        <h2>{count1}</h2>
        <button onClick={() => setCount1(count1 + 1)}>Increment1</button>
      
        <ChildComponent count2={count2} />
        <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      </div>
    )

}


export default UseMemo;
