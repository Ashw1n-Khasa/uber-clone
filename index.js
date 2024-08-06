
function open_menu(){
    let temp=document.getElementById("open")
    temp.style.display='none';

    document.getElementById("close").style.display='inline-block';
    document.getElementById("hidden-menu").style.display='flex';
    // console.log("hi")
}


function close_menu(){
    let temp=document.getElementById("close")
    temp.style.display='none';

    document.getElementById("open").style.display='inline-block';
    document.getElementById("hidden-menu").style.display='none';
    
    // console.log("hi")
}
