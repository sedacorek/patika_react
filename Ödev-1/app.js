import axios from "axios";

const getData = async (user_id) => {
    const {data:User} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id)
    const {data:Posts} = await axios("https://jsonplaceholder.typicode.com/posts/1"+user_id)
    
    return {User,Posts};
}

export default  getData;