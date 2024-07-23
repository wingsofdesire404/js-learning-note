console.log("START");
setTimeout(() => console.log("This is asyn"), 5000);
console.log("END");

async function loadFile(){
    let fileLoaded = false;

    if (fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }
}

loadFile().then(value => console.log(value))
          .catch(error => console.log(error));

function loadFile(){
    let fileLoaded = false;
    if (fileLoaded){
        return Promise.resolve("File loaded");
    }
    else{
        return Promise.reject("File NOT loaded");
    }
}
        
loadFile().then(value => console.log(value))
          .catch(error => console.log(error));