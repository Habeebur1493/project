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
     type="text"
     placeholder='title'
     className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
     onChange={(e) => settitle(e.target.value)}
     value={title}
    />  
    <div className='w-1/2 justify-between'>
    <input 
     type="text"
     placeholder='category'
     className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-[48%]"
     onChange={(e) => setcategory(e.target.value)}
     value={category}
    />  
    <input 
     type="text,number,symbol"
     placeholder='price'
     className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
     onChange={(e) => setprice(e.target.value)}
     value={price}
    />      

    </div>
     <input 
     type="text"
     placeholder='description'
     className="mb-3 text-2xl bg-zinc-100 rounded p-3 w-1/2"
     onChange={(e) => settitl(e.target.value)}
     value={title}
    />  
    </form>
  )
}

export default Create