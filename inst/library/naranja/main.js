$(function(){	
	rearrangePartsBeta();
})
var grabBootstrap = document.getElementsByTagName("script")[1];
grabBootstrap.parentNode.removeChild(grabBootstrap);
var grabBootstrap = document.getElementsByTagName("link")[0];
grabBootstrap.parentNode.removeChild(grabBootstrap);

function rearrangePartsBeta(){
	var newsect = document.createElement("div");   // Create a <button> element
	var xclassName = 'resume-section experience-section mb-5';
	var daddytop = '.summary-section';
	var daddyleft = '.col-lg-left';
	var daddyright = '.col-lg-right';
	var daddybottom = '.w3-footer';
	
	
	//rearrange summary
	$("#primary_body_container div[data-format=summary]").each(function(){
		var summ = document.createElement("div");
		summ.className = '';
		$(summ).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>')
		$(this).children('h1').first().remove();
		$(summ).append('<div class="resume-section-content">'+$(this).html()+'</div>');
			
		$(daddytop).append(summ);
	})
	
	
	
	
	
	 
	//rearrange experiences
	$("#primary_body_container div[data-format=experience]").each(function(){
		var experience = document.createElement("section"); 
		experience.className = xclassName;
		var title1 = '<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>';		
		$(experience).append(title1);
		
		
		var div0 = document.createElement("div"); div0.className ="resume-section-content";
		var div1 = document.createElement("div"); div1.className ="resume-timeline position-relative";
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();
			se.children('div').children('h3').addClass('resume-timeline-item-desc-heading font-weight-bold');
			se.children('div').children('ul').addClass('list-inline');
			se.children('div').children('ul').children('li').each(function(){
				$(this).addClass('list-inline-item');
				$(this).html('<span class="badge badge-primary badge-pill">'+$(this).html()+'</span>');
			})			
			var eachWork = '<article class="resume-timeline-item position-relative pb-5"><div class="resume-timeline-item-header mb-2"><div class="d-flex flex-column flex-md-row"><h3 class="resume-position-title font-weight-bold mb-1">'+se_title+'</h3><div class="resume-company-name ml-auto">'+se.attr("start")+' - '+se.attr("end")+'</div></div><div class="resume-position-time">'+se.attr("affiliation")+'</div></div><div class="resume-timeline-item-desc">'+se.html()+'</div></article>';
			$(div1).append(eachWork);
			$(div0).append(div1);
		})
		
	$(experience).append(div0)
	$(daddyleft).append(experience);
	})
	
	
	//rearrange projects
	$("#primary_body_container div[data-format=project]").each(function(){
		var proj = document.createElement("section"); 
		proj.className = xclassName;
		var title1 = '<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>';
		
		$(proj).append(title1);
		
		
		var div0 = document.createElement("div"); div0.className ="resume-section-content";
		var div1 = document.createElement("div"); div1.className ="resume-timeline-in position-relative";
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();
			se.children('div').children('h3').addClass('resume-timeline-item-desc-heading font-weight-bold');
			se.children('div').children('ul').addClass('list-inline');
			se.children('div').children('ul').children('li').each(function(){
				$(this).addClass('list-inline-item');
				$(this).html('<span class="badge badge-primary badge-pill">'+$(this).html()+'</span>');
			})					
			var eachWork = '<article class="resume-timeline-item position-relative"><div class="resume-timeline-item-header mb-2"><div class="d-flex flex-column flex-md-row"><h3 class="resume-position-title font-weight-bold mb-1">'+se_title+'</h3><div class="resume-company-name ml-auto"></div></div><div class="resume-position-time"></div></div><div class="resume-timeline-item-desc">'+se.html()+'</div></article>';
			$(div1).append(eachWork);
			$(div0).append(div1);
		})
		
	$(proj).append(div0)
	$(daddyleft).append(proj);
	})
	
	
	
	
	//rearrange publication
	$("#primary_body_container div[data-format=publication]").each(function(){
		var pubsect = document.createElement("section");
		pubsect.className = xclassName+' pulication_container';
		if($(this).attr('icon')){var iconn=$(this).attr('icon');}
		else{var iconn='fa-book';}
		$(pubsect).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'('+($(this).children('ul').children('li').length+$(this).children('.section.level2').length)+')</h2>');
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
	
	//rearrange any skillsummary
	$("#primary_body_container div[data-format=skillsummary]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = 'resume-section skills-section mb-5';
		$(custLeft).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();	
		
		
		var inul0 = document.createElement("div");inul0.className = "resume-section-content";
		var inul1 = document.createElement("div");inul1.className = "resume-skill-item";
		var inul = document.createElement("ul");inul.className = "list-unstyled mb-4";	
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();			
			var eachEdu ='<li class="mb-2"><div class="resume-skill-name">'+se_title+'</div><div class="progress resume-progress"><div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: '+se.attr("rate")+'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div> </li>';
			$(inul).append(eachEdu);						
		})
		$(inul1).append(inul);
		$(inul0).append(inul1);	
		$(custLeft).append(inul0);	
		$(daddyright).append(custLeft);
	})
	
	 
										
	//rearrange any tags
	$("#primary_body_container div[data-format=tags]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = 'resume-section interests-section mb-5';
		$(custLeft).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();	
		
		var se = $(this);
		se.children('ul').addClass('list-inline');
		se.children('ul').children('li').each(function(){
				$(this).addClass('list-inline-item');
				$(this).html('<span class="badge badge-light">'+$(this).html()+'</span>');
		})	
		
		$(custLeft).append($(this).html());	
		$(daddyright).append(custLeft);
	})
	
	//rearrange left - education
	$("#primary_body_container div[data-format=education]").each(function(){
		var educ = document.createElement("div");
		educ.className = 'resume-section education-section mb-5';
		$(educ).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>');
		
		var inul0 = document.createElement("div");inul0.className = "resume-section-content";
		var inul = document.createElement("ul");inul.className = "list-unstyled";				
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();			
			var eachEdu ='<li class="mb-2"><div class="resume-degree font-weight-bold">'+se_title+'</div><div class="resume-degree-org">'+se.attr("affiliation")+'</div><div class="resume-degree-time">'+se.attr("start")+' - '+se.attr("end")+'</div></li>';
			
			$(inul).append(eachEdu);						
		})	
		$(inul0).append(inul);	
		$(educ).append(inul0);	
		$(daddyright).append(educ);
	})
	
	
	//rearrange any leftCustom
	$("#primary_body_container div[data-format=leftCustom]").each(function(){
		var proj = document.createElement("section"); 
		proj.className = xclassName;
		var title1 = '<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>';
		
		$(proj).append(title1);
		
		
		var div0 = document.createElement("div"); div0.className ="resume-section-content";
		var div1 = document.createElement("div"); div1.className ="";
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();
			se.children('div').children('h3').addClass('resume-timeline-item-desc-heading font-weight-bold');
			se.children('div').children('ul').addClass('list-inline');
			se.children('div').children('ul').children('li').each(function(){
				$(this).addClass('list-inline-item');
				$(this).html('<span class="badge badge-primary badge-pill">'+$(this).html()+'</span>');
			})					
			var eachWork = '<article class=""><div class="resume-timeline-item-header mb-2"><div class="d-flex flex-column flex-md-row"><h3 class="resume-position-title font-weight-bold mb-1">'+se_title+'</h3><div class="resume-company-name ml-auto"></div></div><div class="resume-position-time"></div></div><div class="resume-timeline-item-desc">'+se.html()+'</div></article>';
			$(div1).append(eachWork);
			$(div0).append(div1);
		})
		
		$(proj).append(div0)
		$(daddyleft).append(proj);
	})
	
	
	
	
	//rearrange any awards
	$("#primary_body_container div[data-format=awards]").each(function(){
		var educ = document.createElement("section");
		educ.className = 'resume-section reference-section mb-5';
		$(educ).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>');
		
		var inul0 = document.createElement("div");inul0.className = "resume-section-content";
		var inul = document.createElement("ul");inul.className = "list-unstyled resume-awards-list";				
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();			
			var eachEdu ='<li class="mb-2 pl-4 position-relative"><i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i><div class="resume-award-name">'+se_title+' ('+se.attr("year")+')</div><div class="resume-award-desc">'+se.html()+'</div></li>';
			$(inul).append(eachEdu);						
		})	
		$(inul0).append(inul);	
		$(educ).append(inul0);	
		$(daddyright).append(educ);
	})
	
	 								
	//rearrange any right bar interest
	$("#primary_body_container div[data-format=interest]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = 'resume-section interests-section mb-5';
		$(custLeft).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>');
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
	
	//rearrange any languages
	$("#primary_body_container div[data-format=languages]").each(function(){
		var custRight = document.createElement("section");
		custRight.className = 'work-section py-3';
		$(custRight).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var header2=se.children('h2').first().html();
			se.children('h2').first().remove();	
			
			var suchse = '<li>'+header2+'(<b>'+se.attr("level")+'</b>)</li>';					
			$(custRight).append(suchse);				
		})	
		
		$(daddyright).append(custRight);
	})
	
	
	//rearrange any rightCustom
	$("#primary_body_container div[data-format=rightCustom]").each(function(){
		var pubsect = document.createElement("section");
		pubsect.className = 'resume-section interests-section mb-5';
		$(pubsect).html('<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">'+$(this).children('h1').first().html()+'</h2>');
		$(this).children('h1').first().remove();
		
		var se = $(this);
		se.children('ul').addClass('list-inline');
		se.children('ul').children('li').each(function(){
				$(this).addClass('list-inline-item');
				$(this).html('<span class="badge badge-light">'+$(this).html()+'</span>');
		})	
		
		$(pubsect).append('<div class="resume-section-content">'+$(this).html()+'</div>');	
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
		$(custRight).append("<br><hr><br>");
		$(custRight).append(inul);
		$(daddyright).append(custRight);
	})
	
	

	
	$("#primary_body").remove();
}
