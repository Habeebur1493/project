import React,{useState} from 'react'

const Create = () => {
    const [title, settitle] = useState(second)
    const [price, setprice] = useState(second)
    const [category, setcategory] = useState(second)
    const [description, setdescription] = useState(second)
    const [image, setimage] = useState(second)
  return (
    <form action=""
    className='flex flex-col p[5%] items-center w-screen  h-screen'>
     <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1> 
     <input 
     type="url"
     placeholder='image Link'
     className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
     onChange={(e) => setimage(e.target.value)}
     value={image}
    />  
    <input 
     type="title"
     placeholder='title'
     className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
     onChange={(e) => settitle(e.target.value)}
     value={title}
    />  
    </form>
  )
}

export default Create