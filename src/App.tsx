import useFetch from './useFetch'
import './App.css'




function App() {

  const picture = useFetch()

  return (
   <>

     <h1>Hello world</h1>
     <ul>
   {picture.photos.map((photo) => <li
   key={photo.id}>
     {photo.id}
   </li>)}
   </ul>
   </>
  )
}

export default App
