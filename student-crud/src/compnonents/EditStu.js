import { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";

const EditStu = () => {
    const { stuid}  = useParams();

    useEffect(() => {
        fetch("http://localhost:5000/stulist/"+stuid).then((res) => {
            return res.json();
        }).then((data)=> {
            changeId(data.id)
            changeStuName(data.StuName)
            changeStuEmail(data.StuEmail)
            changeStuMobile(data.StuMobile)
            changeStuPassword(data.StuPassword)
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const [id, changeId] = useState("");
    const [StuName, changeStuName] = useState("");
    const [StuEmail, changeStuEmail] = useState("");
    const [StuMobile, changeStuMobile] = useState("");
    const [StuPassword, changeStuPassword] = useState("");

const navigate = useNavigate();

const handleSubmit = (e) =>  {
    e.preventDeault();
    const StudentData = { id, StuName, StuEmail, StuMobile, StuPassword };
    console.log(id, StuName,StuEmail,StuMobile,StuPassword);
    fetch("http://localhost:5000/stulist/"+id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(StudentData)
    }).then((res) => {
        if(res.ok){

            alert('You have successfully');
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
        <h1> Create_any_student</h1>
    </div>
    <div>
        <form onSubmit={handleSubmit}>
       <label>Id:</label>
       <input type="text" disabled /> <br/><br/>
       <label>Name :</label>
       <input type='name' value={StuName} required autoFocus placeholder="Enter your name" onChange={ changeStuName(Event .target.value ) } /> <br/> <br/>
       <label>Mobile :</label>
       <input type='mobile' value={StuMobile} required autoFocus placeholder="Enter your mobile" onChange={ changeStuMobile(Event .target.value ) } /> <br/> <br/>
       <label>Email :</label>
       <input type='email' value={StuEmail} required autoFocus placeholder="Enter your email" onChange={ changeStuEmail(Event.target.value)} /><br/><br/>
       <label>Password :</label>
       <input type='password' value={StuPassword} required autoFocus placeholder="Enter your password" onChange={ changeStuPassword(Event.target.value )}/><br/><br/>
        </form>
    </div>
    </div>
)

};







export default EditStu; <label> :</label>