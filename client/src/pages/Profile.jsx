import {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser}= useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='font-semibold text-center my-7 text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
          <img src={currentUser.avatar} alt='Profile' className='rounded-full h-24 w-24 object-cover cursor-pointer mt-2 self-center'/>
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
