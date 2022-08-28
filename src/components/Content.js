import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = ({theme}) => {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} />
                )}
            </Counter>
        </div>
    );
}

export default Content;