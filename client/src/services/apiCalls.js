import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import axios from "axios";


// create api instance Axios
const apiInstance = axios.create({
    baseURL: "https://livepeer.com/api",
});

const apiKey = process.env.REACT_APP_API_KEY;

// Create stream
export const createStream = async (title) => {
    return await apiInstance.post("/stream", {
         name: title,
         record : true,
         profiles: [
 
             {
                 name: "720p",
                 bitrate: 2000000,
                 fps: 30,
                 width: 1280,
                 height: 720,
             },
             {
                 name: "480p",
                 bitrate: 1000000,
                 fps: 30,
                 width: 854,
                 height: 480,
             },
             {
                 name: "360p",
                 bitrate: 500000,
                 fps: 30,
                 width: 640,
                 height: 360,
             },
         ],
     }, {
         headers: {
            "content-type": "application/json",
             authorization: `Bearer ${apiKey}`,

 
         },
     });
 };
 // Get stream response
 export const getStreamStatus = async (streamId) => {
     return await apiInstance.get(`/stream/${streamId}`, {
         headers: {
             "content-type": "application/json",
             authorization: `Bearer ${apiKey}`,
         },
     });
 };




function makeStorageClient() {  
    return new Web3Storage({ token: process.env.REACT_APP_IPFS })
}

// To store images in Filecoin IPFS 


export async function storeIMGProfile(files) {
    

    const fileTypes = ["image/jpeg", "image/jpg", "image/png" , "image/gif"];
    const { size, type } = files;
    // Check file size to ensure it is less than 10MB.

    if (fileTypes.includes(type) && size / 1024 / 1024 < 10) {
        try {
            const client = makeStorageClient();
            const newFile = new File([files], files.name, {type: files.type});
            const cid = await client.put([newFile], {
                name: files.name,
            });
            const res = await client.get(cid);
            const imgURL = `https://${cid}.ipfs.dweb.link/${files.name}`;
            if(res.status === 200) {
                return imgURL
            }
        
        }catch {
            console.log("")
        }
        
    }

    }