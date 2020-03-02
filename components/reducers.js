//Movies
const movies=(state=[],action)=>{
    switch(action.type){
        case 'ADD_MOVIES':
            return [...state,action.movie]
        case 'REMOVE_MOVIES':
        return state.filter((movie)=>{
                return movie.id!=action.id
            })
        case 'EDIT_MOVIES':
            return state.map((movie)=>{
                if(action.id==movie.id){
                   
                   return {...movie,...action.movie}
                }
                else{
                    return movie;
                }
            })
        default:
            return state
    }
};

const filtersState={release_date:0,imdb_rating:false,name:'',genre:''};
const filters=(state=filtersState,action)=>{
    switch(action.type){
        case 'release_date':
            return {...state,...action.release_date}
        case 'name':
            return {...state,...action.name}
        case 'genre':
            return {...state,...action.genre}
        case 'imdb':
            return {...state,...action.imdb_rating}
        default:
            return state
    }
};

export {movies,filters};