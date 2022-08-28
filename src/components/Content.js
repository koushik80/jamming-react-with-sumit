import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = ({theme}) => {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) => {
                    return <Consumer>{(value) =>
                        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} />}</Consumer>
                }}
            </Counter>
        </div>
    );
}

export default Content;