import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import "./View.css"
import axios from 'axios';
const View = () => {
    const [user, setUser] = useState({});

    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8081/api/get/${id}`)
            .then((resp) => setUser({ ...resp.data[0] }))
    }, [id]);
    return (
        <div style={{ marginTop: "150px" }}>
            <div className="card">
                <div className="card-header">User contact Detail</div>
            </div>
            <div className="container">
                <table className='table'>
                    <tr>
                        <td>ID : </td>
                        <td>{id}</td>
                    </tr>

                    <tr>
                        <td>Name :</td>
                        <td>{user.name}</td>
                    </tr>

                    <tr>
                        <td>Email : </td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Contact : </td>
                        <td>{user.contact}</td>
                    </tr>
                </table>

            </div>
                <Link to="/">
                    <div className="btn btn-edit">Go back</div>
                </Link>


        </div>
    )
}

export default View