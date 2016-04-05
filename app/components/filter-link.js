import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/visibility-filter';
import Link from './link';

const mapStateToProps = (
    state,
    ownProps 
) => {
    return {
        active:state.visibilityFilter === ownProps.filter
    };
};

const mapDispatchToProps = (
    dispatch,
    ownProps 
) => {
    return {
        onClick:() => {
            dispatch(setVisibilityFilter({filter:ownProps.filter}));
        }
    };
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
