import React, { useEffect, useState } from 'react'

const Lifecycle = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {

        console.log('mount');

        return () => {

            console.log('unmount');
        }


    }, [])


    useEffect(() => {
        if(count>0){
            console.log(`업데이트 됨 : ${count}`)
        }
    }, [count])
    return (
        <div>
            <div>클릭수:{count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>클릭</button>
        </div>
    )
}

export default Lifecycle