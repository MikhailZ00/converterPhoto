import * as React from "react";
import { ReactElement } from "react";
import Git from './git.svg'

import "./main-page.scss";

export const MainPage: React.FC<{}> = (): ReactElement => {

  const [Zalupa, setZalupa] = React.useState()
  const setZalupaCB = React.useCallback((props) => {
    setZalupa(props);
  },[Zalupa])
  const handleImageUpload = event => {
  const files = event.target.files
  const formData = new FormData()
  formData.append('myFile', files[0])
  fetch('http://e7d6c970ab8a.ngrok.io/api/images/', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(response => {
    setZalupaCB(response)
  })
  .catch(error => {
    console.error(error)
  })
}

const ZalupaCopyCB = React.useCallback(()=>{
  navigator.clipboard.writeText(Zalupa).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
},[Zalupa])

  return (
  <div>
    <div className='name'>Георгий Шамян</div>
    <div className='link'>
      <Git />
      <a href="https://github.com/GShamian" target="_blank">GShamian</a>
    </div>
    <div className='donate'>Donate: 9161976853</div>
  <div className='all-items'>
    <form encType="multipart/form-data" action="" className='glow-on-hover'>
      <input id="file" name='file' type="file" onChange={handleImageUpload} className='inputFile'/>
      <label htmlFor="file">Выберите файл</label>
    </form>
    <pre className='photo-class'>{Zalupa}</pre>
    {Zalupa &&
    <button onClick={ZalupaCopyCB} className='glow-on-hover'>Скопировать</button>}
  </div>
  </div>
)};
