import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo } from '../services/allApis';
import { toast } from 'react-toastify';
import { addhistory } from '../services/allApis';

function Videocard({video,setDelStatus,cat}) {
    const [show, setShow] = useState(false);
    const [history,sethistory]=useState({
        caption:video.caption, url:video.url, datetime:''
    })
    

    const handleDelete=async(id)=>{
        console.log(id)
        const res=await deleteVideo(id)
        console.log(res)
        if(res.status>=200 && res.status<300){
            setDelStatus(res)
            toast.success("video Deleted Successfully!!")
        }
        else{
            toast.error("Video Deletion Faild!!!")
        }
    }

    const handleOnDrag=(e,id)=>{
        console.log("video is dragon id:"+id)
        e.dataTransfer.setData("videoid",id)
    }

    const handleClose = () => {
        addhistory(history)
        setShow(false)
    };
    const handleShow = () => { 
        const dt = new Date()
        sethistory({...history,datetime:new Date()})
        setShow(true)
    };
    return (
        <>
            <Card style={cat?{width:'10rem'}:{ width: '18rem' }} className='ms-3 mb-3' draggable onDragStart={(e)=>{handleOnDrag(e,video?.id)}}>
                <Card.Img variant="top" src= {video.image} onClick={handleShow} className='img-fluid'/>
                <Card.Body className='d-flex flex-row justify-content-between'>
                    <Card.Title>{video.caption}</Card.Title>
                    {
                        !cat &&
                        <i className='fa-solid fa-trash' onClick={()=>{handleDelete(video.id)}} style={{ color: "#ef0b0b" }}></i>
                    }
                    
                </Card.Body>
            </Card>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Bramayugham</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SfsWWXQK8pg?si=yTicG5ktukXT7i6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default Videocard