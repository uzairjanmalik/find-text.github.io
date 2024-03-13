function search(){
    alert("find the words from the paragraph that is shown on the top of your screen!");
    const txt=prompt("start searching").toLowerCase();
    let a=document.getElementById("text").innerText.toLowerCase();
    var result=a.includes(txt);
    if(result==true){
        alert("TEXT FOUND!");
    }else{
        alert("TEXT NOT FOUND!");
    }
}