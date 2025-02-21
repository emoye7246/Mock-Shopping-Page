import { Link} from "react-router-dom"

import { Navbar } from "../Navbar/Navbar"

export const DefaultPage = () => {


    return (
        <>
            <h1>Divine Shopping</h1>
                
                <div>
                    Hello Welcome to Divine Shopping We are happy to have you shop with us. <br />
                    We have a surplus of products that is catered to all consumers <br />
                    From Mens Clothing to Womens Clothing to Electronics and even Jewlery <br />
                    You will be able to find everything you need with one click. 
                </div>

                <Link to='shopping'>
                    <button>Click Here to get Started</button>
                </Link>
        </>
    )
}