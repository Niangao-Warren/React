import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import LikeButton from './components/LikeButton'
import useURLLoader from './hooks/useURLLoader'

const CatShowWithHook = () => {
  const [ category, setCategory ] = useState('1')
  const [ data, loading ] = useURLLoader(`https://api.thecatapi.com/v1/images/search?limit=1&category_ids=${category}`)
  return (
    <>
      <button onClick={() => { setCategory('1') }}>帽子猫</button>
      <button onClick={() => { setCategory('5') }}>盒子猫</button>
      {loading ? <p>新猫咪读取中</p>
       : <img src={data && data[0].url} alt="cat" style={{width: 300}} />
      }
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <LikeButton /> */}
        <CatShowWithHook />
      </header>
    </div>
  );
}

export default App;
