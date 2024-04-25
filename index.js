let url = "https://reqres.in/api/users";
let root = document.querySelector("#root");
let fetchUserButton = document.querySelector("#fetchUser");

fetchUserButton.addEventListener("click", function () {
    getData()
});

async function getData() {
  let res = await fetch(url);

  let data = await res.json();

  let finalData = data.data

  showData(finalData)
}

function showData(finalData){

    finalData.map((ele,i)=>{
        
        let container = document.createElement("div")
        container.id = "container"

        let img = document.createElement("img")
        img.src = ele.avatar
        img.id= "img"

        let firstName = document.createElement("h3")
        firstName.innerText = `First_Name : ${ele.first_name}`  

        let lastName = document.createElement("h3")
        lastName.innerText =  `Last_Name : ${ele.last_name}` 

        let Id = document.createElement("number")
        Id.innerText =`Id : ${ele.id}` 

        let email = document.createElement("email")
        email.innerHTML =`Email : ${ele.email}` 

        container.append(img,Id,firstName,lastName,email)
       
        root.append(container)
    })
}


