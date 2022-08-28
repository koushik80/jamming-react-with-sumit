import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = () => {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(counter, incrementCount) => {
                    return <ThemeContext.Consumer>{({theme}) =>
                        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} />}</ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    );
}

export default Content;