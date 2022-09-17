
function create(){

    const url='https://reqres.in/api/users';
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
    .then(data=>{
        import('./dashboard.js').then((record)=>{
            users.push({
                "name":name,
                "job":job
            })
            console.log(users);
        })
        console.log(data)})
    .catch(err=>console.log(err.message));
    

}

 
 








 