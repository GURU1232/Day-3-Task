var theRequest = new XMLHttpRequest() // rest countries url

theReqUrl = 'https://restcountries.com/v3.1/all';

theRequest.open('GET',theReqUrl) // getting the request
theRequest.send()
theRequest.onload = function(){
    var ContrDat = JSON.parse(theRequest.response);
    dataToDisplay = [];
    for(let i=0; i< ContrDat.length;i++){
        dataToDisplay[i] = [ContrDat[i].name,ContrDat[i].region,ContrDat[i].subregion, ContrDat[i].population];
    }
    console.log("Name------Region------Subregion------Population")
    console.log(dataToDisplay)
}