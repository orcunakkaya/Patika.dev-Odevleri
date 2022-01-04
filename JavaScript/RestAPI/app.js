import axios from "axios";

async function getData (id){
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.data);
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`).then(res => res.data);
    data.post = posts
    console.log(data);

}

export default  getData;