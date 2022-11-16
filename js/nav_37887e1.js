function initNav() {
    $("#sub-nav-ul").length > 0 ? showNav() : setTimeout(function() {
        initNav()
    },
    400)
}
function showNav() {
    var a = [
      '<li class="nav-item plr20 nav-home fl sub_nav_flag"><a href="/index.html" class="head-link">Home</a></li>',
      '<li class="nav-item plr20 nav-home fl sub_nav_flag nav_scene" data-subnav="scene"><a href="#" class="head-link">Datasets</a></li>',
      '<li class="nav-item plr20 nav-home fl sub_nav_flag"><span>Next-Gen Sim</span></li>',
      '<li class="nav-item plr20 nav-home fl sub_nav_flag"><span>Benchmark</span></li>',
      '<li class="nav-item plr20 nav-home fl sub_nav_flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">Events</a></li>'],
    n = [
      '<li class="nav-item nav-home fl sub_nav_flag"><a href="/index.html" class="head-link">首页</a></li>',
      '<li class="nav-item nav-home fl sub_nav_flag nav_scene" data-subnav="scene"><a href="#" class="head-link">数据集</a></li>',
      '<li class="nav-item nav-home fl sub_nav_flag"><span>下一代仿真</span></li>',
      '<li class="nav-item nav-home fl sub_nav_f lag"><span>排行榜</span></li>',
      '<li class="nav-item nav-home fl sub_nav_flag nav_challenge" data-subnav="activity"><a href="#" class="head-link">活动</a></li>'
    ],
    l = {
        login: "Login",
        lang: "中文",
        logout: "Logout",
        use_pc: "Please use PC to access this page to download data and view more",
        perfect_info: "完善信息",
        assessment_manage: "评估管理"
    },
    s = {
        login: "登陆",
        lang: "English",
        logout: "退出登陆",
        use_pc: "请使用PC登录本页面下载数据集和查看更多详情。",
        perfect_info: "完善信息",
        assessment_manage: "评估管理"
    },
    e = {
        scene: [
          '<li class="fl"><a href="scene.html">Scene Parsing</a></li>',
          '<li class="fl" style="margin-right: 500;"><a href="car_instance.html">Car Instance</a></li>',
          '<li class="fl" style="margin-right: 500;"><a href="lane_segmentation.html">Lane Segmentation</a></li>',
          '<li class="fl" style="margin-right: 500;"><a href="self_localization.html">Self Localization</a></li>',
          '<li class="fl" style="margin-right: 500;"><a href="trajectory.html">Trajectory</a></li>'
        ],
        activity: [
          '<li class="fl"><a href="/ECCV/index.html">ECCV2018 Vision Workshop</a></li>',
          '<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2018 Perception Workshop</a></li>',
          '<li class="fl"><a href="Http://www.2018iv.org/SS07.html">IV2018 Simulation Challenge</a></li>',
          '<li class="fl"><a href="license.html">User License</a></li>'
        ]
    },
    i = {
        scene: [
          '<li class="fl"><a href="scene.html">场景解析</a></li>',
          '<li class="fl" style="margin-right: 500;"><a href="car_instance.html">3D Car Instance</a></li>',
          '<li class="fl" style="margin-right: 500;"><a href="lane_segmentation.html">Lanes Segmentation</a></li>',
          '<li class="fl" style="margin-right: 500;"><a href="self_localization.html">Self Localization</a></li>',
          '<li class="fl" style="margin-right: 500;"><a href="trajectory.html">Trajectory</a></li>'
        ],
        activity: [
          '<li class="fl"><a href="/ECCV/index.html">ECCV2018 视觉导航研讨会</a></li>',
          '<li class="fl"><a href="Http://wad.ai/challenge.html">CVPR2018 感知研讨会</a></li>',
          '<li class="fl"><a href="Http://www.2018iv.org/SS07.html">IV 2018 仿真挑战赛</a></li>',
          '<li class="fl"><a href="license.html">开发者协议</a></li>'
        ]
    },
    t = "";
    if ("en" == $.cookie("use_lang")) var o = a,
    c = l,
    r = e;
    else var o = n,
    c = s,
    r = i;
    $.each(o,
    function(a, n) {
        t += n
    }),
    $(".nav-list").html(t),
    $(".lang-switch").html(c.lang),
    $("#use_pc_text").html(c.use_pc);
    var f = get_userinfo(c);
    // 初次导航栏显示 @beyondsoft
    var subTab = "";
    $.each(r['scene'],function(a, l) {
        subTab += l
    }),
    $("#sub-nav-ul").html(subTab)
    // 控制导航栏显示 @beyondsoft
    $(".sub_nav_flag").bind("mouseover",
    function() {
      var attr = $(this).attr("data-subnav")
      if(attr){
        var subList = "";
        $.each(r[attr],function(a, l) {
            subList += l
        }),
        $("#sub-nav-ul").html(subList)
      }
        // if ($(this).hasClass("nav_challenge") || $(this).hasClass("nav_scene")) {
        //     var a = $(this).attr("data-subnav"),

        //     $(".sub-nav").css("display", "inline")
        // } else $(".sub-nav").css("display", "none")
    }),
    // $(".sub-nav").bind("mouseover",
    // function() {
    //     $(".sub-nav").css("display", "inline")
    // }),
    // $(".sub-nav").bind("mouseout",
    // function() {
    //     $(".sub-nav").css("display", "none")
    // }),
    $("#lang-switch").bind("click",
    function() {
        "en" == $.cookie("use_lang") ? $.cookie("use_lang", "cn", {
            expires: 15
        }) : $.cookie("use_lang", "en", {
            expires: 15
        }),
        window.location.reload()
    }),
    1 == f && ($("#lang-login-container").bind("mouseover",
    function() {
        $(".lang-logout").css("display", "block"),
        $("#lang_logout").bind("click",
        function() {
            user_logout()
        })
    }), $("#lang-login-container").bind("mouseout",
    function() {
        $(".lang-logout").css("display", "none")
    })),
    $(".mobile-banner-close").bind("click",
    function() {
        $(".nav-prompt").css("display", "none")
    })
}
function get_userinfo(a) {
    var n = 1,
    l = "";
    return $.ajax({
        type: "GET",
        dataType: "json",
        url: "/server/user/checkinfo",
        success: function(n) {
            if (0 == n.status) {
                var s = n.data.username;
                if (s.length > 5) var s = s.slice(0, 5) + "...";
                l = '<a href="#" class="lang-login sub_nav_flag">' + s + "</a>",
                l += '<div class="lang-logout">' + a.logout + "</div>",
                $("#lang-login-container").html(l),
                n = 1
            } else l = '<a href="/login.html" class="lang-login sub_nav_flag">' + a.login + "</a>",
            $("#lang-login-container").html(l)
        },
        error: function() {
            l = '<a href="/login.html" class="lang-login sub_nav_flag">' + a.login + "</a>",
            $("#lang-login-container").html(l)
        }
    }),
    n
}
function user_logout() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/server/user/logout",
        success: function() {
            window.location = "/index.html"
        },
        error: function() {
            window.location = "/index.html"
        }
    })
}
$(document).ready(function() {}),
setTimeout(function() {
    initNav()
},
360);
