function Registration(props) {
    return (
        <form>
            <header>
                <h2>Create account</h2>
                <p>Please, enter your account details below</p>
            </header>

            <div className="form-control">
                <input type="text" placeholder="Username" />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Email Address" />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password" />
            </div>
            <div className="form-control">
                <input type="password" placeholder="Password confirmation" />
            </div>
            <div className="form-control">
                <button type="submit">Sign up</button>
            </div>
        </form>
    )
}

export default Registration;