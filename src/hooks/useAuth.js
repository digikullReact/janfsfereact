import React from 'react'

const useAuth = () => {
   


    return function (){

        // Some logic for authentication 
        const auth=localStorage.getItem("token");
        if(auth){
            return true;
        }

        return false;

    }

 
}

export default useAuth