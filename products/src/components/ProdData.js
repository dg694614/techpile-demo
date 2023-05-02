import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
const ProdData = () => {
    const [ProductData, changeProductData] = useState("");
    const navigate = useNavigate();



    useEffect(() => {
        fetch("http://localhost:5000/product").then((res) => {
            return res.json();
        }).then((data) => {
            console.log(changeProductData(data))

        }).catch((err) => {
            console.log(err);
        })
    }, []);


    const EditData = (id) => {
        navigate('/edit/' + id)
    }

    const DeleteData = (id) => {
        if (window.confirm("You are Sure Delete")) {
            fetch("http://localhost:5000/product/" + id, {
                method: "DELETE"
            }).then((response) => {
                console.log("Product is Removed !");
                window.location.reload();
                window.location.reload();
            }).catch((error) => {
                console.log("Something wrong" + error);
            })
        }

    };

    return (
        <div>
            <h1> Product Add  List</h1><hr />
            <div>
                <div>
                    <table>
                        <thead>
                            <Link to='/' style={{ textDecoration: "none" }}  >Add More Item</Link>
                            <tr>
                                <th>Id</th>
                                <th>Product_Name</th>
                                <th>Product_Price</th>
                                <th>Product_Image</th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProductData && ProductData.map(item => {
                                return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.Prodname}</td>
                                    <td>{item.Prodprice}</td>
                                    
                                    <td><img src={item.Produrl} style={{ height: "40px" }} alt=".../" /></td>

                                    <button onClick={() => { EditData(item.id) }} >Edit</button>
                                    <button onClick={() => { DeleteData(item.id) }} >Delete</button>

                                </tr>

                            })

                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>

    )
};
export default ProdData;