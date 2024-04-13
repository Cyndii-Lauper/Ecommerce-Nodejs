// import ProductForm from "@/components/ProductForm";
import Layout from "@/components/Layout";
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";


export default function NewProduct() {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  // const [category,setCategory] = useState(assignedCategory || '');
  const [price,setPrice] = useState('');
  const [goToProducts,setGoToProducts] = useState(false);
  const router = useRouter();
  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    axios.post('/api/products', data);
    setGoToProducts(true);
  }
  if (goToProducts) {
    router.push('/products');
  }
  return (
    <Layout>
      <form onSubmit={createProduct}>
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" className="form-control" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}/>
        </div>
        <div className="form-group">
          <label>Price (in VND)</label>
          <input type="number" className="form-control" placeholder="price" value={price} onChange={ev => setPrice(ev.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
      
    </Layout>
  );
}