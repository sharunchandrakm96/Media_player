import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='w-100 d-flex justify-content-center align-item-center' style={{height:'80vh'}}>
      <div className='row p-5 shadow'>
        <div className='col d-flex flex-column justify-content-center'>
          <h1>Media Player 2024</h1>
          <p>Explore Media Player for youtube video upload and managment. you can add and manage videos, categories and even check history</p>
       
          <div> 
            <Link to={'/dash'} className='btn btn-success'>Explore</Link>
          </div>
        </div>
        <div className='col'>
          <img src="https://img.freepik.com/premium-photo/concept-eternal-theme-about-eternity-music-musical-instruments-good-mood-ascended-aspiration-action-treble-clef-sheet-music_771426-4115.jpg" 
          className='img-fluid shadow' alt="img" />
        </div>
      </div>
    </div>
    <div className='mt-3 p-5'>
      <h2 className='text-center'>Features</h2>
      <div className='d-flex mt-2 flex-row justify-content-between'>

      <div className="card" style={{width: "18rem"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnznELE8ZNYpdgV436IoGYP0WEeLKRjYpC8A&usqp=CAU" className="card-img-top" alt="..."/>
       <div className="card-body">
          <h5 className="card-title">Music</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
       </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEilr1Z50w2GreelhYdnn2bWp-vENYGdAWYw&usqp=CAU" className="card-img-top" alt="..."/>
       <div className="card-body">
          <h5 className="card-title">Music Band</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
       </div>
      </div>
      <div className="card" style={{width:" 18rem"}}>
        <img src="https://i.makeagif.com/media/2-26-2023/bGq6Nq.gif" className="card-img-top" alt="..."/>
       <div className="card-body">
          <h5 className="card-title">YouTube</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
       </div>
      </div>
      </div>
    </div>
    <div className="mt-5 d-flex justify-content-between flex-row align-items-center p-5">
        <div className="col">
          <h2>Simple fast & Secure</h2>
          <p style={{textAlign:'justify'}}>Media Player 2024 is a platform for simple and faster youtube video uploading and management. You  video watch history too where you get 
            a simple video player interface with the app itself...
          </p>
        </div>
        <div className="col">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5X0g9AtOW70" title="Thooriga | HDR | Guitar Kambi Mele Nindru | Suriya, Prayaga Martin |Gautham Menon |Karthik |Navarasa" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Landing