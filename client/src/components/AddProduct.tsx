import { createRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { actions } from "../crud";

function AddProduct() {

   function buildBody() {
        const bodyObj = {
            makat: makat.current?.value,
            category: category,
            price: price.current?.value,
            color: color,
            description: description.current?.value,
            pic_url: picture.current?.value
        }
        return bodyObj;
    }

    let makat = createRef<HTMLInputElement>();
    let price = createRef<HTMLInputElement>();
    let description = createRef<HTMLInputElement>();
    let picture = createRef<HTMLInputElement>();
    const [category, setCategory] = useState<any>('');
    const [color, setColor] = useState<any>('');

    return (
        <div>
            <Container>
                <h1>Add Products</h1>
            <Form.Group className="mb-3">
                <Form.Label>Makat:</Form.Label>
                    <Form.Control ref={makat} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category:</Form.Label>
                    <Form.Select  onChange={(e) => {
                        setCategory(e.target.value);
                    }}>
                        <option value="Rings">Rings</option>
                        <option value="Braclets">Braclets</option>
                        <option value="Neckles">Neckles</option>
                        <option value="Earrings">Earrings</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price:</Form.Label>
                <Form.Control ref={price} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Color::</Form.Label>
                    <Form.Select onChange={(e) => {
                        setColor(e.target.value);
                    }}>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Copper">Copper</option>
                        <option value="Pearl">Pearl</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control ref={description } />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Picture:</Form.Label>
                    <Form.Control ref={ picture} />
                </Form.Group>
            
            <Form.Group className="mb-3">
             
            </Form.Group>
            </Container>
            <Button variant="success" type="submit" onClick={(e: any) => actions.Add(e, buildBody)}>
                Add TO My Sql Table
            </Button>
            <input required></input>
        </div>
    )
}

export default AddProduct;
