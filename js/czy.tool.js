var czyTool = {
    //悬浮菜单按钮
    menuFlowBtn: {
        init: function (positionX,positionY,clickFun) {
            var menuFlowBtn = new Draggabilly('.menuFlowDiv', {
                containment: true
            });
            $(".menuFlowDiv").removeAttr("hidden");
            menuFlowBtn.setPosition(positionX, positionY);
            menuFlowBtn.on('staticClick', function (event, pointer) {
                clickFun(event, pointer);
            })
        }
    }
}