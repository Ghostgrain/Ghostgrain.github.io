/**
 * Created by xiaochaochao on 2017/6/26.
 */
var $ = function(id){
    return document.getElementById(id);
}
var avatarContainer = $('avatarContainer')
var avatarMask = $('avatar-mask');
addEvent(avatarMask, "click",function(){
    var index = 0;
    for(;index < avatarContainer.childNodes.length; index++){
        if(avatarContainer.childNodes[index].tagName == "INPUT")
            avatarContainer.childNodes[index].click();
    }
});

function addEvent(ele, event, callback)//¼àÌýÊÂ¼þ
{
    if(ele.addEventListener)
    {ele.addEventListener(event,callback,false);
    }else if(el.attachEvent)
    {
        ele.attachEvent('on'+event,callback);
    }
}
function T(target){
    require(['../js/upload_avatar'],function(UploadAvatar){
        var uploadAvatar = new UploadAvatar();
        uploadAvatar.mkAvatar(target);

    });
}