export default function ImageBox(props:{
  src:string
}) {
  return (
    // 파일을 이미지에 넣어도 정상적으로 작동할 수 있게 file object로 conversion.
    // file을 image url로 바꿔줘야됌
    <div className='image_box'>
        <img className='image' src={props.src} />
    </div>
  )
}