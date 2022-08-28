import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = () => {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default Content;