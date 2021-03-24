async function get(url){
    try {
        return await fetch(url).then(res=>res.json());
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

export default {
    get,post
}