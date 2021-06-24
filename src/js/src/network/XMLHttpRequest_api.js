function test_XMLHttpRequest() {
    const url = 'https://yingvickycao.github.io/api/hobbies.json';
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        data.forEach(element => {
            console.log(element.name + " -- ");
        });
    }
    request.send();
}