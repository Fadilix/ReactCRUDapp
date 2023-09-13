import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./AddEdit.css";
import axios from 'axios';
import { toast } from "react-toastify";

const initialState = {
    name: "",
    email: "",
    contact: ""
};


const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const { name, email, contact } = state
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/api/get/${id}`)
            .then((resp) => setState({ ...resp.data[0] }))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("Please provide value into each input field")
        } else {
            if (!id) {

                axios.post("http://localhost:8081/api/post", {
                    name,
                    email,
                    contact
                }).then(() => {
                    setState({ name: "", email: "", contact: "" })
                })
                    .catch((err) => toast.error(err.response.data))
                toast.success("Contact added successfully")
                setTimeout(() => {
                    history.push("/")
                }, 500)
            } else {
                axios.put(`http://localhost:8081/api/update/${id}`, {
                    name,
                    email,
                    contact
                }).then(() => {
                    setState({ name: "", email: "", contact: "" })
                })
                    .catch((err) => toast.error(err.response.data))
                toast.success("Data updated successfully")
                setTimeout(() => {
                    history.push("/")
                }, 500)
            }
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })

    }
    return (
        <div style={{ marginTop: "100px" }}>
            <form action="" style={{
                margin: "auto",
                padding: "2px",
                maxWidth: "400px",
                alignContent: "center",
            }}

                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Your name ...'
                    value={name || ""}
                    onChange={handleInputChange}

                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Your email ...'
                    value={email || ""}
                    onChange={handleInputChange}

                />

                <label htmlFor="contact">Contact</label>
                <input
                    type="number"
                    id="contact"
                    name="contact"
                    placeholder='Your contact ...'
                    value={contact || ""}
                    onChange={handleInputChange}

                />

                <input type="submit" value={id ? "Update" : "Save"} />
                <Link to="/">
                    <input type="button" value="Go back" />
                </Link>

            </form>
        </div>
    )
}

export default AddEdit;