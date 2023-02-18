import {useDropzone} from 'react-dropzone'
import React, { useRef, useState, useCallback } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [imaegList, setImageList] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles:any) => {
    for(const file of acceptedFiles){
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = event => {
        setImageList(prev => [...prev, event.target?.result as string])
      }  
    }
  }, [])

  const {getRootProps, getInputProps, open} = useDropzone({onDrop})
  return (
    <div className='container'>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={`wrapper_box ${imaegList.length > 0 ? 'row' : '' }`}>
          {
            imaegList.length === 0 &&
            <div className='text'>
              이미지가 없습니다. <br />
              이미지를 추가해주세요.
            </div>
          }
              {
                imaegList.map((img,idx) => <ImageBox key={img+idx} src={img}/>)
              }
            <div className='plus_box' onClick={open}>
              <input className='input_image' type='file' ref={inputRef} />
                    +
                </div>
            </div>    
        </div>
    </div>
  );
}

export default App;
