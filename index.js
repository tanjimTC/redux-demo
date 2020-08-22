const BUY_CAKE = "BUY_CAKE";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
}

// (PreviousState , action ) =>newState
const initialState = {
    numOfCake : 10
}

const reducer =(state = initialState , action) =>{
    switch (action.key) {
        case BUY_CAKE: return {
            ...state,
            numOfCake : state.numOfCake -1;
        }
        default: return state  
    }
}
