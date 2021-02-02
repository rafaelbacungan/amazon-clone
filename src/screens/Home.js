import React from 'react'
import './css/Home.css'
import Product from '../components/Product'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB420684220.jpg" 
                    alt="" />
                <div className="home__row">                    
                    <Product title='The Lean Startup: How Constant Innovation creates Radically Successful Businesses Paperback' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" rating={5}/>
                    <Product title='Kenwood kMix Stand Mixer for Baking, Stylish kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' price={239.0} image='' rating={4}/>
                </div>

                <div className="home__row">
                    <Product title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor' price={199.99} image='' rating={3}/>
                    <Product title='Amazon Echo (3rd generation | Smart speaker with Alexa, Charcoal Fabric' price={98.99} image='' rating={5}/>
                    <Product title='New Applie iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' price={398.99} image='' rating={4}/>
                </div>

                <div className="home__row">
                    <Product title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440' price={1094.98} image='' rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home
