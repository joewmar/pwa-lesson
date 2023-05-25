/*  Service workers are specialized JavaScript assets that act as proxies between web browsers and web servers. 
    They aim to improve reliability by providing offline access, as well as boost page performance.
*/
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error =>{
        console.log("SW Registration Failed!");
        console.log(error);
    });
}
else{
    console.log("ServiceWorker not support of your application");
}