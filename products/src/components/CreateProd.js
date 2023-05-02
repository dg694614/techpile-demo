
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [id, changeId] = useState("");
    const [Prodname, changeProdname] = useState("");
    const [Prodprice, changeProdprice] = useState("");
    const [Produrl, changeProdurl] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ProductData = { id, Prodname, Prodprice, Produrl };
        console.log(id, Prodname, Prodprice, Produrl);
        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ProductData)
        }).then((res) => {
            if (res.ok) {

                alert('Data Saved Successful !');
                navigate('/list');

            }
        }).then((data) => {
            console.log(data);
        }).catch((error) => 
        {
            console.log(error);

        });
    }
    return (
        <div>
            <div>
                <h2>Create_Product_Data</h2> <hr />

            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Id :</label>
                    <input type='text' disabled /> <br /><br />
                    <label>Name* :</label>
                    <input type='name' value={Prodname} required autoFocus placeholder='Enter Product Name' onChange={event => { changeProdname(event.target.value) }} /><br /><br />
                    <label>Price* :</label>
                    <input placeholder='Enter Product Price' value={Prodprice} type="number" onChange={event => { changeProdprice(event.target.value) }} /> <br /><br />
                    <label>Url* :</label>
                    <input value={Produrl} type='url' placeholder= "Product Url Here" onChange={event => { changeProdurl(event.target.value) }} /><br /> <br />
                    

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
};
export default Create;