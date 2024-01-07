import React from 'react'
import vg from '../assets/img-01.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
   <>
    <div className='home' id='home'>
        <main>
            <h1>MYRA</h1>
            <p>Beauty exists everywhere</p>
        </main>
    </div>

    <div className='home2' >
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eligendi ipsum veritatis? Aut perferendis, at nihil mollitia asperiores autem soluta fugit exercitationem qui cumque, nemo libero quo dignissimos, necessitatibus cum voluptatem iure eaque ipsam voluptates ad. Blanditiis voluptatem iure asperiores.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quo rem sit officia blanditiis! In, vero, odio amet obcaecati perferendis quo ipsam, atque consequuntur dicta provident commodi quaerat autem quod dolore quasi iure cupiditate blanditiis aperiam modi voluptatum ea? Sapiente, sit? Suscipit culpa placeat error beatae exercitationem eum rerum laboriosam voluptas, reprehenderit totam deleniti dolorum nemo sint id quam dignissimos.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay: "0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay: "0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay: "0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay: "1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
   </>
  )
}

export default Home;