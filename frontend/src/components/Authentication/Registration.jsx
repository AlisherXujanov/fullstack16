import { useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL } from "../../store";
import axios from 'axios';
import { useTranslation } from "react-i18next";

function Registration(props) {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    async function submit(e) {
        e.preventDefault();

        if (await validated()) {
            await axios.post(BASE_URL + 'users', {
                username: form.username,
                email: form.email,
                password: form.password,
            });
            toast.success(t("auth.accountCreated"), { theme: "dark" });
            setForm({
                username: "",
                email: "",
                password: "",
                password2: "",
            });
            e.target.reset();
        }
    }

    async function validated() {
        const existing_users = await axios.get(BASE_URL + 'users');
        let all_emails = existing_users.data.map(user => user.email);

        const name_pattern = /^[a-zA-Z]{1,20}$/;
        const password_pattern = /^[a-zA-Z0-9]{6,30}$/;

        let result = true;
        if (!form.username.length || !form.email.length || !form.password.length || !form.password2.length) {
            result = false;
            toast.error(t("auth.allFieldsRequired"), { theme: "dark" });
        } else if (!name_pattern.test(form.username)) {
            result = false;
            toast.error(t("auth.invalidUsername"), { theme: "dark" });
        } else if (all_emails.includes(form.email)) {
            result = false;
            toast.error(t("auth.emailExists"), { theme: "dark" });
        } else if (!password_pattern.test(form.password)) {
            result = false;
            toast.error(t("auth.invalidPassword"), { theme: "dark" });
        } else if (form.password !== form.password2) {
            result = false;
            toast.error(t("auth.passwordMismatch"), { theme: "dark" });
        }
        return result;
    }

    function handleFormInformation(e) {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <form onSubmit={submit}>
            <header>
                <h2>{t("auth.createAccount")}</h2>
                <p>{t("auth.enterDetails")}</p>
            </header>

            <div className="form-control">
                <input type="text" placeholder={t("auth.username")} name='username'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="email" placeholder={t("auth.emailAddress")} name='email'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="password" placeholder={t("auth.password")} name='password'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <input type="password" placeholder={t("auth.passwordConfirmation")} name='password2'
                    onChange={handleFormInformation}
                />
            </div>
            <div className="form-control">
                <button type="submit">{t("auth.signUp")}</button>
            </div>
        </form>
    );
}

export default Registration;
