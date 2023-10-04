const submitData = (name, email) => {
const formData = {
    userName:'felowfell',
    userEmail:'felowfell@gmial.com'
}
const collectData ={
    method:"POST",
    headers: {
        "content-Type":"application/json",
        Accept:"application/json"
    },
    body:JSON.stringify(formData)
};
fetch('http://localhost:3000/users', formData)
.then((response) =>response.json())
.then(json => {
    document.body.innerHTML =json["id"]
})
.catch(function (error) {
    alert("Bad things! Claire!");
    console.log(error.message);
  });
}
