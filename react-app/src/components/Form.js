const Form = () =>{
return (
    <>
    <form action="">
        <div className="form-group">
            <label htmlFor="email"></label>
            <input type="text" name="email" id="email" placeholder="Enter Email Here" className="form-control" />
        </div>
        <div className="form-group">
            <label htmlFor="password"></label>
            <input type="text" name="password" id="passsword" placeholder="Enter Password Here" className="form-control" />
        </div>
        <button>Login</button>
    </form>
    </>
)
}

export default Form;