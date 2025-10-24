

let browser="Chrome"

function checkBrowserVersion(timeout,callback) {
  console.log("Waiting for 2 seconds...")
  setTimeout(() => {
        callback(browser); 
    }, 2000);
    
} 
function browserversion(browser){
    console.log("Browser name:"+browser)
    console.log("Browser version:141.0.7390.108")
}
checkBrowserVersion(2000,browserversion)
