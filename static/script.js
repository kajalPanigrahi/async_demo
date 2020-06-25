console.log('Working with XHR');
function getCadets(){

//creating xhr object
let httpRequest = new XMLHttpRequest();
//opening the request
httpRequest.open('GET','http://localhost:3000/cadets');
//sending the requst
httpRequest.send();



httpRequest.onreadystatechange = ()=>{
    console.log(httpRequest.readyState)
    if(httpRequest.readyState===XMLHttpRequest.DONE){
        console.log(httpRequest.status)
        // setTimeout(()=>{
        //     console.log('waiting for response......')
        // },500)
        console.log(httpRequest.response);
        let cadetRecords = JSON.parse(httpRequest.response);
        console.log(cadetRecords);
        let cadetRecord = ''
        cadetRecords.forEach(cadet=>{
            cadetRecord += `<li>${cadet.name} || ${cadet.email}  :: <button onclick=edit(${cadet.id})>Edit</button> </li>`
        })
        let cadetDiv = document.getElementById('cadetList');
        cadetDiv.innerHTML=cadetRecord;
    }
}

//reading the response
console.log('Reading Response')
console.log(httpRequest.response);


console.log('Response Read')
}
getCadets();

addCadet();


function addCadet(){

    let cadetRecord = {
        
		"name":"surabhi",
		"email":"surabhi@gmail.com"
    }

    let httpRequest = new XMLHttpRequest();
    httpRequest.open('POST','http://localhost:3000/cadets')


    httpRequest.setRequestHeader('Content-Type','application/json');
    console.log(cadetRecord);
    httpRequest.send(JSON.stringify(cadetRecord))

    httpRequest.onreadystatechange = ()=>{
        if(httpRequest.readyState===4){
            console.log(httpRequest.status)
            console.log('Record Added')
            getCadets();
        }
    }
}





