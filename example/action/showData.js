export const DATA = 'DATA'

export function getJson(source,url) {
    return {
        type : 'DATA',
        source,
        url
    }
}

export function fetchData(url) {
    return function(dispatch) {
        // console.log('url ',url)
        return fetch(url).then(function(res){
            res.json().then(function(resp){
                let arr = [],
                    _data = resp.data.children;
                console.log(_data);
                for(var i=0;i<_data.length;i++){
                    // console.log(_data[i].data);
                    arr.push({title:_data[i].data.title,url:_data[i].data.url})
                }
                // console.log(arr);
                dispatch(getJson(arr,url))
            });
        })
    }
}
