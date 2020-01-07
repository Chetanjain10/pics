import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID a7ba861988c2d5c11f36d434ff3203bce5138cc50fc4404c60253d5d507a46aa'
         }
});

