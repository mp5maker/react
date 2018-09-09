const CreateTable = ({data}) => (
    <table className="table table-striped table-bordered table-hover">
        <thead className="thead-light">
            <tr>
                <th>Team</th>
                <th>Player</th>
                <th>Position</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data.realmadrid.team}</td>
                <td>{data.realmadrid.name}</td>
                <td>{data.realmadrid.position}</td>
            </tr>
            <tr>
                <td>{data.barcelona.team}</td>
                <td>{data.barcelona.name}</td>
                <td>{data.barcelona.position}</td>
            </tr>
            <tr>
                <td>{data.liverpool.team}</td>
                <td>{data.liverpool.name}</td>
                <td>{data.liverpool.position}</td>
            </tr>
        </tbody>
    </table>
)

class Players extends React.Component{
    constructor(){
        super();
        this.players = {
            realmadrid: {
                team: "Real Madrid",
                name: "Christiano Ronaldo",
                position: "Striker"
            },
            barcelona: {
                team: "Barcelona",
                name: "Lionnel Messi",
                position: "Midfielder"
            },
            liverpool: {
                team: "Liverpool",
                name: "Torres",
                position: "Defense"
            }
        }
    }
    render(){
        return (
            <CreateTable data={this.players} />
        )
    }
}

export default Players;