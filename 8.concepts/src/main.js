// Using Create Element
helloWorld = React.createElement('h1', {className: "title"}, "Hello World");
ReactDOM.render(
    helloWorld,
    document.getElementById('hello-world'),
)

// Embedding Expression in Javscript XML language
const myName = "Shabuktagin Photon Khan";
const Name = <h1> Name: {myName} </h1>;
ReactDOM.render(
    Name,
    document.getElementById('my-name')
)

// Embedding Expression including formatting
const user = {
    firstName: "Photon",
    lastName: "Khan",
}

function formatName(user){
    return `${user.firstName} ${user.lastName}`;
}

const displayName = (
    <h1 className="lead"> 
        Full Name: {formatName(user)} 
    </h1>
) 

ReactDOM.render(
    displayName,
    document.getElementById('display-name')
)

// Creating a clock
function tick() {
    const element = (
        <div>
            <p>Time: {new Date().toLocaleTimeString()}</p>
        </div>
    )
    ReactDOM.render(
        element,
        document.getElementById('show-time')
    )
}

setInterval(tick, 1000);

// Rendering a Component
function Welcome(person){
    return <h1>Welcome, {person.name}; Age: {person.age}</h1>;
}

const personGreeting = <Welcome name="Photon Khan" age="27"/>;
ReactDOM.render(
    personGreeting,
    document.getElementById('person-greeting')
)

// Converting a clock to a class
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        // Normal Function not working, only aroow function works
        this.timerId = setInterval(() => this.tick(), 1000);
    }   

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }

    render() {
        return (
            <div>
                <h2>Time: {this.state.date}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
)

// Handling Events
class HandlingEvents extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(event) {
        event.preventDefault();
        console.log("Link was Clicked");
    }

    render() {
        return (
            <a href="#" onClick={this.handleClick}>
                Click Me
            </a>
        )
    }
}

ReactDOM.render(
    <HandlingEvents />,
    document.getElementById('handling-events')
)

// Toggle
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
        // To Make "this" work, we need to bind "this"
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function(previousState){
            return {
                isToggleOn: !previousState.isToggleOn
            };
        });
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn? "ON": "OFF"}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('toggle')
)

// Alternative to bind
class LoggingButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        console.log('this is', this);
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        )
    }
}

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('logging-button')
)

/**
 * Login Control
 * @param {*} props 
 */
function UserGreeting(props) {
    return <p> Welcome Back !</p>
}

function GuestGreeting(props) {
    return <p> Please, sign in</p>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('login-control')
)

// Hide/Show Warning Banner
function WarningBanner(props) {
    const warning = props.warning;
    if(!warning) {
        return null;
    }

    return (
        <button type="button" className="btn btn-warning">
            Warning
        </button>
    )
}

class WarningPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            showWarning: true
        }
    }

    handleClick() {
        this.setState( (previousState) => ({
                showWarning: !previousState.showWarning
            })
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.showWarning ? 'Hide': 'Show'}
                </button>
                <div>
                    <WarningBanner warning={this.state.showWarning} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <WarningPage />,
    document.getElementById('warning-page')
)

/**
 * Main Ideas about List and Keys
 */

// Transforming Arrays using Map
const numbers = [1, 2, 3, 4 , 5];
function transform(number) {
    return number*2;
}
const doubled = numbers.map(transform);
console.log(doubled);

// Transforming Arrays with Map && Arrow Functions
const numbers_arrow = [1, 2, 3, 4, 5];
const doubled_arrow = numbers_arrow.map((number) => (number*2));
console.log(doubled_arrow);

// Transforming Arrays with different styles 
const playerNames = ["Ronaldo", "Messi", "Torres"];
const playerList = playerNames.map((name, i) => (
        <li className="list-group-item" key={i}>{name}</li>
    )
)
ReactDOM.render(
    <ul className="list-group">
        {playerList}
    </ul>,
    document.getElementById('players-list')
)

// Rendering Map inside a component
class PlayerMap extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isClicked: false
        }
    }
    handleClick() {
        this.setState((previousState) => ({
                isClicked: !previousState.isClicked
            })
        );
    }
    render() {
        return (
            // Use a div if we want to use it properly
            <div>
                <button type="btn" className="btn btn-success" onClick={this.handleClick}>
                    {this.state.isClicked ? "Show" : "Hide"}
                </button>
                <ShowPlayersList isClicked={this.state.isClicked} />
            </div>
        )
    }
}

class ShowPlayersList extends React.Component {
    constructor(props) {
        super(props);
        this.players = ['Ronaldo', 'Messi', 'Torres'];
    }
    render() {
        const isClicked = this.props.isClicked;
        if(!isClicked) {
            return null;
        }
        return (
            <ul className="list-group">
                {   
                    // Use i as the last resort when we do not have a unique identifier
                    this.players.map((player, i) => (
                        <li className="list-group-item" key={i}>{player}</li>
                    ))
                }
            </ul>
        )
    }
}

ReactDOM.render(
    <PlayerMap />,
    document.getElementById('player-map')
)

class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            fullname: '',
            description: '',
            gender: '',
        };
        this.handleFullName = this.handleFullName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFullName(event) {
        this.setState({
            fullname: event.target.value,
        })
    }

    handleDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleGender(event) {
        this.setState({
            gender: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`Full Name: ${this.state.fullname}`);
        console.log(`Description: ${this.state.description}`);
        console.log(`Gender: ${this.state.gender}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>FullName</label>
                    <input type="text" value={this.state.fullname} onChange={this.handleFullName} className="form-control"/>
                    <select onChange={this.handleGender} className="form-control" value={this.state.gender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea value={this.state.description} onChange={this.handleDescription} className="form-control"/>
                    <input type="submit" value="Submit" className="form-control btn btn-success"/>
                </div>
            </form>
        )
    }
}

ReactDOM.render(
    <SimpleForm />,
    document.getElementById('simple-form')
)

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

                <BoilingVerdict celsius={parseFloat(celsius)} />

            </div>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

function toFahrenheit(celsius) {
    return (celsius * (9/5)) + 32;
}

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('calculator')
)