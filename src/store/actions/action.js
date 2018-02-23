
import History from '../../History';
var $ = require('jquery');






export function Get_Games(start, end) {
    var x = new Date(start);
    var y = new Date(end);
    console.log(y > x);
    if (y > x) {
        return dispatch => {
            dispatch({ type: "LOADING", payload: "true" })

            $.getJSON("https://www.giantbomb.com/api/games/?api_key=3ea6948ba9802e777137ce9b3296835650a6a480" +
                "&format=jsonp&json_callback=?&limit=100&filter=original_release_date:" + start + "|" + end + "&field_list=name,image,original_release_date,site_detail_url,deck,description", data => {
                    console.log(data)
                    dispatch({ type: "GET_DATA", payload: data.results })

                })

            setTimeout(() => {
                dispatch({ type: "LOADING_DONE", payload: "false" })
            }, 5500);

        }

    }
    else {
        return { type: "ERROR" }
    }

}

function loading() {
    return { type: "LOADING", payload: "true" }

}
export function loadMore() {
    return { type: "LOAD_DATA" }
}