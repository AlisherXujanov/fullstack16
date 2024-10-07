import "./style.scss";
import Heading from "../common/Heading";
import { CiLogin } from "react-icons/ci";
import { useState } from 'react';
import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import { useTranslation } from "react-i18next";

function Authentication() {
    const { t } = useTranslation();
    const [isRegistered, setIsRegistered] = useState(true);

    function toggleAuth() {
        setIsRegistered(!isRegistered);
    }

    return (
        <div className="auth-wrapper-container">
            <Heading title={isRegistered ? t("auth.login") : t("auth.createAccount")} path={t("auth.authenticate")}>
                <CiLogin />
            </Heading>
            
            <div className="form-wrapper">
                {isRegistered ? <Login /> : <Registration />}

                <p className="auth-toggler-container">
                    {isRegistered ? (
                        <span>{t("auth.noAccount")} <button onClick={toggleAuth}>{t("auth.createAccount")}</button></span>
                    ) : (
                        <span>{t("auth.hasAccount")} <button onClick={toggleAuth}>{t("auth.login")}</button></span>
                    )}
                </p>
            </div>
        </div>
    );
}

export default Authentication;
