const NewsLetter = () => {
    const onHandleFormSubmit=(e)=>{
       e.prevenetDefault()
    }
  return (
    <>
    <div className="text-center">
    <p className="text-2xl font-medium text-gray-800">Subscribe now and get 20% off</p>
    <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus facilis libero rerum. Exercitationem, at cum dignissimos commodi ea ratione, incidunt laborum quidem illo quam aliquid dolorem minima reiciendis itaque sequi?</p>
    <form onSubmit={onHandleFormSubmit} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter Your Email" required />
    </form>
    <button className="bg-black text-white text-xs px-10 py-4" type="submit">SUBSCRIBE</button>
    </div>
    </>
  )
}

export default NewsLetter