export const services= async (method,data,path)=>{
   
        try {
          const response = await fetch(`https://cart-app-eta-eight.vercel.app/${path}`, {
            method:method,
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          console.log("response")
          return response.json()
        } catch (err) {
          console.info("err:", err);
        }
    
      
} 