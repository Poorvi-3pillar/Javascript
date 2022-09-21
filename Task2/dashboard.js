// fetch('https://reqres.in/api/users')
// .then(res=>res.json())
// .then(data=>console.log(data))

// let email=localStorage.getItem('email')?localStorage.getItem('email'):''
// console.log(email);
// if(email=='')
// {
//     alert('u need to login first');
//     window.location.href="index.html";
// }

const root = document.getElementById("root");
const form = document.getElementById("Form");
const post = document.getElementById("btn");
// const list=document.createDocumentFragment();
const url = "https://reqres.in/api/users";
let users = [];
console.log(users);
async function fetchApi() {
  try {
    const res = await fetch(url);
    //console.log(res);
    const data = await res.json();
    //console.log(data);
    let persons = data;
    //console.log(data);
    // console.log(persons.data)
    persons.data.map(({first_name,email,avatar}) => {
      users.push({
        first_name,
        email,
        avatar,
      });
    });
    users.map((ele) => {
      displayFn(ele);
    });
  } catch (err) {
    console.log(err);
  }
}
fetchApi();

// diplaying the data
const displayFn = (ele) => {
  //console.log(ele);
  const card = document.createElement("div");
  card.innerHTML = `<div class="container ">
            <div class="row">
            <div class="col-sm-6">
                    <img class="card-img-top" src="${ele.avatar}" altSrc="img">
                    <div class="card-body">
                    <h5 class="card-title">${ele.first_name}</h5>
                    <h5 class="card-title">${ele.email}</h5>
                    </div>
                </div>
            </div>
          </div>`;
  root.appendChild(card);
};

//funtion to logout
// function Logout() {
//   // window.localStorage.clear();
//   window.location.reload(true);
//   window.location.replace("index.html");
// }
let name=localStorage.getItem('name')?localStorage.getItem('name'):''
console.log(name);
if(name=='')
{
  alert('U need to login first');
  window.location.href="index.html";
}
function Logout()
{
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  window.location.href="index.html";
}
//function to go to create new user form
function createPost() {
  console.log(form);
  //window.location.href='createPost.html'
  if (form.style.display == "none") {
    form.style.display = "block";
    post.style.display = "none";
  }
  
}

//function to post the data
async function create() {
  try {
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    // const img = new Image();
    // img.src = "./png.png";
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          job: job,
        }),
        headers: { "Content-type": "application/json;charset=utf-8" },
      });
      const data = await res.json();
    //   console.log(data);
    if (name && job) {
      const dataToDisplay = {
        img:"https://reqres.in/img/faces/3-image.jpg",
        name:data.name,
        email:data.job,
      };
      users.push(dataToDisplay);
      displayFn(dataToDisplay);
    } 
    else {
      alert("please add the data");
    }

    // displayFn(dataToDisplay);
  } catch (err) {
    console.log(err);
  }
}
create();
// setTimeout(() => {
//     alert('Time out ')
//     form.style.display = "none";
//     Post.style.display = "block";
    
// },1000);


//using Promises
//getting the users GET
// fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//         let persons=data;
//         console.log(data);
//         // console.log(persons.data)
//         persons.data.map((values)=>{
            
//             // let ul=document.createElement('ul');
//             // let li=document.createElement('li');
//             // let name=document.createElement('h2');
//             // let email=document.createElement('span');


//             // name.innerHTML=`${values.first_name}`;
//             // email.innerHTML=`${values.email}`;

//             // li.appendChild(name);
//             // li.appendChild(email);
//             // // list.appendChild(li);
//             // // cards.innerHTML=list;
//             // ul.appendChild(li);
//             // cards.appendChild(ul);
//             users.push({
//                 "name":values.first_name,
//                 "email":values.email,
//                 "img":values.avatar
//             })
//         });
//         users.map((ele)=>{
//             displayFn(ele);
//         })
//     }).catch((error)=>{
//         console.log(error);
//     });
   
    // const displayFn = (ele) =>{
    //     console.log(ele);
    //     const card=document.createElement('div');
    //      card.innerHTML=`<div class="card ">
    //             <img class="card-img-top" src="${ele.img}" alt="Card image cap">
    //             <div class="card-body">
    //               <h5 class="card-title">${ele.name}</h5>
    //               <h5 class="card-title">${ele.email}</h5>
    //             </div>
    //           </div>`
    //     root.appendChild(card);
    // }

    // console.log(users);

    
    // console.log(cards);
    //ul.appendChild(list);


// //to logout and goto login page
// function Logout() {
//    // window.localStorage.clear();
//     window.location.reload(true)
//     window.location.replace("index.html")
// }


// //function to go to create new user form
// function createPost(){

//     console.log(form);
//     //window.location.href='createPost.html'
//     if(form.style.display=="none"){
//         form.style.display="block"
//     }
//     Post.style.display="none";
// }

// function create(){
//     const name=document.getElementById('name').value
//     const job=document.getElementById('job').value
//     fetch(url,{
//         method:"POST",
//         body:JSON.stringify({
//             name:name,
//             job:job
//         }),
//         headers: {"Content-type":"application/json;charset=utf-8"}
//     })
//     .then(res=>res.json())
//     .then((data)=>{
//         console.log(data);
//         const dataToDisplay = {
//             "img":null,
//             "name":data.name,
//             "email":data.job,
//         }
        
//         // displayFn(dataToDisplay);
//             users.push(dataToDisplay)
//             displayFn(dataToDisplay)
//         })
//         // console.log(data)
//         .catch(err=>console.log(err.message));
        
    
// }
// console.log(users);



