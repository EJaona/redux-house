import {
     ADDING_FEATURE,
     ADDED_FEATURE,
     ADD_FAILED,
     REMOVING_FEATURE,
     REMOVED_FEATURE,
     REMOVE_FAILED,
     ADDING_TO_TOTAL,
     ADDED_TO_TOTAL,
     ADD_TO_TOTAL_FAILED,
     REMOVING_FROM_TOTAL,
     REMOVED_FROM_TOTAL,
     REMOVE_FROM_TOTAL_FAILED

} from '../actions/actions';




const initialState = {

    total: 330000,

    house:{
        price: 315000,
        bedrooms: 5,
        image: "https://previews.123rf.com/images/clairev/clairev1103/clairev110300155/9199593-small-family-house.jpg",
        additions: [
            {
                id:1,
                name: 'Swimming pool',
                price: 15000
            }
        ]
    },

    extraFeatures: [
        
          {
            id:2,
            name: 'Theater room',
            price: 10000
          },
          {
            id: 3,
            name: 'Pro grade kitchen',
            price: 12000
          },
          {
            id: 4,
            name: 'Better windows',
            price: 3700
          },
          {
            id: 5,
            name: 'Central air',
            price: 8000
          }
    ]

}



export const rootReducer = (state=initialState, action) => {
    switch(action.type){

        case  ADDED_FEATURE:
            return {
                ...state,
                total: state.total + action.payload.price,
                house: {
                    ...state.house,
                    additions: [
                        ...state.house.additions, action.payload
                    ]
                }
            }

        case REMOVED_FEATURE:
            return {
                ...state,
                total: state.total - action.payload.price,
                house: {
                    ...state.house,
                    additions: state.extraFeatures.filter(feature => feature.id !== action.payload.id)
                }
            }

        default:
            return state
    }
}