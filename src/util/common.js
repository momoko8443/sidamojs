function isJson(str){
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function isIE(){
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
		return true;
	} 
	return false;
}
export  {
    isJson,
    isIE
} 