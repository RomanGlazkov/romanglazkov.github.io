import { Routes, Route, NavLink } from 'react-router';

function Router() {
    return (
        <>
            <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/category">Category</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </>
    );
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const Category = () => (
    <div>
      <h2>Category</h2>
    </div>
  );

const Products = () => (
    <div>
        <h2>Products</h2>
    </div>
);

export default Router;
