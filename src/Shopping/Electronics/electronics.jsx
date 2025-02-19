import { useState, useEffect } from "react"
import '/Users/elijahmoye/Desktop/shoppingCart/shopping/src/Shopping/Electronics/electronics.css'

export const Electronics = () => {

    const [electronics, updateElectronics] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {

            const response = await fetch('https://fakestoreapi.com/products/category/electronics')
            await response.json().then((response) => {

                console.log(response)
                updateElectronics(response)
            })
            }
            catch(error) {

                console.log(error)
            }
        }
        fetchData()
    }, [])

    const Shopelectronics = () => {

        return(

            <>
                {electronics.map((item) => 

                    <>
                        <div className="items">{item.title}</div>
                    </>
                )}
            </>
        )
    }


    return (

        <>
           <div className="Electronics">
                <h2>Shop All Electronics</h2>

                <div className="electronicsItems">
                        <Shopelectronics />
                </div>
           </div>
        </>
    )
}