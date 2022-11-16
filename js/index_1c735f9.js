function initIndex() {
    $(".home-member").length > 0 ? showIndex() : setTimeout(function() {
        initIndex()
    },
    400)
}
function showIndex() {
    var e = {
        banner: [{
            title: "ApolloScape",
            sub_title: "自动驾驶前沿开放式工具及数据集",
            brief: ["Apollo Scape 是由百度Apollo发起的公开项目,", "旨在提供大规模的开放数据集与前沿技术以促进自动驾驶技术的发展。", "将建立为全球最大的自动驾驶开放数据集，为世界各地的自动驾驶研究人员提供数据支撑。"]
        }],
        intro: [{
            title: "场景解析",
            brief: "大规模开放数据集，旨在推动自动驾驶技术研发:包括长达数十万帧的高分辨率RGB视频和与其对应的逐像素语义标注、稠密点云、立体图像、立体全景图像，将持续采集更多不同环境、天气和交通条件下的数据，致力于为全世界的研究者提供更为实用的数据资源及评估标准。",
            btn: "查看详情",
            btn_url: "scene.html",
            img: "/public/img/index/intro-scene_d574bb3.jpg"
        },
        {
            title: "智能仿真",
            brief: "环境模拟用于自动驾驶在汽车和计算机行业引起了很多关注。主要挑战包括当自动驾驶汽车驾驶在存在其他车辆、自行车或行人的道路时出现的安全问题。为了进行广泛的测试和评估，我们需要开发出可用于测试的仿真系统，不仅适用于典型的相对安全的场景，而且还适用于不确定和危险的环境。我们目前的开放模拟工具包括WorldSim和LogSim。我们还在开发下一代技术，可用于生成真实世界驾驶场景和驾驶员行为的真实模拟。",
            btn: "",
            btn_url: "",
            img: "/public/img/index/intro-simulation_557bafb.jpg"
        }],
        member: [{
            name: "Andreas Geiger",
            from: "MPI研究组/苏黎世联邦理工学院",
            intro: "Andreas Geiger 是蒂宾根大学智能系统Max Planck 研究组的负责人，并且作为苏黎世联邦理工学院的客座教授，KITTI的作者之一。",
            img: "/public/img/people/andreas_geiger_764eb87.png",
            bigimg: "/public/img/people/andreas_geiger_331a7b2.jpg",
            url: "https://ps.is.tuebingen.mpg.de/person/ageiger"
        },
        {
            name: "Christian Laugier",
            from: "法国国家信息与自动化研究所",
            intro: "Christian Laugier是INRIA的名誉研究主任。他曾担任INRIA的首席研究主任，共同领导INRIA Grenoble 地区的e-Motion团队和LIG实验室。",
            img: "/public/img/people/christian_laugier_3274c83.png",
            bigimg: "/public/img/people/christian_laugier_9583be5.jpg",
            url: "http://emotion.inrialpes.fr/laugier/"
        },
        {
            name: "Hongdong Li",
            from: "澳大利亚国立大学",
            intro: "Hongdong Li 是三维计算机视觉、非刚性结构运动以及动态场景视觉理解等领域的领先研究人员。他是澳大利亚国立大学的研究成员，隶属于澳大利亚机器人视觉卓越中心。",
            img: "/public/img/people/hongdong_li_0f498a6.png",
            bigimg: "/public/img/people/hongdong_li_2815c3b.jpg",
            url: "http://users.cecs.anu.edu.au/~hongdong/"
        },
        {
            name: "Dinesh Manocha",
            from: "北卡罗来纳大学教堂山分校",
            intro: "Dinesh Manocha是美国计算机科学家，美国北卡罗来纳大学教堂山分校的杰出计算机科学教授。他的研究兴趣在于科学计算，机器人技术和3D计算机图形学。与此同时，Dinesh Manocha 是IEEE/ACM 的协会会士。",
            img: "/public/img/people/dinesh_manocha_e016f9c.png",
            bigimg: "/public/img/people/dinesh_manocha_1319e08.jpg",
            url: "http://www.cs.unc.edu/~dm/"
        },
        {
            name: "Alan Yuille",
            from: "约翰·霍普金斯大学",
            intro: "Alan Yuille 是约翰·霍普金斯大学认知科学与计算机科学的杰出教授。他负责指导认知、视觉和学习研究小组，隶属于CBMM中心。与此同时，Alan Yuille也是IEEE协会会士。",
            img: "/public/img/people/alan_yuille_cea48a3.png",
            bigimg: "/public/img/people/alan_yuille_eaf0105.jpg",
            url: "http://www.cs.jhu.edu/~ayuille/"
        }],
        other: {
            intro_more: "更多内容敬请期待",
            member_title: "咨询委员会"
        },
        log: {
            title: "更新日志",
            item: [{
                title: "场景解析",
                content: ["2018.03.08  正式发布了数据集第一部分，包含74555帧视频图像序列及对应的逐像素标注和姿态文件", "2018.03.21  首次开放深度图像，更新了数据集43592帧静态背景深度图像（road01_ins_depth和road02_ins_depth）", "2018.03.29  补充深度图像，更新了数据集30963帧静态背景深度图像（road03_ins_depth和road04_ins_depth）", "2018.03.30  更新了数据集，22871帧像素级别标注图像及对应静态背景深度图像（road02_seg和road02_seg_depth）", '2018.03.30  上传了用于训练、验证和测试的图像列表 <a href="http://ad-apolloscape.bj.bcebos.com/public%2Fimage_lists.tar.gz">Image lists</a>，暂时包括 road01_ins, road02_ins, and road03_ins 三段数据', "2018.04.03  更新了数据集，49571帧像素级别标注图像及对应静态背景深度图像（road03_seg、road03_seg_depth、road04_seg、road04_seg_depth）", "2018.04.03  完成第二阶段数据开放，累计开放数据集提供146,997帧图像数据下载；预计4月下旬会提供更复杂的数据，敬请期待"]
            }]
        }
    },
    i = {
        banner: [{
            title: "ApolloScape",
            sub_title: "Autonomous Driving Forefront Technology And Datasets",
            brief: ["Apollo Scape is a public project initiated by Baidu Apollo", "IT is aimed to provide a large-scale open dataset and forefront technology to promote autonomous driving technologies. ", "with a huge market and a high demand for robust and distributable algorithms."]
        }],
        intro: [{
            title: "Scene Parsing",
            brief: "The whole dataset will include RGB videos with high resolution image sequences and per pixel annotation, survey-grade dense 3D points with semantic segmentation. Our continuous collection will further add more sensors, such as stereoscopic video and panoramic images; and  cover a wide range of environment, weather, and  traffic conditions.",
            btn: "Learn more",
            btn_url: "scene.html",
            img: "/public/img/index/intro-scene_d574bb3.jpg"
        },
        {
            title: "Next-Gen Simulation",
            brief: "Use of simulation environments for autonomous driving is getting a lot of attention in the automobile and computing industry. The key challenges include safety considerations that arise when an autonomous vehicle navigates the roads surrounded by other vehicles, bicycles, or pedestrians.  In order to perform extensive testing and evaluations, we need to develop good simulation systems that can be used to test these vehicle not only in typical, relatively safe scenarios, but also in uncertain and dangerous environments. Our current open simulation tools include WorldSim and LogSim.  We are also developing next generation technologies that can be used to generate realistic simulations of real-world traffic scenarios and driver behaviors.",
            btn: "",
            btn_url: "",
            img: "/public/img/index/intro-simulation_557bafb.jpg"
        }],
        member: [{
            name: "Andreas Geiger",
            from: "MPI/ETH-Zurich",
            intro: "Andreas Geiger is a Max Planck Research Group Leader at the MPI for Intelligent Systems in Tübingen and a Visiting Professor at ETH Zürich, KITTI author.",
            img: "/public/img/people/andreas_geiger_764eb87.png",
            bigimg: "/public/img/people/andreas_geiger_331a7b2.jpg",
            url: "https://ps.is.tuebingen.mpg.de/person/ageiger"
        },
        {
            name: "Christian Laugier",
            from: " INRIA",
            intro: "Christian Laugier is Research Director Emeritus at INRIA; he was previously First class Research Director at INRIA and Scientific Leader of the e-Motion team-project common to INRIA Grenoble Rhône-Alpes and to the LIG Laboratory.",
            img: "/public/img/people/christian_laugier_3274c83.png",
            bigimg: "/public/img/people/christian_laugier_9583be5.jpg",
            url: "http://emotion.inrialpes.fr/laugier/"
        },
        {
            name: "Hongdong Li",
            from: "Australian National University",
            intro: "Hongdong Li is a leading researcher in the field of 3D computer vision, non-rigid structure from motion, and dynamic scene visual understanding. He is a faculty member @ ANU and the Australia ARC Centre of Excellence for Robotic Vision.",
            img: "/public/img/people/hongdong_li_0f498a6.png",
            bigimg: "/public/img/people/hongdong_li_2815c3b.jpg",
            url: "http://users.cecs.anu.edu.au/~hongdong/"
        },
        {
            name: "Dinesh Manocha",
            from: "UNC-Chapel Hill",
            intro: "Dinesh Manocha is an American computer scientist, the Phi Delta Theta/Matthew Mason Distinguished Professor of Computer Science at the University of North Carolina at Chapel Hill. He is an IEEE/ACM fellow. ",
            img: "/public/img/people/dinesh_manocha_e016f9c.png",
            bigimg: "/public/img/people/dinesh_manocha_1319e08.jpg",
            url: "http://www.cs.unc.edu/~dm/"
        },
        {
            name: "Alan Yuille",
            from: "Johns Hopkins University",
            intro: "Alan Yuille is a Bloomberg Distinguished Professor of Cognitive Science and Computer Science at Johns Hopkins University. He directs the research group on Compositional Cognition, Vision, and Learning. He is an IEEE fellow.",
            img: "/public/img/people/alan_yuille_cea48a3.png",
            bigimg: "/public/img/people/alan_yuille_eaf0105.jpg",
            url: '<a href="http://www.cs.jhu.edu/~ayuille/'
        }],
        other: {
            intro_more: "Stay tuned for more content",
            member_title: "Advisory Board"
        },
        log: {
            title: "Change Log",
            item: [{
                title: "Scene Parsing",
                content: ["2018.03.08  We have released the first part of the dataset that contains 74555 video frames and their pixel-level and instance-level annotations", "2018.03.21  We added the second part of the data set, including 43592 depth images for static background (road01_ins_depth&road02_ins_depth)", "2018.03.29  Update the data set, including 30,963 depth images for static background (road03_ins_depth和road04_ins_depth)", "2018.03.30  Update the data set, including 22,871 pixel-level images and depth images for static background (road02_seg和road02_seg_depth)", '2018.03.30  Uploaded the <a href="http://ad-apolloscape.bj.bcebos.com/public%2Fimage_lists.tar.gz">Image lists</a> for training, validation, and testing for road01_ins, road02_ins, and road03_ins', "2018.04.03  Update the data set, including 49,571 pixel-level images and depth images for static background（road03_seg and road04_seg）", "2018.04.03  Scene Parsing data set cumulatively provides 146,997 frames with corresponding pixel-level annotations and pose information，depth maps for static background."]
            }]
        }
    },
    n = "";
    if ("en" == $.cookie("use_lang")) {
        var t = i;
        $(".lang-en").css("display", "block")
    } else {
        var t = e;
        $(".lang-cn").css("display", "block")
    }
    n = "",
    $.each(t.intro,function(e, i) {
        n += '<div class="home-intro">'
        if(e === 0){
          n += '<div class="left-content-item fr">'
        }else{
          n += '<div class="left-content-item fl">'
        }

        n += '<div class="title">' + i.title + "</div>"
        n += '<div class="content">'
        n += "<p>" + i.brief + "</p>"
        n += "</div>"
        "" != i.btn_url && (n += '<a href="' + i.btn_url + '" class="btn intro-btn ">' + i.btn + "</a>")
        n += "</div>"
        n += '<div class="right-content-item fl">'
        n += '<div class="back">'
        n += '<img src="' + i.img + '" class="intro-img">'
        n += "</div>"
        n += "</div>"
        n += '<div class="cb"></div>'
        n += "</div>"
    }),
    n += '<div class="home-more">' + t.other.intro_more + "</div>",
    $("#intro-container").html(n),
    n = "",
    n += '<div class="home-member-title">' + t.other.member_title + "</div>",
    $.each(t.member,
    function(e, i) {
        n += '<div class="home-member-item fl">',
        n += '<div class="fl">',
        n += '<img src="' + i.img + '" class="member-image">',
        n += "</div>",
        n += '<div class="fl">',
        n += '<div class="member-name"><a href="' + i.url + '" target="_blank">' + i.name + "</a></div>",
        n += '<div class="member-from">' + i.from + "</div>",
        n += '<div class="member-intro">' + i.intro + "</div>",
        n += "</div>",
        n += "</div>"
    }),
    n += '<div class="cb"></div>',
    $("#home-member").html(n),
    n = "",
    n += '<div class="home-member-title">' + t.other.member_title + "</div>",
    $.each(t.member,
    function(e, i) {
        n += '<div class="home-member-item fl">',
        n += '<div class="fl">',
        n += '<img src="' + i.img + '" class="member-image">',
        n += "</div>",
        n += '<div class="fl">',
        n += '<div class="member-name"><a href="' + i.url + '" target="_blank">' + i.name + "</a></div>",
        n += '<div class="member-from">' + i.from + "</div>",
        n += '<div class="member-intro">' + i.intro + "</div>",
        n += "</div>",
        n += "</div>"
    }),
    n += '<div class="cb"></div>',
    $("#home-member").html(n),
    n = "",
    n += '<div class="home-member-title">' + t.log.title + "</div>",
    $.each(t.log.item,
    function(e, i) {
        n += '<div class="update-log-item">',
        n += '<div class="home-member-title-2">' + i.title + "</div>",
        n += "<ul>",
        $.each(i.content,
        function(e, i) {
            n += "<li>" + i + "</li>"
        }),
        n += "</ul>",
        n += "</div>"
    }),
    n += '<div class="cb"></div>',
    $("#update-log").html(n),
    n = "",
    n += '<div class="title">' + t.banner[0].title + "</div>",
    n += '<div class="sub-title">' + t.banner[0].sub_title + "</div></div>",
    $("#mobile-banner").html(n),
    n = "",
    $.each(t.intro,
    function(e, i) {
        n += '<div class="mobile-intro">',
        n += '<div class="title">' + i.title + "</div>",
        n += '<div class="brief">&nbsp;&nbsp;&nbsp;&nbsp;' + i.brief + "</div>",
        n += '<div class="back"><img src="' + i.img + '" class="intro-img"></div>',
        n += "</div>"
    }),
    $("#mobile-intro-container").html(n),
    $("#mobile-member-title").html(t.other.member_title),
    n = "",
    $.each(t.member,
    function(e, i) {
        n += '<div class="item">',
        n += '<div class="fl"><img src="' + i.bigimg + '" class="image"></div>',
        n += '<div class="fl">',
        n += '<p class="name">' + i.name + "</p>",
        n += '<p class="from">' + i.from + "</p>",
        n += '</div></div><div class="cb mb70"></div>'
    }),
    $("#mobile-member-container").html(n),
    n = "",
    n += '<div class="title">' + t.log.title + "</div>",
    $.each(t.log.item,
    function(e, i) {
        n += '<div class="mobile-update-log-itme">',
        n += '<div class="mobile-title-2">' + i.title + "</div>",
        n += "<ul>",
        $.each(i.content,
        function(e, i) {
            n += "<li>" + i + "</li>"
        }),
        n += "</ul>",
        n += "</div>"
    }),
    $("#mobile-update-log").html(n);
    var a = $(window).width();
    if (a >= 750) {
        new Swiper(".swiper-container", {
            spaceBetween: 30,
            centeredSlides: !0,
            // autoplay: {
            //     delay: 3e3,
            //     disableOnInteraction: !1
            // }
            pagination: {
              el: '.swiper-pagination',
              clickable:true
            },
        })
    }
}
$(document).ready(function() {}),
setTimeout(function() {
    initIndex()
},
420);
