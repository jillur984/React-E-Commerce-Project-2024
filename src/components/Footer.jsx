import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <>
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
     <div>
        <img src={assets.logo} alt="" className="mb-5 w-32" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente necessitatibus sunt recusandae perferendis nobis harum fuga omnis, vitae magni laborum quasi modi molestias architecto libero quas numquam consequuntur explicabo?</p>
     </div>
     <div>
        <p className="text-xl">COMPANY</p>
        <ul className="flex flex-col gap-1">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
     </div>
     <div>
        <p className="text-xl font-medium mb-5">Get in Touch</p>
        <ul className="flex flex-col gap-1">
            <li>+8801611780984</li>
            <li>jillur.cse.bd@gmail.com</li>
        </ul>
     </div>
        </div>
        <div>
            <hr/>
            <p className="py-5 text-sm text-center">Copyrigt @2024-forever.com-All Rights Reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer