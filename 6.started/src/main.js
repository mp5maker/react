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