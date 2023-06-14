
list = document.getElementById('repos-list')
message = document.getElementById('message')

async function getRepos() {

    console.log('test')
    token = document.getElementById("password").value

    fetch('https://api.github.com/user/repos', {
        headers: {
            'Authorization': "Bearer " + token
        }
    })
        .then(res => {

            if (res.ok) {
                message.innerHTML = "Hat geklappt :)";
                return res;
            }
            else {
                throw ("Skill issue");
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(element => {
                listElement = document.createElement("li");
                elementName = document.createTextNode(element.name);
                listElement.appendChild(elementName);
                list.appendChild(listElement);
            })
        })
        .catch(err => message.innerHTML = "Fehler: " + err + " :(");
}

function showError(msg) {
    message.innerHtml = msg;
}