

const url = "https://restcountries.com/v3.1/all" // rest countries url

    const xhr = new XMLHttpRequest();
   

    xhr.open("GET",url);
    xhr.send();


  xhr.onload = function(){
    var ContrDat = JSON.parse(xhr.response);
    for(let i=0; i< ContrDat.length;i++){
        console.log(ContrDat[i].flag)

  }

  }
