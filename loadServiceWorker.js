if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./serviceWorker.js").then(
        reg => console.log("service worker registrado")
    ).catch(
        error => console.log(error)
    )
}