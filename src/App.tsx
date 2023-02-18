import React, { useRef, useState } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';

function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [imaegList, setImageList] = useState<string[]>([])

  return (
    <div className='container'>
      <div className={`wrapper_box ${imaegList.length > 0 ? 'row' : '' }`}>
        {
          imaegList.length === 0 &&
          <div className='text'>
            이미지가 없습니다. <br />
            이미지를 추가해주세요.
          </div>
        }
        <input className='input_image' type='file' ref={inputRef} onChange={(event)=>{
          if(event.currentTarget.files?.[0]) {
            const reader = new FileReader()
            const file = event.currentTarget.files?.[0];
            reader.readAsDataURL(file)
            reader.onloadend = event => {
                setImageList(prev => [...prev, event.target?.result as string])
            }
          }
        }} />
        {
          imaegList.map(img => <ImageBox key={img} src={img}/>)
        }
        <div className='plus_box' onClick={()=>{
          inputRef.current?.click()
        }}>
          +
        </div>
      </div>
    </div>
  );
}

export default App;
