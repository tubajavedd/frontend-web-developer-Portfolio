document.querySelector('.cross-icon').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.bar-icon').style.display = "inline"
    document.querySelector('.cross-icon').style.display = "none"
}else{
    document.querySelector('.bar-icon').style.display = "none"
     setTimeout(()=>{
        document.querySelector('.cross-icon').style.display = "inline"
     },300);
}
})