import { useTranslation } from "react-i18next";

function Login(props) {
    const { t } = useTranslation();

    return (
        <form>
            <header>
                <h2>{t("auth.login")}</h2>
                <p>{t("auth.loginPrompt")}</p>
            </header>

            <div className="form-control">
                <input type="text" placeholder={t("auth.emailAddress")} />
            </div>
            <div className="form-control">
                <input type="password" placeholder={t("auth.password")} />
            </div>
            <div className="form-control">
                <p className="forgot-password">{t("auth.forgotPassword")}</p>
            </div>
            <div className="form-control">
                <button type="submit">{t("auth.signIn")}</button>
            </div>
        </form>
    );
}

export default Login;
