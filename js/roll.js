/**
 * Created by Administrator on 16-11-10.
 */
    var bigcont = getDom("roll");
    var cont1 =  getDom("roll_1");
    var cont2 = getDom("roll_2");
    var speed = 50;
    bigcont.scrollTop =0;
    cont2.innerHTML = cont1.innerHTML;
    var myScroll = setInterval("scrollUp()",speed);
    bigcont.onmouseover = function()
    {clearInterval(myScroll);}
    bigcont.onmouseout = function()
    {myScroll = setInterval("scrollUp()",speed);}
function scrollUp()
{   var bigcont = getDom("roll");
    var cont1 =getDom("roll_1");
    if(bigcont.scrollTop >=cont1.scrollHeight)
    {bigcont.scrollTop = 0;}
    else{bigcont.scrollTop++;}
}
function getDom(id)//ªÒ»°DOM
{   var Ele=document.getElementById(id);
    return Ele;
}