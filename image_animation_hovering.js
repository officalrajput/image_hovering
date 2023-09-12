let elem=document.querySelectorAll(".element1");
elem.forEach(function(details)
{
details.addEventListener('mousemove',function(get){
    details.childNodes[3].style.left = get.x + "px"
    // details.childNodes[3].style.top =get.y + "px"

})
details.addEventListener('mouseenter',function(){
    details.childNodes[3].style.opacity = "1"
})
details.addEventListener('mouseleave',function(){
    details.childNodes[3].style.opacity = "0"
})

})
