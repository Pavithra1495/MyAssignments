//Decides which browser to launch using if-else state
let browserName="chrome"
if(browserName==="chrome"){
    console.log("Launching Chrome browser...")
}else if(browserName==="Edge"){
    console.log("Launching Edge browser...")
}else if(browserName==="firefox"){
    console.log("Launching firefox browser...")
}else{
    console.log("Launching default browser...")
}

//Choose which set of tests to run using a switch statement.
let testType="regression"
 switch (testType) {
    case "smoke":
        console.log("Running Smoke Tests...")
        break
     case "sanity":
        console.log("Running sanity Tests...")
        break
     case "regression":
        console.log("Running regression Tests...")
        break
     default:
        console.log("Running Default Smoke Tests...");
        break;
}




