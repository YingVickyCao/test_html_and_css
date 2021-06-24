// https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/

function test_fetch(){
    test_get();
    test_post();
    test_post_with_request();
}

function test_get() {
    // Default is GET
    const url = 'https://yingvickycao.github.io/api/movie.json';
    fetch(url)
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            console.log(data); // {id: "1", title: "Star Wars", releaseYear: "1977"}
        })
        .catch(function (error) {
            console.log(error);
        });
}

function test_post() {
    //  Post
    let data = {
        name: 'Sara'
    }
    let fetchData = {
        method: 'POST',
        body: data,
        headers: new Headers()
    }

    fetch(url, fetchData)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });

}

function test_post_with_request() {
    // Post. and custom Request

    let url = 'https://randomuser.me/api';

    let data = {
        name: 'Sara'
    }

    let reqeust = new Request(url, {
        method: 'POST',
        body: data,
        headers: new Headers()
    })

    fetch(reqeust)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });

}
