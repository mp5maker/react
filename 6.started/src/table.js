class Table extends React.Component {
    render() {
        const photon = {
            name: "Shabuktagin Photon Khan",
            age: 27,
            salary: 40000            
        }
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead class="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{photon.name}</td>
                        <td>{photon.age}</td>
                        <td>{photon.salary}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;