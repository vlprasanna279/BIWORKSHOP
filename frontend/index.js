const users = [
    {
        name: "Jane Doe",
        gender: "Female",
        image: "./images/jane.png"
    },
    {
        name: "John Doe",
        gender: "Male",
        image: "./images/john.png"
    }
];

let curUserId = 0;

function toggle(){

    if(curUserId === 0){
        curUserId = 1;
    }
    else{
        curUserId = 0;
    }

    document.getElementById("img").src = users[curUserId].image;
    document.getElementById("card-name").innerText = users[curUserId].name;
    document.getElementById("card-gender").innerText = users[curUserId].gender;
}

function getRandomUser(){

    fetch("https://randomuser.me/api/")
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        document.getElementById("img").src =
        data.results[0].picture.large;

        document.getElementById("card-name").innerText =
        data.results[0].name.first + " " + data.results[0].name.last;

        document.getElementById("card-gender").innerText =
        data.results[0].gender;
    });
}