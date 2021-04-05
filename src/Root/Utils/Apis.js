async function get(url,token=false){
    try {
        return await fetch(url,{headers:{Authorization:token?token:null}}).then(res=>res.json());
    } catch (error) {
        console.log("Fetch Error : ",error);
    }
}

async function post(url,payload,token=false){
    try {
        return await fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: token?token:null,
            },
            body: JSON.stringify({
                ...payload
            })
        }).then(res=>{return res.json()}).then(data=>{return data});
    } catch (error) {
        console.log("Fetch Error : ",error);
    }
}

async function patch(url,payload,token=false){
    try {
        console.log("token in api ,",token)
        return await fetch(url,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                Authorization: token?token:null,
            },
            body: JSON.stringify({
                ...payload
            })
        }).then(res=>{return res.json()}).then(data=>{return data});
    } catch (error) {
        console.log("Fetch Error : ",error);
    }
}

async function Delete(url,payload,token=false){
    try {
        console.log("token in api ,",token)
        return await fetch(url,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                Authorization: token?token:null,
            },
            body: JSON.stringify({
                ...payload
            })
        }).then(res=>{return res.json()}).then(data=>{return data});
    } catch (error) {
        console.log("Fetch Error : ",error);
    }
}

export default {
    get,post,patch,Delete
}