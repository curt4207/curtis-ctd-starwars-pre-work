import axios from "axios";

const getAllData = async (url) => {
    try {
        let res = await axios.get(url);
        let data = await res.data;
            if(data) {
            return data;
            }
            
    } catch (error) {
        console.log(`Error getAllData in ${url}`, error)
    }
};


export default getAllData;