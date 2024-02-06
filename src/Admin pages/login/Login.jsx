import { BASE_URL } from "../../config";
import { useState } from "react";
import axios from "axios";

export default function AdminLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <div style={{alignSelf:"center", display:"block"}}>
            <input placeholder="Username" type="email" required onChange={(value)=>{
                setEmail(value);
            }}/>
            <input placeholder="password"
                type="password" required
                onChange={(value)=>{
                    setPassword(value);
                }}/>
            <button onClick={async () => {
                const res = await axios.post(`${BASE_URL}/admin/login`, {
                    username: email,
                    password: password
                }, {
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                
                const data = res.data;
                localStorage.setItem("token", data.token)
                alert(data.msg)
                }}>Login</button>
        </div>
        </>
    )
}