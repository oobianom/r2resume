$(function(){	
	rearrangePartsBeta();
})

function rearrangePartsBeta(){
	var newsect = document.createElement("div");   // Create a <button> element
	var xclassName = 'w3-container w3-card w3-white w3-margin-bottom';
	var daddytop = '.summary-body';
	var daddyleft = '.w3-third-main';
	var daddyright = '.w3-twothird';
	var daddybottom = '.w3-footer';
	
	
	//rearrange summary
	$("#primary_body_container div[data-format=summary]").each(function(){
		var summ = document.createElement("div");
		summ.className = xclassName;
		$(this).children('h1').remove();
		$(summ).html('<div class="w3-container summary1">'+$(this).html()+'</div>');
		$(daddyright).append(summ);	
	})
	
	//rearrange left - education
	$("#primary_body_container div[data-format=education]").each(function(){
		var educ = document.createElement("div");
		educ.className = xclassName;
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-university';}
		$(educ).html('<h2 class="w3-text-grey w3-padding-16"><i class="fa '+iconn+' fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>'+$(this).children('h1').first().html()+'</h2>');
		var inul = document.createElement("ul");
		inul.className = "list-unstyled resume-education-list";				
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();			
			var eachEdu = '<hr><div class="w3-container"><h5 class="w3-opacity"><b>'+se_title+' / '+se.attr("affiliation")+'</b></h5><h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+se.attr("start")+' - '+se.attr("end")+'</h6>'+se.html()+'</div>'
			$(inul).append(eachEdu);						
		})		
		$(educ).append(inul);	
		$(daddyright).append(educ);
	})
	
	
	
	//rearrange experiences
	$("#primary_body_container div[data-format=experience]").each(function(){
		var experience = document.createElement("div"); 
		experience.className = xclassName;
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-suitcase';}
		var title1 = '<h2 class="w3-text-grey w3-padding-16"><i class="fa '+iconn+' fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>'+$(this).children('h1').first().html()+'</h2>';
		$(experience).append(title1);
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html()
			se.children("h2").first().remove();
			var eachWork = '<hr><div class="w3-container"><h5 class="w3-opacity"><b>'+se_title+' / '+se.attr("affiliation")+'</b></h5><h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'+se.attr("start")+' - '+se.attr("end")+'</h6>'+se.html()+'</div>'
			$(experience).append(eachWork);
		})
	$(daddyright).append(experience);
	})
	
	//rearrange projects
	$("#primary_body_container div[data-format=project]").each(function(){
		var proj = document.createElement("div");  
		proj.className = xclassName;
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-folder-plus';}
		var title1 = '<h2 class="w3-text-grey w3-padding-16"><i class="fa '+iconn+' fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>'+$(this).children('h1').first().html()+'</h2>';
		$(proj).append(title1);
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html()
			se.children("h2").first().remove();
			var eachWork = '<hr><div class="w3-container"><h5 class="w3-opacity"><b>'+se_title+'</b></h5><h6 class="w3-text-teal"></h6>'+se.html()+'</div>'
			$(proj).append(eachWork);
		})
	$(daddyright).append(proj);
	})
	
	
	//rearrange publication
	$("#primary_body_container div[data-format=publication]").each(function(){
		var pubsect = document.createElement("section");
		pubsect.className = xclassName+' pulication_container';
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-book';}
		$(pubsect).html('<h2 class="w3-text-grey w3-padding-16"><i class="fa '+iconn+' fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>'+$(this).children('h1').first().html()+'('+($(this).children('ul').children('li').length+$(this).children('.section.level2').length)+')</h2>');
		$(this).children('h1').first().remove();
		
		var pubsect1 = document.createElement("ul");
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();
			
			var pubsect2 = '<li><div class="pub_top"><p><span class="pub_authors">'+se.attr('authors')+'</span><span class="pub_title"><a target="_blank" href="#">'+se_title+'</a></span> <span class="pub_journal">'+se.attr('affiliation')+'</span> <span class="pub_pubvol">'+se.attr('others')+'</span></p></div></li>';
			
			se.remove();			
			$(pubsect1).append(pubsect2);						
		})	
		$(pubsect).append(pubsect1);
		
		$(pubsect).append($(this).html());	
		$(daddyright).append(pubsect);
	})
	
	
	
	
	
	//rearrange any leftCustom
	$("#primary_body_container div[data-format=leftCustom]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = 'work-section py-3';
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-asterisk';}
		$(custLeft).html('<p class="w3-large"><b><i class="fa '+iconn+' fa-fw w3-margin-right w3-text-teal"></i>'+$(this).children('h1').first().html()+'</b></p>');
		$(this).children('h1').first().remove();
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html()
			se.children("h2").first().remove();			 
			var each1 = '<p>'+se_title+'</p><div class="w3-light-grey w3-round-xlarge"> <div class="w3-round-xlarge w3-teal" style="height:24px;width:'+se.attr("rate")+'"></div> </div>';
			$(custLeft).append(each1);
		})
		
		$(custLeft).append($(this).html()+'<br><br>');	
		$(daddyleft).append(custLeft);
	})
	
	//rearrange any awards
	$("#primary_body_container div[data-format=awards]").each(function(){
		var custRight = document.createElement("section");
		custRight.className = 'work-section py-3';
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-asterisk';}
		$(custRight).html('<p class="w3-large"><b><i class="fa '+iconn+' fa-fw w3-margin-right w3-text-teal"></i>'+$(this).children('h1').first().html()+'</b></p>');
		$(this).children('h1').first().remove();
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var header2=se.children('h2').first().html();
			se.children('h2').first().remove();			
			var suchse = '<tr width="100%"><td width="20"><i class="fas fa-award"></i></td><td><b>'+header2+' ('+se.attr("year")+')</b><br><i>'+se.attr("affiliation")+'</i>'+se.html()+'</td></tr>';					
			$(custRight).append(suchse);				
		})	
			
		$(daddyleft).append(custRight);
	})
	
	
	//rearrange any tags
	$("#primary_body_container div[data-format=tags]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = 'work-section py-3';
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-asterisk';}
		$(custLeft).html('<p class="w3-large"><b><i class="fa '+iconn+' fa-fw w3-margin-right w3-text-teal"></i>'+$(this).children('h1').first().html()+'</b></p>');
		$(this).children('h1').first().remove();
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html()
			se.children("h2").first().remove();			 
			var each1 = '<span class="w3-tag w3-teal w3-round">'+se_title+'</span>';
			$(custLeft).append(each1);
		})
		
		$(custLeft).append($(this).html()+'<br><br>');	
		$(daddyleft).append(custLeft);
	})
	
	
	//rearrange any RightCustom
	$("#primary_body_container div[data-format=rightCustom]").each(function(){
		var pubsect = document.createElement("section");
		pubsect.className = xclassName+' pulication_container';
		$(pubsect).html('<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-clipboard fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();
		$(pubsect).append($(this).html());	
		$(daddyright).append(pubsect);
	})
	
	//rearrange social tab
	$("#primary_body_container div[data-format=social]").each(function(){
		var custRight = document.createElement("div");
		custRight.className = "xfooter";
		var inul = document.createElement("div");
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var suchse = '<a class="resume-link" target="_new" href="'+se.attr('link')+'"><i class="fa '+se.attr('icon')+' w3-hover-opacity" >&nbsp;&nbsp; </i></a>';
			$(inul).append(suchse);						
		})		
		$(custRight).append(inul);
		$(daddybottom).attr('style','border-top:1px solid rgba(0,0,0,0.1);padding-top:20px');
		$(daddybottom).append(custRight);
	})
	
	

	
	$("#primary_body").remove();
	$("body").css("visibility","visible");
}
