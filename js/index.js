$(function(){
	$("#pxBtn").click(function(){
	  var v = $.trim($("#input_px").val());
	  v = v.replace(/([0-9\.]+)px/gi, function(s0, s1){
	    return (Number(s1) / 30) + "rem";
	  });
	  $("#output_rm").val(v);
	  
	});
	$.ajax({
		type : "GET",
		url: "data.json",
		xhrFields : {
                  withCredentials : true
            },
		dataType: 'json',
		success: function(json){
			if(json != ''){
				var navData = json				
				var navHtml = template("tpl-nav",navData);
				var conList = template("tpl-content",navData);
				document.getElementById('category').innerHTML = navHtml;
				document.getElementById('mainContent').innerHTML = conList;
			}

			$(window).scroll(function(){
                var scrollTop = $(document).scrollTop();
                var oItem = $("#mainContents").find(".fe");
                var oName = "";
                $.each(oItem,function(){
                    var oneItem = $(this);
                    var offsetTop = oneItem.offset().top;
                    if(offsetTop-scrollTop < 200){
                        oName = oneItem.attr("id");
                    }
                });
                if(oName != $(".current").attr("href")){
                    $(".current").removeClass("current");
                    $(".ul_menu").find("[flag="+ oName +"]").addClass("active");
                }
            }); 
            var liList= $(".ul_menu li")
            console.log("liList.length",liList.length);

            $(".ul_menu a").each(function(){
			    $(this).click(function(){
			    	var oA = $(this);
                	var index = oA.parent().index();
                	var h = $(".fe").eq(index).offset().top + 'px';
					var imgid = $(this).attr("flag");
					if(oA.attr("class") != "current"){
						$('html,body').animate({scrollTop:h},300);
					}
					if(imgid){
						$(".ul_menu a").css("color","#6b7386");
						$(this).css("color","#fff");

					}else{
						$(this).css("color","#6b7386");
					}
				console.log(imgid );
			    })
		    });         



		}

	});
	$('.to-top').toTop()
	
	// URL 编码
	// function enURIComponent () {

	// }
	// $("#pxBtn").click(function(){
	//  	var url_a = $.trim($("#input_url").val());
	//   	v = v.replace(/([0-9\.]+)px/gi, function(s0, s1){
	//     	return (Number(s1) / 30) + "rem";
	//   });
	//   	$("#output_rm").val(v);
	// });
	 
	
	

});

