import { useState, useEffect } from "react";
import  { Link, useNavigate } from "react-router-dom";

const StuData =  ()  => {
const [StudentData, changeStudentData] = useState(null);
const navigate = useNavigate();

useEffect(() => {
    fetch("http://localhost:5000/stulist").then((res) => {
        return res.json();
        changeStudentData(res.data)
    }).then((data) => {
        console.log(data.data)
        // changeStudentData(data.data)
    }).catch((err) => {
        console.log(err);
    })
}, []);


const EditData = (id) => {
    navigate('/edit' + id)
}

const DeleteData = (id) => {
    if (window.confirm("You are sure delete")) {
        fetch("http://localhost:5000/stulist/" +id,{
            method: "DELETE"
        }).then((response) => {
            console.log("Student is remove");
            window.location.reload();
            
        }).catch((error) => {
            console.log("Something wrong" + error);
        })
    }
};

return (
    <div>
        <h1>Student List </h1><hr/>
        <div>
            <table>
                <thead>
                    {/* <Link to='/'style={{ textDecoration:"none"}}> Add more list</Link> */}
                    <h1>Add  list</h1>
               <tr>
                <th> Student Id</th>
                <th>Student Name</th>
                <th>Student Mobile</th>
                <th>Student Email</th>
                <th>Student Password</th>
               </tr>
                </thead>
                <tbody>
                    {StudentData && StudentData.map(list =>{

                    
                   <tr>
                    <td>Student.Id</td>
                    <td>Student.Name</td>
                    <td>Student.Email</td>
                    <td>Student .Password</td>
                    <td>Student.Mobile</td>

    <button onClick={() => { EditData(list.id) }} >Edit</button>
    <button onClick={() => { DeleteData(list.id) }} >Delete</button>
                    
                   </tr>
                   })
                }
                </tbody>
            </table>
        </div>
    </div>
)
};

export default StuData;