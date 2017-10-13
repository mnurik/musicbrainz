import { Observable } from 'rxjs';
import { CURRENT_ALBUM_UPDATE } from './../constants';
import { allAlbumsLoad } from "./../actions";
import { fetchAllAlbums } from "./../utils/services";

export default (action$) => action$.ofType(CURRENT_ALBUM_UPDATE)
    .debounceTime(300)
    .flatMap((action) => Observable.fromPromise(
        fetchAllAlbums(action.payload)
            .then(res => allAlbumsLoad(res))
    ));