import { useState } from 'react'
import { toast } from 'react-toastify'
import { BASE_URL } from "../../store"
import axios, { all } from 'axios'


function Registration(props) {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    async function submit(e) {
        e.preventDefault()

        if (await validated()) {
            await axios.post(BASE_URL+'users', {
                username: form.username,
                email: form.email,
                password: form.password,
            })
            toast.success("Account created successfully", { theme: "dark" })
            setForm({
                username: "",
                email: "",
                password: "",
                password2: "",
            })
            e.target.reset()
        }
    }

    async function validated() {
        const existing_users = await axios.get(BASE_URL+'users')
        let all_emails = existing_users.data.map(user => user.email)

        const name_pattern = /^[a-zA-Z]{1,20}$/
        const password_pattern = /^[a-zA-Z0-9]{6,30}$/

        let result = true
        if (!form.username.length || !form.email.length || !form.password.length || !form.password2.length) {
            result = false
            toast.error("All fields are required", { theme: "dark" })
        } 
        else if (!name_pattern.test(form.username)) {
            result = false
            toast.error("Invalid username", { theme: "dark" })
        } 
        else if (all_emails.includes(form.email)) {
            result = false
            toast.error("Email already exists", { theme: "dark" })
        }
        else if (!password_pattern.test(form.password)) {
            result = false
            toast.error("Password must consist of only letters and numbers and 6<", { theme: "dark" })
        } 
        else if (form.password !== form.password2) {
            result = false
            toast.error("Passwords do not match", { theme: "dark" })
        }
        return result
    }

    function handleFormInformation(e) {
        const { value, name } = e.target
        setForm({ ...form, [name]: value })
    }

    return (
        <form onSubmit={submit}>
            <header>
                <h2>Create account</h2>
                <p>Please, enter your account details below</p>
            </header>

            <div className="form-control">
                <input type="text" placeholder="Username" name='username'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="email" placeholder="Email Address" name='email'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" name='password'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password confirmation" name='password2'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <button type="submit">Sign up</button>
            </div>
        </form>
    )
}

export default Registration;