
function saveData(){
    //get name,email and password
    let name=document.getElementById("name").value;
    let email=document.querySelector("#email").value;
    let psw=document.querySelector("#psw").value;
    //creates an array
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    //checks if the email already exists
    //how to use destructuring? 
    if(user_records.some((v)=>{return v.email==email}))
    {
            alert('duplicate entry')
    }else{
        user_records.push({
            "email":email,
            "psw":psw,
            "name":name
        })
        localStorage.setItem("users",JSON.stringify(user_records));
    }
    window.location.href="dashboard.html"
}



