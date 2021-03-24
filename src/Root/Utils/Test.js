import React from 'react'
function getCookie(name) {
    if (!document.cookie) {
      return null;
    }
  
    const xsrfCookies = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));
  
    if (xsrfCookies.length === 0) {
      return null;
    }
    return decodeURIComponent(xsrfCookies[0].split('=')[1]);
  }
function Test(props) {

    React.useEffect(()=>{
        const mydata = {
          "username":"a",
          "password":"d",
        }   
        const csrftoken = getCookie("csrftoken");
        console.log(csrftoken);
        fetch("http://127.0.0.1:5000/blogs",{
            method:"GET",
            headers:{
                // "Accept":"application/json",
                // "Content-Type":"application/json",
                // "X-CSRFToken":csrftoken
            },
            // body:JSON.stringify(mydata)
        })
        .then(res=>{return res.json()})
        .then(body=>console.log(body))
        .catch(e=>console.log(e))
    },[])

    return (
        <div>
            yo
        </div>
    )
}

export default Test
