// eslint-disable-next-line import/no-cycle
//import { counterContext } from '../App';

export default function ComponentA() {
    //const countContext = useContext(counterContext);

    return (
        <div>
            <p>Component A</p>
            <button type="button" onClick={() => dispatch('increment')}>
                Increment
            </button>
            <button type="button" onClick={() => dispatch('decrement')}>
                Decrement
            </button>
        </div>
    );
}

