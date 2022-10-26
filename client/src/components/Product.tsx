import { actions } from "../crud";


function Product(props: any) {
    

    return (
        <tr>
            <td>{props.category}</td>

            <td>{props.price}</td>

            <td>{props.color}</td>

            <td>{props.description}</td>

            <td><img src={`/images/${props.pic_url}.jpg`} /></td>

            <td><button onClick={(e) => actions.deleteFromSql(e, props.makat)}>delete</button></td>
        </tr>
    )
}

export default Product;