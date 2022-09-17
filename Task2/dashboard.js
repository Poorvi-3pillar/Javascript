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

const root=document.getElementById('root');
// const list=document.createDocumentFragment();
const url='https://reqres.in/api/users';
let users=new Array();

//getting the users GET
fetch(url)
    .then(res=>res.json())
    .then(data=>{
        let persons=data;
        // console.log(persons.data)
        persons.data.map((values)=>{
            
            // let ul=document.createElement('ul');
            // let li=document.createElement('li');
            // let name=document.createElement('h2');
            // let email=document.createElement('span');


            // name.innerHTML=`${values.first_name}`;
            // email.innerHTML=`${values.email}`;

            // li.appendChild(name);
            // li.appendChild(email);
            // // list.appendChild(li);
            // // cards.innerHTML=list;
            // ul.appendChild(li);
            // cards.appendChild(ul);
                
            users.push({
                "name":values.first_name,
                "email":values.email,
                "img":values.avatar
            })
        });
        const card=document.createElement('div');
        let display=users.map((ele)=>{
           // console.log(ele.name);
            return card.innerHTML=`<div class="card ">
                <img class="card-img-top" src="${ele.img}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${ele.name}</h5>
                  <h5 class="card-title">${ele.email}</h5>
                </div>
              </div>`
        })
        root.innerHTML=display;

    }).catch((error)=>{
        console.log(error);
    });
   

    // console.log(users);

    
    // console.log(cards);
    //ul.appendChild(list);


//to logout and goto login page
function Logout() {
    window.localStorage.clear();
    window.location.reload(true)
    window.location.replace("index.html")
}


//function to go to create new user form
function createPost(){
    window.location.href='createPost.html'
}

function create(){
    const name=document.getElementById('name').value
    const job=document.getElementById('job').value
    console.log(name);
    console.log(job);
    fetch(url,{
        method:"POST",
        body:JSON.stringify({
            name:name,
            job:job
        }),
        headers: {"Content-type":"application/json;charset=utf-8"}
    })
    .then(res=>res.json())
    .then(()=>{
            users.push({
                "name":name,
                "job":job
            })
            console.log(users);
            users.map(ele=>{
                console.log(ele);
            })
        })
        // console.log(data)
    .catch(err=>console.log(err.message));
    window.location.href="dashboard.html";
    
}
console.log(users);