/**
 * Created by Administrator on 16-11-8.
 */
function getDomsByClass(parent,className)//兼容性通过class_name获取Dom
{
    var Ele = getDom(parent);
    var Doms = Ele.getElementsByTagName('*')
    var myArr =[];
    for(var i=0;i<Doms.length;i++)
    {
        if(Doms[i].className==className)
        {
            myArr[myArr.length]=Doms[i];
        }
    }
    return myArr;
}
function addEvent(ele,event,callback)//监听事件
{
    if(ele.addEventListener)
    {ele.addEventListener(event,callback,false);
    stopBubble(ele);
    }else if(el.attachEvent)
    {
        ele.attachEvent('on'+event,callback);
    stopBubble(ele);
    }
}
function stopBubble(e)//�¼�ð��
{
    window.event? window.event.cancelBubble = true : e.stopPropagation();
}
function stopDefault(e)//��ֹ�¼�Ĭ����Ϊ
{
    window.event? window.event.returnValue = false : e.preventDefault();
}
function ajaxGet(url,callback)//ajax原生兼容
{
    var xele = null;
    if(window.XMLHttpRequest)
    {xele = new window.XMLHttpRequest();}
    else if(window.ActiveXObject)
    {
        xele = new window.ActiveXObject("Msxml2.XMLHTTP");
    }
    xele.onreadystatechange = function()
    {
        if(xele.readyState == 4&& xele.status ==200)
        {
            callback (JSON.parse(xele.responseText));
        }
        xele.open('get',url,false);
        xele.send(null);
    }
}
function get0(val)//进行补零操作
{
   if(val<10)
   val="0"+val;
    return val;
}
function getPosition(node)//获取node结点到屏幕的top和left
{
    var left = node.offsetLeft;
    var top = node.offsetTop;
    var parent = node.offsetParent;
    while(parent != null){
        left += parent.offsetLeft;
        top += parent.offsetTop;
        parent=parent.offsetParent;
    }
    return {"left":left,"top":top};
}
function A_index(arr,che)//查找数组中是否含某个元素
{
    arr.join().indexOf(che)<0 ;
}
function arr_sort(arr)//进行数组排序
{
    arr.sort(function(a,b){return a - b;});
}
function arr_quchong(arr)//arr去重
{
    var set = new Set(arr);
    var newArr = Array.from(set);
    return newArr;
}
function ObjExtend(obj)//对象拷贝
{
    var newObj = {};
    for(var p in obj)
    {
        newObj[p] = obj[p];
        if(typeof obj[p] === 'object')
        {
            newObj[p] = arguments.callee(obj[p]);
        }
    }
    return newObj;
    //var str = JSON.stringify(obj);//序列化
    //var obj2 = JSON.parse(str);//反序列化
}
/*cookie��*/
function setCookie (key,value,day)//js原生cookie设置
{
    var str = key+"="+value+';';
    if(day){
        var date = new Date();
        date.setDate(date.getDate()+day);
        str += 'expires'+date;
    }
    document.cookie = str;
}
function getCookie(key)
{   var str = document.cookie;
    var arr = str.split('; ');
    for(var i =0;i<arr.length;i++)
    {
        var arr2 = arr[i].split('=');
        if(arr2[0] == key)
            return arr2[1];
    }
    return 'error'
}
function removeCookie(key)
{
    setCookie(key,'',-1);
}
/*元素拖拽*/
function drag(elem)
{

     elem.onmousedown = function(e){
        e = e || window.event;
        var disX = e.clientX - this.offsetLeft;
        var disY = e.clientY - this.offsetTop;


        document.onmousemove = function(e){
            e = e || window.event;

            elem.left = e.clientX - disX;
            elem.top = e.clientY - disY;

            elem.style.left = elem.left+"px";
            elem.style.top = elem.top + "px";
            return false;
        };
        elem.onmouseup = function(){
            document.onmousemove = null;//取消事件
        };
    };
}
/*碰撞检测*/
function check_crack(ele1,ele2){
    var e1e1Left = ele1.offsetLeft;
    var ele1Top = ele1.offsetTop;
    var ele1Right = ele1.offsetLeft+ ele1.offsetWidth;
    var ele1Bottom = ele1.offsetTop + ele1.offsetHeight;
    var e1e2Left = ele2.offsetLeft;
    var ele2Top = ele2.offsetTop;
    var ele2Right = ele2.offsetLeft+ ele2.offsetWidth;
    var ele2Bottom = ele2.offsetTop + ele2.offsetHeight;
    if(ele1Right<e1e2Left||ele1Bottom<ele2Top||e1e1Left<ele2Right||ele1Top<ele2Bottom)
        return true;
    else return false;
}
/*getDomByTagName*/
function getByTag(parent, tagName){
    var arr = [];
    console.log(parent);
    for(var index in parent){
        if(parent[index].tagName === tagName){
            arr.push(parent[index]);
        }
    }
    return arr;
}
/*getDomById*/
function getById(id){
    return document.getElementById(id);
}
/*获取当前项目的根目录路径*/
function baseUrl(){
    return (window.location.protocol+"//"+window.location.host);
}