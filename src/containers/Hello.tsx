import Hello from '../components/Hello/Hello';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import * as actions from '../actions';
import {StoreState} from '../types';

export function mapStateToProps({enthusiasmLevel, languageName}: StoreState): object {
    return {
        name: languageName,
        enthusiasmLevel
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>): object {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
