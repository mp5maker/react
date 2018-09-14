class Form extends React.Component {
    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <div className="form-group text-center">
                    <label className="fullname">FullName</label>
                    <input type="text" placeholder="Enter your name" className="form-control" required/>
                </div>
                <button className="btn btn-success form-control">Add</button>
            </form>
        )
    }
}

export default Form;