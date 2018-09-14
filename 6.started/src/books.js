class Collection extends React.Component {
    constructor(){
        super();
        this.books = [
            {
                "title": "Angels & Demons",
                "author": "Dan Brown"
            },
            {
                "title": "Harry Potter",
                "author": "J.K Rowling"
            }
        ];
    }

    render() {
        return <Books collection={this.books}/>
    }
}

class Books extends React.Component {
    constructor() {
        super();
    }

    render(){
        const collections = this.props.collection;
        return(
            <ul className="list-group"> {
                collections.map(function(book, i){
                    return (
                        <li key={i} className="list-group-item">
                            <p>Title: {book.title} </p>
                            <p>
                                <small>Author: {book.author} </small>
                            </p>
                        </li>
                    ) 
                })
            }
            </ul>
        )
    }
}

export default Collection;