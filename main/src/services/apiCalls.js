import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'


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