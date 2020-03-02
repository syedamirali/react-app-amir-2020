const add_movies=(
    {
    id=0,
    name='',
    release_date='',
    language='',
    writer='',
    director='',
    imdb_rating='',
    genre=''}={})=>(
    {   
        type:'ADD_MOVIES',
        movie:{id:id,
        name:name,
        release_date:release_date,
        language:language,
        writer:writer,
        director:director,
        imdb_rating:imdb_rating,
        genre:genre}
    });

const remove_movies=({id=0}={})=>(
{
    type:'REMOVE_MOVIES',
    id:id
}
);

const edit_movies=({id=0 ,movie={}}={})=>({
    type:'EDIT_MOVIES',
    id:id,
    movie:movie
})

//Filters
const releaseFilter=({date=0}={})=>{
    return{
        type:'release_date',
        release_date:{release_date:date}
    }
};

const nameFilter=({name=''}={})=>{
    return {
        type:'name',
        name:{name:name}
    }
}

const genreFilter=({genre=''}={})=>{
    return {
        type:'genre',
        genre:{genre:genre}
    }
}

const imdb_rating=({imdb_rating=false}={})=>{
    return{
        type:'imdb',
        imdb_rating:{'imdb_rating':imdb_rating}
    }
}

const sortedList=(movies,filter)=>{
    return movies.filter((movie)=>{
        var date=typeof filter.release_date==='number'&&filter.release_date!=0?movie.release_date===filter.release_date:1;
        var name=filter.name!=''?movie.name.toLowerCase().includes(filter.name.toLowerCase()):1;
        var genre=filter.genre!=''?movie.genre.toLowerCase().includes(filter.genre.toLowerCase()):1;
        return date&&name&&genre;
     }).sort((a,b)=>{
        return filter.imdb_rating?1:-1
    });
};

export {add_movies,remove_movies,edit_movies,releaseFilter,nameFilter,genreFilter,imdb_rating,sortedList};