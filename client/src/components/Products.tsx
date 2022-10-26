import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Product from "./Product";

function Products(props:any) {
 
    const [products, setProductsArr] = useState<any>([]);

    let arr: any;

    useEffect(() => {
        fetch('/api/products').then(res => res.json()).then(res => {
            setProductsArr(res);
        });
    }, []);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Color</th>
                    <th>Description</th>
                    <th>Picture</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody >
                {products.map((p: { category: any; price: any; color: any; description: any; pic_url: any; }, i:string) => <Product category={p.category} price={p.price} color={p.color} description={p.description} pic_url={p.pic_url} key= {`${i}`} />) }
            </tbody>
        </Table>
    )
}

export default Products;