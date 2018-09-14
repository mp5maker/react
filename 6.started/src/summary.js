import PropTypes from 'prop-types';

class Summary extends React.Component{
    render(){
        const {processor, motherboard, cost} = this.props.report;
        return (
            <div className="card">
                <div className="card-header">
                    <h3>
                        Processor: {processor}
                    </h3>
                </div>
                <div className="card-body">
                    <p className="lead">
                        Motherboard: {motherboard}
                    </p>
                </div>
                <div className="card-footer">
                    <small>
                        Price: {cost}
                    </small>
                </div>
            </div>
        )
    }
}

Summary.propTypes = {
    report: (value, key) => {
        if(typeof value[key].processor != 'string'){
            return new Error("Processor needs to be a string")
        }
        if(typeof value[key].motherboard != 'string'){
            return new Error("Motherboard needs to be a string");
        }
        if(typeof value[key].cost == 'number'){
            return (value[key].cost > 50) ? new Error("Cost cannot be greater than 50") : ""
        }else{
            return new Error("Cost cannot be a string");
        }
    },
    additional: PropTypes.bool.isRequired,
}

class Computer extends React.Component{
    constructor(){
        super();
        this.computer = {
            processor: "Intel Processor",
            motherboard: "Giga Byte",
            cost: 47
        }
        this.additional = false;
    }
    render(){
        return (
            <Summary report={this.computer} additional={this.additional}/>
        )
    }
}

export default Computer;