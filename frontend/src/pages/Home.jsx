import Navbar from "../features/navbar/Navbar"
import ProductList from "../features/productList/productList"

export default function Home(){
    return (
       <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
       </div>
    )
}