export const ADDING_FEATURE = 'ADDING_FEATURE';
export const ADDED_FEATURE = 'ADDED_FEATURE';
export const ADD_FAILED = 'ADD_FAILED';

export const REMOVING_FEATURE = 'REMOVING_FEATURE';
export const REMOVED_FEATURE = 'REMOVED_FEATURE';
export const REMOVE_FAILED = 'REMOVE_FAILED';

export const ADDING_TO_TOTAL = 'ADDING_TO_TOTAL';
export const ADDED_TO_TOTAL = 'ADDED_TO_TOTAL'; 
export const ADD_TO_TOTAL_FAILED = 'ADD_TO_TOTAL_FAILED';

export const REMOVING_FROM_TOTAL = 'REMOVING_FROM_TOTAL';
export const REMOVED_FROM_TOTAL = 'REMOVED_FROM_TOTAL';
export const REMOVE_FROM_TOTAL_FAILED = 'REMOVE_FROM_TOTAL_FAILED';



export const addFeature = (newFeature) => dispatch => {
    console.log(newFeature)

    dispatch({type: ADDING_FEATURE})
    dispatch({type: ADDED_FEATURE, payload: newFeature})


}

export const removeFeature = feature => dispatch => {

    dispatch({type: REMOVING_FEATURE})
    dispatch({type: REMOVED_FEATURE, payload: feature})
}

