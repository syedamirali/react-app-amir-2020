import React from 'react';
import ReactDOM from 'react-dom';
import ConfigStore from './components/configStore';
import Template from './components/main';
import uuid from 'react-uuid';
import {add_movies,sortedList,imdb_rating} from './components/action';
import {Provider} from 'react-redux';
import MovieApp from './components/movieApp';

ConfigStore.subscribe(()=>{
    console.log(sortedList(ConfigStore.getState().movies,ConfigStore.getState().filters));
});

var ghajini={id:uuid(),name:'Ghajini',release_date:98989,language:'Hindi',writer:'Ron Rogers',
            director:'A. R. Murugadoss',imdb_rating:7.3,genre:'Action Romance'};

var casinoRoyale={id:uuid(),name:'Casino Royale',release_date:12123,language:'English',writer:'Paul Haggis',
            director:'Martin Campbell',imdb_rating:8.0,genre:'Action'};

ConfigStore.dispatch(add_movies(ghajini));
ConfigStore.dispatch(add_movies(casinoRoyale));
ConfigStore.dispatch(imdb_rating({imdb_rating:true}))

const App=()=>(
    <Provider store={ConfigStore}>
        <MovieApp />
    </Provider>
)

ReactDOM.render(<App />,document.getElementById('root'));