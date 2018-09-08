const Table = require('./table.js');

var heading = React.createElement('h1', {'data-type': "title"}, "Learning React");
var list = React.createElement('ul', {class: "list-group"},
    React.createElement('li', {class: "list-group-item"}, "Tomatoes"),
    React.createElement('li', {class: "list-group-item"}, "Potatoes"),
    React.createElement('li', {class: "list-group-item"}, "Cabbage"),
);
ReactDOM.render(heading, document.getElementById('react-heading'));
ReactDOM.render(list, document.getElementById('react-content'));

var items = [
    "tomatoes",
    "potatoes",
    "onion"
];

var items_list =   
React.createElement('ul', {class: 'list-group'},
        items.map((item, i) =>
            React.createElement('li', {key: i, class: "list-group-item"}, item)
        )
    );
ReactDOM.render(items_list, document.getElementById('react-content-2'));



class GuitarList extends React.Component {
    render() {
        const guitars = [
            "Fender",
            "ESP",
            "Ibanez"
        ];
        return React.createElement('ul', {class: 'list-group'}, 
            guitars.map((guitar, i) => 
                React.createElement('li', {key: i, class: 'list-group-item'}, guitar)
            )
        )
    }
}

ReactDOM.render(
    <GuitarList />,
    document.getElementById('react-content-guitars')
)

class Footer extends React.Component {
    render() {
        return (
            <p class="lead" className="footer">
                <span>
                    2018 &copy; Photon Enterprise 
                    <small> Build with react app</small>
                </span>
            </p>
        )
    }
}

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
)

class Person extends React.Component{
    render() {
        const samith = {
            name: "Samith Zaman",
            age: 27,
            salary: 50000,
            hobbies: "none"
        } 
        return (
            <div class="card">
                <div class="card-header">
                    <span>
                        Name: {samith.name}    
                    </span>
                </div>
                <div class="card-body">
                    <div>
                        Age: {samith.age}
                    </div>
                    <div>
                        Salary: {samith.salary}
                    </div>
                </div>
                <div class="card-footer">
                    <div>
                        Hobbies: {samith.hobbies}
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Person />,
    document.getElementById('samith')
)

ReactDOM.render(
    <Table />,
    document.getElementById('some-data')
)