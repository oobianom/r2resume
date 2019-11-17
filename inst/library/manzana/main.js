$(function(){	
	rearrangePartsBeta();
})

function rearrangePartsBeta(){
	var newsect = document.createElement("div");   // Create a <button> element
	var xclassName = 'section experiences-section';
	var daddytop = '.summary-body';
	var daddyleft = '.main-wrapper';
	var daddyright = '.sidebar-wrapper';
	var daddybottom = '.w3-footer';
	
	
	//rearrange summary
	$("#primary_body_container div[data-format=summary]").each(function(){
		var summ = document.createElement("section");
		summ.className = 'section summary-section';
		$(summ).html('<h2 class="section-title"><span class="icon-holder"><i class="fas fa-user"></i></span>'+$(this).children('h1').first().html()+'</h2>')
		$(this).children('h1').first().remove();
		$(summ).append('<div class="summary">'+$(this).html()+'</div>');
			
		
		
		$("#primary_body_container div[data-format=skillsummary]").each(function(){
			var custLeft = document.createElement("div");
			custLeft.className = 'skillset';
			$(this).children('h1').first().remove();
			$(this).children('.section.level2').each(function(){
				var se = $(this);
				var se_title = se.children("h2").first().html()
				se.children("h2").first().remove();			 
				var each1 = '<div class="item"><h3 class="level-title">'+se_title+'</h3><div class="progress level-bar"><div class="progress-bar theme-progress-bar" role="progressbar" style="width: '+se.attr("rate")+'" aria-valuenow="'+se.attr("rate")+'" aria-valuemin="0" aria-valuemax="100"></div></div> </div>';
				$(custLeft).append(each1);
			})
			$(summ).append(custLeft);
			
		})
		$(daddyleft).append(summ);
	})
	
	
	 
	//rearrange experiences
	$("#primary_body_container div[data-format=experience]").each(function(){
		var experience = document.createElement("section"); 
		experience.className = xclassName;
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-suitcase';}
		var title1 = '<h2 class="section-title"><span class="icon-holder"><i class="fas '+iconn+'"></i></span>'+$(this).children('h1').first().html()+'</h2>';
		$(experience).append(title1);
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html()
			se.children("h2").first().remove();
			var eachWork = '<div class="item"><div class="meta"><div class="upper-row"><h3 class="job-title">'+se_title+'</h3><div class="time">'+se.attr("start")+' - '+se.attr("end")+'</div></div><div class="company">'+se.attr("affiliation")+'</div></div><div class="details">'+se.html()+'</div></div>'
			$(experience).append(eachWork);
		})
	$(daddyleft).append(experience);
	})
	
	
	//rearrange projects
	$("#primary_body_container div[data-format=project]").each(function(){
		var proj = document.createElement("section");  
		proj.className = xclassName;
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-folder';}
		var title1 = '<h2 class="section-title"><span class="icon-holder"><i class="fas '+iconn+'"></i></span>'+$(this).children('h1').first().html()+'</h2>';
		$(proj).append(title1);
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html()
			se.children("h2").first().remove();
			var eachWork = '<div class="item"><div class="meta"><div class="upper-row"><h3 class="job-title">'+se_title+'</h3></div></div><div class="details">'+se.html()+'</div></div>';
			$(proj).append(eachWork);
		})
	$(daddyleft).append(proj);
	})
	
	//rearrange left - education
	$("#primary_body_container div[data-format=education]").each(function(){
		var educ = document.createElement("div");
		educ.className = 'education-container container-block';
		$(educ).html('<h2 class="container-block-title">'+$(this).children('h1').first().html()+'</h2>');
		var inul = document.createElement("ul");
		inul.className = "list-unstyled resume-education-list";				
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();			
			var eachEdu = '<div class="item"><h4 class="degree">'+se_title+'</h4><h5 class="meta">'+se.attr("affiliation")+'</h5><div class="time">'+se.attr("start")+' - '+se.attr("end")+'</div>'+se.html()+'</div>'
			$(inul).append(eachEdu);						
		})		
		$(educ).append(inul);	
		$(daddyright).append(educ);
	})
	
	
	//rearrange publication
	$("#primary_body_container div[data-format=publication]").each(function(){
		var pubsect = document.createElement("section");
		pubsect.className = xclassName+' pulication_container';
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-book';}
		$(pubsect).html('<h2 class="section-title"><span class="icon-holder"><i class="fa '+iconn+'"></i></span>'+$(this).children('h1').first().html()+'('+($(this).children('ul').children('li').length+$(this).children('.section.level2').length)+')</h2>');
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
		$(pubsect).append(pubsect1)
		
		$(pubsect).append($(this).html());	
		$(daddyleft).append(pubsect);
	})
	
	
	//rearrange any tags
	$("#primary_body_container div[data-format=tags]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = 'interests-container container-block';
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-asterisk';}
		$(custLeft).html('<h2 class="container-block-title">'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html()
			se.children("h2").first().remove();			 
			var each1 = '<span class="w3-tag w3-teal w3-round">'+se_title+'</span>';
			$(custLeft).append(each1);
		})
		
		$(custLeft).append($(this).html()+'<br><br>');	
		$(daddyright).append(custLeft);
	})
	
	
	//rearrange any leftCustom
	$("#primary_body_container div[data-format=leftCustom]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = xclassName;
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-asterisk';}
		$(custLeft).html('<h2 class="section-title"><span class="icon-holder"><i class="fas '+iconn+'"></i></span>'+$(this).children('h1').first().html()+'</h2>');
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
	
	//rearrange any right bar interest
	$("#primary_body_container div[data-format=interest]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = 'interests-container container-block';
		$(custLeft).html('<h2 class="container-block-title">'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();
		var inul = document.createElement("ul");
		inul.className = "list-unstyled interests-list";				
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();			
			var eachx = '<li>'+se_title+'</li>'
			$(inul).append(eachx);						
		})	
		
		$(custLeft).append(inul);	
		$(daddyright).append(custLeft);
	})
	
	
	//rearrange any awards
	$("#primary_body_container div[data-format=awards]").each(function(){
		var custRight = document.createElement("section");
		custRight.className = 'interests-container container-block';
		$(custRight).html('<h2 class="container-block-title">'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var header2=se.children('h2').first().html();
			se.children('h2').first().remove();			
			var suchse = '<tr width="100%"><td width="20" class="xtd"><i class="fas fa-award"></i></td><td><b>'+header2+' ('+se.attr("year")+')</b><br><i>'+se.attr("affiliation")+'</i>'+se.html()+'</td></tr>';					
			$(custRight).append(suchse);				
		})	
			
		$(daddyright).append(custRight);
	})
	
	
	//rearrange any rightCustom
	$("#primary_body_container div[data-format=rightCustom]").each(function(){
		var pubsect = document.createElement("section");
		pubsect.className = 'interests-container container-block';
		$(pubsect).html('<h2 class="container-block-title">'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();
		$(pubsect).append($(this).html());	
		$(daddyright).append(pubsect);
	})
	//rearrange any languages
	$("#primary_body_container div[data-format=languages]").each(function(){
		var custRight = document.createElement("section");
		custRight.className = 'interests-container container-block';
		$(custRight).html('<h2 class="container-block-title">'+$(this).children('h1').first().html()+'</h3>');
		$(this).children('h1').first().remove();
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var header2=se.children('h2').first().html();
			se.children('h2').first().remove();	
			
			var suchse = '<li>'+header2+'&nbsp;(<b>'+se.attr("level")+'</b>)</li>';					
			$(custRight).append(suchse);				
		})	
		
		$(daddyright).append(custRight);
	})
	
	
	
	//rearrange social tab
	$("#primary_body_container div[data-format=social]").each(function(){
		var custRight = document.createElement("div");
		custRight.className = "xfooter";
		var inul = document.createElement("div");
		inul.style="text-align:center";
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var suchse = '<a class="resume-link" target="_new" href="'+se.attr('link')+'"><i class=" fas '+se.attr('icon')+'" >&nbsp;&nbsp; </i></a>';
			$(inul).append(suchse);						
		})		
		$(custRight).append("<br><hr><br>");
		$(custRight).append(inul);
		$(daddyright).append(custRight);
	})
	
	

	
	$("#primary_body").remove();
}
