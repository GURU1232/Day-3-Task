

const url = "https://restcountries.com/v3.1/all" // rest countries url

    const xhr = new XMLHttpRequest();// getting the values on xml format
   

    xhr.open("GET",url); // opening the restcountry url
    xhr.send();


  xhr.onload = () =>{
    // getting all response from the url
    console.log(JSON.parse( xhr.response)); 


   // getting the object into string format 
    const obj1=JSON.parse(xhr.response)
    obj1.forEach(country =>{
      // displayed the flag 
      console.log(country.flags.png)
    })

    }
  
   

    



