import FunctionB from './FunctionB';

const FunctionA = ({ x, y }) => {
    return (
        <div>
            <h2>Function A</h2>
            <FunctionB x={x} y={y} />
        </div>
    )
}

export default FunctionA;