$(function(){
	$.ajax({
		type : "GET",
		url: "data.json",
		xhrFields : {
                  withCredentials : true
            },
		dataType: 'json',
		success: function(json){
			console.log("kkk===",json);
			if(json != ''){

				var navData = json
				var navigations = json.navigation

					console.log("kkk01===",navData);
					console.log("kkk02===",navigations);
				}
			var navHtml = template("tpl-nav",navData);
			var contentHtml = template("tpl-content",navData);
			document.getElementById('category').innerHTML = navHtml;
			document.getElementById('mainContent').innerHTML = contentHtml;
		}
	})

	


});