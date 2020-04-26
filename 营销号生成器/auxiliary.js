function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
function onload() {
    auto_grow(document.getElementById("result"));
}
function generate() {
    subject = document.getElementById("subject").value;
    event = document.getElementById("event").value;
    event2 = document.getElementById("event2").value;
    if (subject.length == 0 || event.length == 0 || event2.length == 0)
        return;
    result =
        `　　欢迎来到小黑带你看世界,今天我们来看看${subject}${event}是怎么回事，到底结果是怎样的呢，想知道的话赶快跟小编一起来看看吧!\r \n  ${subject}${event}到底是到底怎么回事呢？${subject}相信大家都很熟悉，但是${subject}${event}是怎么回事呢，下面就让小编带大家一起了解吧。\r\n  其实之前就有一位外国小哥实验过${subject}${event}的事情,所以他最终得出的结果是${event2},我们也要学习外国小哥敢于实验的精神! \r \n  大家可能会很惊讶为什么${event2}呢？但事实就是这样，小编也感到非常惊讶。\r\n　　这就是关于${subject}${event}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！\r \n  by A black cat \r \n \r \n  注：纯属娱乐，请勿用于正规用途！`;
    document.getElementById("result").value = result;
    auto_grow(document.getElementById("result"));
}
// document.
// getElement
// by
// id
// document.
// getElement
// by
// id
// if elsa for循环
// 我的变量没定义
// 写个碰撞算法还要考虑
// 垃圾浏览器的
// 最高刷新率
// 芜湖

//手动狗头

