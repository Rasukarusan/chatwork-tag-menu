setTimeout(main, 1000);

function main() {
    var tagBtn = createElement()
    $('#_chatSendTool').after(tagBtn)

    $('#code-tag').click(function(){
        var current_text = $("#_chatText").val()
        $("#_chatText").val(current_text + "\n[code]\n\n[/code]")
        $("#_chatText").focus()
    });

    $('#info-tag').click(function(){
        var current_text = $("#_chatText").val()
        $("#_chatText").val(current_text + "\n[info][title]\n[/title]\n[/info]")
        $("#_chatText").focus()
    });

    $('#todo-tag').click(function(){
        var current_text = $("#_chatText").val()
        $("#_chatText").val("【やりたいこと】\n")
        $("#_chatText").focus()
    });

    function createElement() {
        var element = '<div class="dropup">'
            element += '<button class="dropbtn">🐾</button>'
            element += '<div class="dropup-content">'
            element += '<a id="code-tag">Code</a>'
            element += '<a id="info-tag">Info</a>'
            element += '<a id="todo-tag">Todo</a>'
            element += '</div></div>'
            return element
    }
}
