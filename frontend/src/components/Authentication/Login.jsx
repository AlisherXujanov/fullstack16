function Login(props) {
    return (
        <form>
            <header>
                <h2>Login</h2>
                <p>Please login using account details below</p>
                {/* <p>Please, enter your account details below</p> */}
            </header>

            <div className="form-control">
                <input type="text" placeholder="Email Address" />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" />
            </div>
            <div className="form-control">
                <p className="fotgot-password">Forgot your password?</p>
            </div>
            <div className="form-control">
                <button type="submit">Sign in</button>
            </div>
        </form>
    )
}

export default Login;