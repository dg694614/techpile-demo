import { useState  } from 'react';
import { useNavigate } from "react-router-dom";



const Create = () => {
    const [id, changeId] = useState("");
    const [StuName, changeStuName] = useState("");
    const [StuEmail, changeStuEmail] = useState("");
    const [StuPassword, changeStuPassword] = useState("");
    const [StuMobile, changeStuMobile] = useState("");
    

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        const StudentData = { id,StuName,StuEmail,StuMobile,StuPassword};
        console.log(id, StuName, StuEmail, StuMobile, StuPassword);
        fetch("http://localhost:5000/stulist", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"

            },
            body: JSON.stringify(StudentData)
        }).then((res) => {
            if (res.ok) {

                alert('ata saved successfull');
                navigate('/list');
            }
        }).then((data) => {
            console.log(data);
        }).catch((error)=>
        {
console.log(error);
        
    })
}

return (
    <div>
        <div>
            <center>
            <form onSubmit={handleSubmit} className="b">
                <label>Id :</label>
                <input type='text' disabled /> <br/>
                <label>Name</label>
                <input type='text' value={StuName} required autoFocus placeholder='Enter Student Name' onChange={event => { changeStuName (event.target.value)} }  /> <br/> <br/>
            <label>Email</label>
            <input type='text' value={StuEmail} required autoFocus placeholder='Enter Student Email' onChange={event => { changeStuEmail (event.target.value)} }  /> <br/> <br/>
           <label>Mobile</label>
           <input type='text' value={StuMobile} required autoFocus placeholder='Enter Student Mobile' onChange={event => { changeStuMobile (event.target.value)} }  /> <br/> <br/>
           <label>Password</label>
           <input type='text' value={StuPassword} required autoFocus placeholder='Enter Student Password' onChange={event => { changeStuPassword (event.target.value)} }  /> <br/> <br/>
          
          <button type='Save'>Save</button>

            </form>
            </center>
        </div>

    </div>
)

};


export default Create;