var grabBootstrap = document.getElementsByTagName("script")[1];
grabBootstrap.parentNode.removeChild(grabBootstrap);
var grabBootstrap = document.getElementsByTagName("link")[0];
grabBootstrap.parentNode.removeChild(grabBootstrap);

$(function(){	
	rearrangeParts();
})

function rearrangeParts(){
	var newsect = document.createElement("section");   // Create a <button> element
	newsect.className = 'work-section py-3';
	var daddytop = '.summary-body';
	var daddyleft = '.resume-main';
	var daddyright = '.resume-aside';
	var daddybottom = '.footer-body';
	
	//rearrange experiences
	$("#primary_body_container div[data-format=experience]").each(function(){
		var experience = newsect; 
		var title1 = '<h3 class="text-uppercase resume-section-heading mb-4">'+$(this).children('h1').first().html()+'</h3>'
		$(newsect).append(title1);
		
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html()
			se.children("h2").first().remove();
			var eachWork = '<div class="item mb-3"><div class="item-heading row align-items-center mb-2"><h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">'+se_title+'</h4><div class="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">'+se.attr("start")+' - '+se.attr("end")+'</div><h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0 item-subtitle-medium">'+se.attr("affiliation")+'</h4></div><div class="item-content">'+se.html()+'</div></div>';						
			$(newsect).append(eachWork);
		})
	$(daddyleft).append(experience);
	})
	
	//rearrange summary
	$("#primary_body_container div[data-format=summary]").each(function(){
		var summ = document.createElement("div");
		summ.className = "media-body text-left";
		$(this).children('h1').remove();
		$(summ).html($(this).html());
		$(daddytop).attr('style','border-bottom: 1px solid rgba(0,0,0,0.1); padding-bottom: 20px;');
		$(daddytop).append(summ);	
	})
	
	//rearrange any leftCustom
	$("#primary_body_container div[data-format=leftCustom]").each(function(){
		var custLeft = document.createElement("section");
		custLeft.className = 'work-section py-3';
		$(custLeft).html('<h3 class="text-uppercase resume-section-heading mb-4">'+$(this).children('h1').first().html()+'</h3>');
		$(this).children('h1').first().remove();
		$(this).children().children("h2").each(function(){
			$(this).replaceWith("<h5>"+$(this).html()+"</h5>");
		})
		$(custLeft).append($(this).html());	
		$(daddyleft).append(custLeft);
	})
	
	
	//rearrange publication
	$("#primary_body_container div[data-format=publication]").each(function(){
		var pubsect = document.createElement("section");
		pubsect.className = 'pulication_container work-section py-3';
		$(pubsect).html('<h3 class="text-uppercase resume-section-heading mb-4">'+$(this).children('h1').first().html()+'('+($(this).children('ul').children('li').length+$(this).children('.section.level2').length)+')</h3>');
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
	
	
	
	
	
	//rearrange left - education
	$("#primary_body_container div[data-format=education]").each(function(){
		var educ = document.createElement("section");
		educ.className = 'work-section py-3';
		$(educ).html('<h3 class="text-uppercase resume-section-heading mb-4">'+$(this).children('h1').first().html()+'</h3>');
		var inul = document.createElement("ul");
		inul.className = "list-unstyled resume-education-list";				
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var se_title = se.children("h2").first().html();
			se.children("h2").first().remove();
			
			var eachEdu = '<li class="mb-3"><div class="resume-degree font-weight-bold">'+se_title+'</div><div class="resume-degree-org text-muted">'+se.attr('affiliation')+'</div><div class="resume-degree-time text-muted">'+se.attr('start')+' - '+se.attr('end')+'</div></li>';
			$(inul).append(eachEdu);						
		})		
		$(educ).append(inul);	
		$(daddyright).append(educ);
	})
	
	//rearrange any awards
	$("#primary_body_container div[data-format=awards]").each(function(){
		var custRight = document.createElement("section");
		custRight.className = 'work-section py-3';
		$(custRight).html('<h3 class="text-uppercase resume-section-heading mb-4">'+$(this).children('h1').first().html()+'</h3>');
		$(this).children('h1').first().remove();
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var header2=se.children('h2').first().html();
			se.children('h2').first().remove();			
			var suchse = '<tr width="100%"><td width="20"><i class="fas fa-award"></i></td><td><b>'+header2+' ('+se.attr("year")+')</b><br><i>'+se.attr("affiliation")+'</i>'+se.html()+'</td></tr>';					
			$(custRight).append(suchse);				
		})	
			
		$(daddyright).append(custRight);
	})
	
		
	//rearrange any rightColumn
	$("#primary_body_container div[data-format=rightCustom]").each(function(){
		var custRight = document.createElement("section");
		custRight.className = 'work-section py-3';
		$(custRight).html('<h3 class="text-uppercase resume-section-heading mb-4">'+$(this).children('h1').first().html()+'</h3>');
		$(this).children('h1').first().remove();
		$(custRight).append($(this).html());	
		$(daddyright).append(custRight);
	})
	
	//rearrange any languages
	$("#primary_body_container div[data-format=languages]").each(function(){
		var custRight = document.createElement("section");
		custRight.className = 'work-section py-3';
		$(custRight).html('<h3 class="text-uppercase resume-section-heading mb-4">'+$(this).children('h1').first().html()+'</h3>');
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
	
	//rearrange social tab
	$("#primary_body_container div[data-format=social]").each(function(){
		var custRight = document.createElement("div");
		custRight.className = "resume-footer text-center";
		var inul = document.createElement("ul");
		inul.className = "resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted";
		
		$(this).children('.section.level2').each(function(){
			var se = $(this);
			var suchse = '<li class="list-inline-item mb-lg-0 mr-3"><a class="resume-link" target="_new" href="'+se.attr('link')+'"><i class="fab '+se.attr('icon')+' fa-2x mr-2" data-fa-transform="down-4"></i><span class="d-none d-lg-inline-block text-muted">'+se.children('h2').first().html()+'</span></a></li>';
			$(inul).append(suchse);						
		})		
		$(custRight).append(inul);
		$(daddybottom).attr('style','border-top:1px solid rgba(0,0,0,0.1);padding-top:20px');
		$(daddybottom).append(custRight);
	})
	
	
	$("#primary_body").remove();
}
