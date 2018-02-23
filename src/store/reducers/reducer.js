const initial = {
    Games:"",
    loading:"false",
    CurrentIndex:10,
    error:""
   
};

const reducer = (state = initial, action) => {
    switch (action.type) {
       
			case "GET_DATA":
            return {...state,Games:action.payload,error:""}
            case "LOADING":
            return {...state,loading:action.payload}
            case "LOADING_DONE":
            return {...state,loading:action.payload}
            case "LOAD_DATA":
            var next=state.CurrentIndex+10;
            if(next<=100){
                return {...state,CurrentIndex:next}
            }
            case "ERROR":
            return {...state,error:"true"}
            
        default:
            return state;
    }

}

export default reducer;