import React, {useState} from 'react';
import './App.css'

const App = () => {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('red')
    const [lastColor,setLastColor] = useState('green')

    let arr = ['red', 'blue', 'yellow', 'black', 'green'],
        index = 0

    let lastIndex = 4


    const increment = () => {
        if (count === arr.length - 1) {
            setCount(0)
            setColor(arr[index])
        } else {
            setCount(count + 1)
            setColor(arr[count])
        }
    }

    const decrement = () => {
        if (count > 0 && count <=5) {
            arr = arr.reverse()
            setCount(count - 1)
            setLastColor(arr[lastIndex])
        }else{
            setCount(4)
            setLastColor(arr[count])
        }

    }
    console.log(count)


    return (
        <div className='App'>
        <h2>
            color changing box
        </h2>
            <div style={{
                width: '350px',
                height: '350px',
                background: arr[count]
            }}>

            </div>
            <div className="btn__wrapper">
                <button onClick={increment}>next</button>
                <button onClick={decrement}>prev</button>
            </div>

        </div>

    )
}


export default App;