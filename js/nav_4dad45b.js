function initNav(){$("#sub-nav-ul").length>0?showNav():setTimeout(function(){initNav()},400)}function showNav(){var a=['<li class="nav-item plr20 nav-home fl sub_nav_flag"><a href="/index.html" class="head-link">Home</a></li>','<li class="nav-item plr20 nav-home fl sub_nav_flag nav_scene" data-subnav="scene"><a href="#" class="head-link">Datasets</a></li>','<li class="nav-item plr20 nav-home fl sub_nav_flag"><span>Next-Gen Sim</span></li>','<li class="nav-item plr20 nav-home fl sub_nav_flag"><span>Benchmark</span></li>','<li class="nav-item plr20 nav-home fl sub_nav_flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">Events</a></li>'],l=['<li class="nav-item nav-home fl sub_nav_flag"><a href="/index.html" class="head-link">首页</a></li>','<li class="nav-item nav-home fl sub_nav_flag nav_scene" data-subnav="scene"><a href="#" class="head-link">数据集</a></li>','<li class="nav-item nav-home fl sub_nav_flag"><span>下一代仿真</span></li>','<li class="nav-item nav-home fl sub_nav_flag"><span>排行榜</span></li>','<li class="nav-item nav-home fl sub_nav_flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">活动</a></li>'],n={login:"Login",lang:"中文",logout:"Logout",use_pc:"Please use PC to access this page to download data and view more",perfect_info:"完善信息",assessment_manage:"评估管理"},e={login:"登陆",lang:"English",logout:"退出登陆",use_pc:"请使用PC登录本页面下载数据集和查看更多详情。",perfect_info:"完善信息",assessment_manage:"评估管理"},i={scene:['<li class="fl"><a href="scene.html">Scene Parsing</a></li>','<li class="fl" style="margin-right: 500;"><a href="car_instance.html">Car Instance</a></li>','<li class="fl" style="margin-right: 500;"><a href="lane_segmentation.html">Lane Segmentation</a></li>','<li class="fl" style="margin-right: 500;"><a href="self_localization.html">Self Localization</a></li>','<li class="fl" style="margin-right: 500;"><a href="trajectory.html">Trajectory</a></li>'],activity:['<li class="fl"><a href="/ECCV/index.html">ECCV2018 Vision Workshop</a></li>','<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2018 Perception Workshop</a></li>','<li class="fl"><a href="license.html">User License</a></li>']},s={scene:['<li class="fl"><a href="scene.html">场景解析</a></li>','<li class="fl" style="margin-right: 500;"><a href="car_instance.html">3D Car Instance</a></li>','<li class="fl" style="margin-right: 500;"><a href="lane_segmentation.html">Lanes Segmentation</a></li>','<li class="fl" style="margin-right: 500;"><a href="self_localization.html">Self Localization</a></li>','<li class="fl" style="margin-right: 500;"><a href="trajectory.html">Trajectory</a></li>'],activity:['<li class="fl"><a href="/ECCV/index.html">ECCV2018 视觉导航研讨会</a></li>','<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2018 感知研讨会</a></li>','<li class="fl"><a href="license.html">开发者协议</a></li>']},t="";if("en"==$.cookie("use_lang"))var o=a,c=n,r=i;else var o=l,c=e,r=s;$.each(o,function(a,l){t+=l}),$(".nav-list").html(t),$(".lang-switch").html(c.lang),$("#use_pc_text").html(c.use_pc);var f=get_userinfo(c),h="";$.each(r.scene,function(a,l){h+=l}),$("#sub-nav-ul").html(h),getUrl(),$(".sub_nav_flag").bind("mouseover",function(){var a=$(this).attr("data-subnav");if(a){var l="";$.each(r[a],function(a,n){l+=n}),$("#sub-nav-ul").html(l,function(){getUrl()})}}),$("#lang-switch").bind("click",function(){"en"==$.cookie("use_lang")?$.cookie("use_lang","cn",{expires:15}):$.cookie("use_lang","en",{expires:15}),window.location.reload()}),1==f&&($("#lang-login-container").bind("mouseover",function(){$(".lang-logout").css("display","block"),$("#lang_logout").bind("click",function(){user_logout()})}),$("#lang-login-container").bind("mouseout",function(){$(".lang-logout").css("display","none")})),$(".mobile-banner-close").bind("click",function(){$(".nav-prompt").css("display","none")})}function get_userinfo(a){var l=1,n="";return $.ajax({type:"GET",dataType:"json",url:"/server/user/checkinfo",success:function(l){if(0==l.status){var e=l.data.username;if(e.length>5)var e=e.slice(0,5)+"...";n='<a href="#" class="lang-login sub_nav_flag">'+e+"</a>",n+='<div class="lang-logout">'+a.logout+"</div>",$("#lang-login-container").html(n),l=1}else n='<a href="/login.html" class="lang-login sub_nav_flag">'+a.login+"</a>",$("#lang-login-container").html(n)},error:function(){n='<a href="/login.html" class="lang-login sub_nav_flag">'+a.login+"</a>",$("#lang-login-container").html(n)}}),l}function user_logout(){$.ajax({type:"GET",dataType:"json",url:"/server/user/logout",success:function(){window.location="/index.html"},error:function(){window.location="/index.html"}})}function getUrl(){var a=location.pathname.replace("/","");$("#sub-nav-ul a").each(function(l,n){console.log(),$(n).attr("href")===a&&(console.log(n),$(n).addClass("current"))})}$(document).ready(function(){}),setTimeout(function(){initNav()},360);