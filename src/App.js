import React, {useState} from 'react';

const App = () => {

    // 변수, 상수, 함수 등이 들어가는 자리.

    // 상수 (const, let) = 변하지 않는 값.
    // 변수 (var) = 데이터가 수시로 변하는 값.

    //initialState = 초기값.
    const [memo, setMome] = useState("")

    const changeMemo = () => {
        setMome("World")
    }

    // 화면에 보여지는 부분, html로 표현될 것. 상수 표현은 {} 안에.
    return (
        <div>
            <h1>{memo}</h1>
            <button onClick={changeMemo}>change</button>
        </div>
    );
};

export default App;