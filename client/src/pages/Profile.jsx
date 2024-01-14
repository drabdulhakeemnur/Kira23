import {useSelector} from 'react-redux'
import {useRef, useState, useEffect} from 'react'
import {getDownloadURL, getStorage, ref, uploadBytesResumable  } from "firebase/storage";
import {app} from '../firebase.js'

export default function Profile() {
  const {currentUser}= useSelector((state)=>state.user)
  const fileRef= useRef(null)
  const [file, setFile]=useState(undefined)
  const [filePerc, setFilePerc]= useState(0)
  const [fileUploadError, setFileUploadError]= useState(false)
  const [formData, setFormData]= useState({})
  
 
  useEffect(()=>{
    if(file){
      handleFileUpload(file)
    }
  }, [file])
  const handleFileUpload= (file)=>{
    const storage= getStorage(app)
    const fileName= new Date().getTime()  + file.name 
    const storageRef= ref(storage, fileName)
    const uploadTask= uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', (snapshot)=>{
      const progress= (snapshot.bytesTransferred /
      snapshot.totalBytes)  * 100
      setFilePerc(Math.round(progress))
      // console.log('Upload is  '+ setFilePerc +' % done')
      
    },
    (error)=>{
      setFileUploadError(true)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then ((downloadURL)=>{
        setFormData({...FormData, avatar:downloadURL})
      })
    }
    )
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='font-semibold text-center my-7 text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept='image/*'/>
          <img  onClick={()=>fileRef.current.click()} src={ formData.avatar || currentUser.avatar} alt='Profile' className='rounded-full h-24 w-24 object-cover cursor-pointer mt-2 self-center'/>
          <p className='text-sm self-center'>
            {
              fileUploadError ?( <span className='text-red-700'>Error Image Upload( Image must be less than 2MB)</span>): filePerc >0 &&  filePerc <100  ? ( <span className=' text-slate-700'>{`Uploading ${filePerc}%`}</span> ): filePerc=== 100 ?(<span className='text-green-700'> Image Successfully Uploaded</span>):( "")
              
            }
          </p>
          <input type="username" placeholder='username' id='username' className='rounded-lg  border p-3' />
          <input type="username" placeholder='email' id='email' className='rounded-lg border p-3' />
          <input type="username" placeholder='password' id='password' className='rounded-lg border p-3' />
          <button className='uppercase bg-slate-700 p-3 hover:opacity-95 disabled:opacity-80 text-white rounded-lg'>Update</button>
      </form>
<div className='flex justify-between mt-5'>
  <span className='text-red-700 cursor-pointer'>Delete Account</span>
  <span className='text-red-700 cursor-pointer'> Sign Out</span>
</div>
    </div>
  )
}
