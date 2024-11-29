$(function(){
    
    function popup(src_title){
        layx.open({
            id: "popup_id",
            content: {
                type: 'html',
                value: document.getElementById("popup-Webpage")
            },
            toolBar: {
                titleBar: {
                    title: src_title
                }
            },
            offset: "rightBottom"
        });
    }

    function whole(whole_id, src_title, src_id){
        var sj = Math.floor(Math.random()*6);
        var position = new Array("leftTop","leftBottom","bottomCenter","topCenter","rightTop","rightBottom")

        layx.open({
            id: whole_id,
            content: {
                type: 'html',
                value: document.getElementById(src_id)
            },
            toolBar: {
                titleBar: {
                    title: src_title
                }
            },
            offset: position[sj]
        });
    }

    function google_tips() {
        layx.notice({
            title: '警告',
            message: '请确定您的网络可以连接谷歌'
        });
    }
    $("#search_div").click(function(){
        if($(".search_xiang").is(":hidden")){
            $(".search_xiang").fadeIn();
        }else{
            $(".search_xiang").fadeOut();
        }
        $("#search_div").find("i").toggleClass("zhuan");
    })
    $(".search_xiang li").click(function(){
        $(".search_xiang").hide();
        $("#search_div li").html($(this).html())
    })
    function tiaozhuan(ss_nr){
        if($("#search_xx input").is(':checked')){
            var src = $("#search_div").find("img").attr("m-src");
            src+=ss_nr;
            $("#popup-Webpage").attr("src",src);
            popup($("#search_div").find("p").text());
        }else{
            var src = $("#search_div").find("img").attr("dn-src");
            src+=ss_nr;
            $("#popup-Webpage").attr("src",src);
            popup($("#search_div").find("p").text());
        }
    }
    function tiaozhuans(ss_nr){
        google_tips();
        $(".search_xiang li img").each(function(){
            if($(this).hasClass("whole")){
                return true;
            }
            var jing = "#"
            jing+=$(this).attr("class");
            if($("#search_xx input").is(':checked')){
                var src = $(this).attr("m-src");
                src+=ss_nr;
                $(jing).attr("src",src);
                whole($(this).attr("class"),$(this).next().text(),$(this).attr("class"));
            }else{
                var src = $(this).attr("m-src");
                src+=ss_nr;
                $(jing).attr("src",src);
                whole($(this).attr("class"),$(this).next().text(),$(this).attr("class"));
            }
        })
    }

    $("#search_button").click(function(){
        if($("#search_div").find("img").hasClass("whole")){
            tiaozhuans($("#search_content").val());
        }else if($("#search_div").find("img").hasClass("baidu")){
            tiaozhuan($("#search_content").val());
        }else if($("#search_div").find("img").hasClass("bing")){
            tiaozhuan($("#search_content").val());
        }else if($("#search_div").find("img").hasClass("so")){
            tiaozhuan($("#search_content").val());
        }else if($("#search_div").find("img").hasClass("sm")){
            tiaozhuan($("#search_content").val());
        }else if($("#search_div").find("img").hasClass("google")){
            google_tips();
            tiaozhuan($("#search_content").val());
        }
    })
    $("#search_content").keydown(function(event){
　　　　if(event.keyCode == 13){
    　　　　　if(document.all) {
                document.getElementById("search_button").click();
            }
            else {
                var e = document.createEvent("MouseEvents");
                e.initEvent("click", true, true);
                document.getElementById("search_button").dispatchEvent(e);
            }
　　　　}
　　});
})