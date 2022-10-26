import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/AddProduct';
import UpdateProducts from './components/UpdateProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JEWELRY STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="add">Add Product</NavDropdown.Item>
              <NavDropdown.Item href="update">Update Product</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    
      <BrowserRouter>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="update" element={<UpdateProduct />} />

          </Routes>
        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
