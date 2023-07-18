var topic = 'JavaScript';

if (topic){
    let topic = "React"; // perserve the global var
    console.log("block", topic); // React
} 

console.log('global', topic);
