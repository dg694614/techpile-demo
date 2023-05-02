
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Edit = () => {
    const { prodId } = useParams();

    useEffect(() => {
        fetch("http://localhost:5000/product/"+prodId).then((res) => {
            return res.json();
        }).then((data) => {
            changeId(data.id)
            changeProdname(data.Prodname)
            changeProdprice(data.Prodprice)
            changeProdurl(data.Produrl)

        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const [id, changeId] = useState("");
    const [Prodname, changeProdname] = useState("");
    const [Prodprice, changeProdprice] = useState("");
    const [Produrl, changeProdurl] = useState("");
  

    const navigate = useNavigate();

  

    const handleSubmit = (e) => {
        e.preventDefault();
        const ProductData = { id, Prodname, Prodprice, Produrl };
        console.log(id, Prodname, Prodprice, Produrl);
        fetch("http://localhost:5000/product/"+prodId ,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ProductData)
        }).then((res) => {
          if(res.ok){

            alert('You Have Successful Updated.. !');
            navigate('/list');

          }
        }).then((data)=>{
            console.log(data);
        }).catch((error) => {
            console.log(error);

        });
    }
    return (
        <div>
            <div>
                <h2>Create_Any Product_Data</h2> <hr />

            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Id :</label>
                    <input type='text' disabled /> <br /><br />
                    <label>Name* :</label>
                    <input type='name' value={Prodname} required autoFocus placeholder='Enter Product Name' onChange={event => { changeProdname(event.target.value) }} /><br /><br />
                   
                    <input placeholder='Enter Product Price' value={Prodprice} type="number" onChange={event => { changeProdprice(event.target.value) }} /> <br /><br />
                    <label>Url* :</label>
                    <input value={Produrl} type='url' placeholder= "Product Url Here" onChange={event => { changeProdurl(event.target.value) }} /><br /> <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )

};
export default Edit; <label>Price* :</label>