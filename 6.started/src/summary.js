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
    report: PropTypes.object.isRequired,
    additional: PropTypes.bool.isRequired,
}


class Computer extends React.Component{
    constructor(){
        super();
        this.computer = {
            processor: "Intel Processor",
            motherboard: "Giga Byte",
            cost: 50
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