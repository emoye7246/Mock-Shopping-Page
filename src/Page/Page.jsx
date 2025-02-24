import { Link} from "react-router-dom"

import { Navbar } from "../Navbar/Navbar"
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Page/page.css'
import logot from '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/assets/Logo para marca personal en negro y rosa.png'

export const DefaultPage = () => {


    return (
        <>

            <div className="DefaultPage">
                    
                    <div className="homeContents">

                        <div className="titlePage">
                            <h1 className="Header">Divine Shopping</h1>

                            <p>Hello Welcome to Divine Shopping We are happy to have you shop with us. <br />
                            We have a surplus of products that is catered to all consumers <br />
                            From Mens Clothing to Womens Clothing to Electronics and even Jewlery <br />
                            You will be able to find everything you need with one click.</p>
                        </div>

                        <img src={logot} alt=""/>
                    </div>

                    <button>
                        <Link to='shopping'>Shop Now</Link>
                    </button>
            </div>

        </>
    )
}