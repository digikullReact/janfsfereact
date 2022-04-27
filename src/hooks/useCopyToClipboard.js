import React ,{useState} from 'react'
import copy from 'copy-to-clipboard';


const useCopyToClipboard = () => {
    const [isCopied,setIscopied]=useState(false);


     function makeCopy (text){
        if (typeof text==="string" || typeof text==="number"){
            setIscopied(true);
        
            copy(text.toString());

        }
        else{
      
            setIscopied(false);

            console.log("Cannot copy")
        }


    }
    return [isCopied,makeCopy];

}

export default useCopyToClipboard