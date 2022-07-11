(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{327:function(t,a,r){"use strict";r.r(a);var p=r(6),s=Object(p.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("大家好，我是Jiaolong，「物品指南」的开发者。从正式上线到现在已经四个月了，很早前就想写一篇文章来讲下开发这个app的初衷和过程，一直迟迟没有行动，终于经过近期的重构调整，算是有点样子了，遂动手写点自己的想法。文章分为两部分，第一部分是我做这个app的初衷。第二部分是关于开发的过程以及未来计划。")])]),t._v(" "),a("h2",{attrs:{id:"初衷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初衷"}},[t._v("#")]),t._v(" 初衷")]),t._v(" "),a("p",[t._v("最早有记录物品的想法是在一次在宿舍整理东西的时候，看着一些产品的包装盒不舍得扔，哪怕有些东西已经坏了或是不用了，但扔了之后就好像从没拥有过，于是便想把它们都整理记录下来。一开始选择了notion进行记录。")]),t._v(" "),a("p",[t._v("notion的特点是all in one，什么都可以记录，它的数据库系统自定义性很高，这也是我喜欢notion的一个特色。但all in one也会造成一些困扰，当所有琐事都往里扔时，重要的东西就会被淹没，为了避免这一点，我们就不得不创建一套自己的分类管理系统，以至于每次要进行记录的时候要先进行一个打开-选择分类-记录的过程，也无形中增大了记录的成本。同时我有一套自己的知识管理体系，其中notion的最大用途就是用来把零碎信息汇总成文或是数据库整理起来，但当这些其他不相关的内容越来越多时，notion的这一环就会被影响。就像我们打开QQ微信就是为了联系沟通，打开淘宝京东就是为了购物，而不是为了其他目的。")]),t._v(" "),a("p",[t._v("所以便开始寻找替代品，我们使用率最高的就是手机，但并没有找到类似或符合我想法的app。既然没有合适工具，而作为一个程序员最擅长的就是自己创造工具，于是便有了做一个app的想法。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/07/10/ubVcwHWjisXpaxA.png",alt:""}})]),t._v(" "),a("p",[t._v("在v1.0版本中，除了仓库模块记录购买过的物品，还增加了种草及日常模块，种草对应一些想要购买但因一些限制因素导致不能立即购买或是决定以后再购买的物品，可能在电商app中加入购物车更为方便，但我自己很少使用过，同时随着电商平台的增多，种草物品也被分散，这时一个汇总的工具便起到了很大的作用，同时我们种草的原因也可以一同记录下来。而日常模块则对应一些经常会回购的物品，比如一直在使用的洗面奶、牙膏等消耗品，同种草原因类似，比起每次需要购买时再去逐个打开各个平台查看订单记录或是收藏夹，汇总起来更为方便，尤其是在不清楚是在哪个平台购买的时候，很多时候我们其实并不关心它是来自哪个平台。这也是开发这款工具的原因之一，通过URL即可快速定位到相关平台。URL的意义在于链接物品来源，所以我更希望用户在使用这款app时记录的是自己的主观感受，而非物品本身，如果想要查看物品的详细信息直接通过url查看即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/07/10/NiPDmn5txOUbVue.png",alt:""}})]),t._v(" "),a("p",[t._v("随着用户的增多，在用户反馈和建议中我逐渐发现，仓库、种草、日常这三个模块其实更偏向于我个人的想法，三者之间除了名字外，区分其实并不明显，但如果为了区分开而强行增加功能这种行为并不是我想看到的，我不想把自己当成一个出题人，让用户严格按照我的规则去答这张试卷。于是有了现在的改版：模块-分组。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/07/10/kMFtbU9r3qBZ2YX.jpg",alt:""}})]),t._v(" "),a("p",[t._v("同时用途也会变得更多，不只是物品，你可以把它当成一个生活备忘录，用它来做物品管理，让生活更有序。可以用它当购物车的汇总，记下从各个地方种草到的好物。可以用它记录使用经历，每件物品都有属于它的故事，普通的它也因此不再普通。记录app的使用体验、读过的书、看过的电影、去过的地方，记录你想记录的一切。所有符合主体+记录的内容都可以被收录进来，这也是我未来的开发方向。")]),t._v(" "),a("h2",{attrs:{id:"开发历程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发历程"}},[t._v("#")]),t._v(" 开发历程")]),t._v(" "),a("h3",{attrs:{id:"独立开发者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立开发者"}},[t._v("#")]),t._v(" 独立开发者")]),t._v(" "),a("p",[t._v("作为手机重度使用者，我把手机当成一个极佳的效率工具，同时也探索了很多工具效率类app（学渣工具多），在使用的途中发现很多app是由个人开发的，而非某家公司。这时我才知道有独立开发者这个职业，不为任何人打工。自己开发产品，自己与用户沟通，自己处理所有问题。而作为一个程序员最大的成就就是完全由自己开发设计的产品能够得到大家的认可。这时一颗独立开发的种子逐渐在我心里生根发芽。终于在我大四暑假实习期间开花。因为一直在使用iOS设备，便选择了iOS开发，我开始利用下班时间学习SwiftUI，因为本科所学专业就是计算机，有一定编程基础，并且在兴趣的加成下，很快便能照葫芦画瓢，做出一个简单的备忘录app。")]),t._v(" "),a("p",[t._v("在确定了做一个物品清单类的app后，很快就发现真正自己去做一个产品会编程仅仅是一个前提，还有太多方面需要学习，随后我开始疯狂的补充空缺，不会设计UI就去逛设计网站，不会做产品就去看产品设计相关的书。一个不会做前端的后端不是一个好产品经理。")]),t._v(" "),a("blockquote",[a("p",[t._v("工程师和艺术家都是从无到有地创造一些东西。——《解密Instagram》")])]),t._v(" "),a("h3",{attrs:{id:"开发-专注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发-专注"}},[t._v("#")]),t._v(" 开发 & 专注")]),t._v(" "),a("p",[t._v("因为SwiftUI是Apple近年刚推出的编程语言，虽较易上手，但还不够成熟，甚至本身就有一些bug，国内的解决方案也相对少很多。不少问题只能通过Google解决，（顺便吐槽某些国内博主把Google的答案翻译一下便挂在CSDN等平台售卖，令人厌恶），也发现不少优质博主，真正把自己开发中遇到的问题讲解的很透彻，写了不少解决方案并开源，让我受益匪浅，感谢前辈的分享让我少走很多弯路。随后我也会把期间整理的问题汇成文，发到个人博客中。只有能给别人讲清楚才是真正理解。")]),t._v(" "),a("p",[t._v("由于临近开学，就把实习辞去了，交接完工作后，我便全身心投入到自己的app开发当中。由于疫情原因，开学报道也往后推迟了。为了督促自己早日完成开发，给自己下了DDL：开学前正式上架App Store。在之后的一个月里，每天除了三餐，大部分时间都在敲代码-学习-实现功能。当兴趣成为动力后，便也不觉得累了，看着app一点点成型，也有不少成就感，就算上线后没人使用也很满足了。毕竟开发之初也是因为自己需要一款这样的工具。随后的一个月里熬夜成了日常（随后坏处就来了，脸上开始爆痘…），每天六小时多的睡眠也不影响第二天的兴奋。长时间集中精力也带来了头疼，于是决定每天出门散心一小时，完全放空，什么都不想。也养成了喝水的习惯，每天至少5杯水。")]),t._v(" "),a("h3",{attrs:{id:"内测-上线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内测-上线"}},[t._v("#")]),t._v(" 内测& 上线")]),t._v(" "),a("p",[t._v("随着中间磕磕绊绊的开发，终于在9月完成了第一个版本，开始进入内测阶段，本以为测试一两周就差不多可以提交商店了，但真正开始测试时各种bug不断出现，闪退、数据不刷新、显示异常、兼容性等等，在不断调试下终于能正常使用了。非常感谢这期间参与测试并积极给出建设性意见的用户。在接近完工时。在真正筹备上架工作时发现还有一系列事情需要做，图标、介绍页、App Store展示图、用户协议等等。图标是用户看到app后的第一印象，往往名字+图标就会决定用户是否会点进详情页看。一直使用的图标仅仅由几个字母构成比较草率，因为没有什么设计基础，便去寻求同学的帮助，很幸运成功找到一个学设计的高中同学，感谢设计师同学抽空帮忙制作，果然还是要找专业的人做，高下立判。因为我是属兔的，就加入了兔子的元素。同时也意识到图标本早就该着手考虑，而不是等要上线了才开始筹备。")]),t._v(" "),a("p",[t._v("2021年10月15日，终于正式上架App Store，刚开始一帆风顺，随后几天也简单适配了下iPad，为app加入了自动解析商品链接的功能，也获得了不少用户的喜欢及好评，但随着用户增多，很快很多没测试出来的问题慢慢暴露出来，比如版本适配问题，某些功能因为iOS版本的兼容性问题导致低版本无法正常使用，而测试时仅考虑到了机型的适配没有考虑到版本。也获得首个一星差评，时刻提醒自己以后要考虑周到。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%",align:"center"},attrs:{src:"https://s2.loli.net/2022/07/10/ProfYDUdNKhy7aE.png"}}),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://s2.loli.net/2022/07/10/k1ZqrnESAjwpces.png"}}),t._v(" "),a("h3",{attrs:{id:"盈利模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盈利模式"}},[t._v("#")]),t._v(" 盈利模式")]),t._v(" "),a("p",[t._v("目前的盈利方式只有内购也就是在应用内购买高级功能，因为是买断制，所以其实收益并不稳定，期间也有人联系我关于接入广告的事，但都被我一一拒绝了，可能接入广告短时间内会提高收入，但破坏了用户的体验，虽然可以采取购买Pro来取消广告，但这同样会赶走用户。在我看来用户购买Pro更多的是对开发者的认可，这远大于金钱的价值。而利用种种限制或拉低体验来“强迫”用户购买Pro这并不是我想看到的。事实也正是这样，不少付费用户其实并不知道会有什么额外的功能，仅仅是认可app本身、认可开发者的理念而已。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://s2.loli.net/2022/07/10/BOt8KEVZkxMnlCY.jpg"}}),t._v(" "),a("p",[t._v("目前每年的维护成本在1500元左右，因为开发之初也只是兴趣使然，收益和成本能够达到平衡便也满足了。未来如果有幸有一定用户基础，可能会考虑开发多平台（Android端及eb端），成本到时会大大增加，会员模式也将从买断制改为订阅制，当然之前购买过的用户还是永久使用，算是老用户的福利了。还有一点可以保证的是不会跑路。")]),t._v(" "),a("h3",{attrs:{id:"认可-感谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认可-感谢"}},[t._v("#")]),t._v(" 认可& 感谢")]),t._v(" "),a("blockquote",[a("p",[t._v("instagram的开发者斯特罗姆的程序最初也只有十几个人在使用，都是它的朋友以及朋友的朋友")])]),t._v(" "),a("p",[t._v("而我则要幸运的多，因为在开发初期在即刻上偶尔分享下开发历程，慢慢开始有人关注这个app。内测期间，在V2上也有不少用户参与内测，同时有幸得到几位tg频道主推广。惊喜的是，在上架不到一个月内，被App Store每周编辑推荐收录，曝光率也达到了顶峰，很快又被多个小红书博主推荐。作为一个独立开发来说很幸运能这么快得到大家的认可，这当然是一件令人高兴的事。但对于还是新人的我来说却感到诚惶诚恐。能得到这么多人的认可深感荣幸，也希望以后自己能沉下心来继续完善，不忘初心。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/07/10/Ecjua7tnmhSyb93.jpg",alt:""}})]),t._v(" "),a("p",[t._v("最后感谢在开发期间关注我的人，感谢内测期间积极提供建议和反馈问题的用户，感谢这些帮我推广的博主，感谢帮我设计图标的同学。最后也感谢自己。在开发期间认识了很多有想法的人，结识了一些优秀的开发者，有了一套自己的学习和效率体系，最重要的是有了一个完全由自己运营的作品，这些难得的经历也让我看到了更大的世界，看到了自己的渺小和不足，未来的路还很长，无限进步！")]),t._v(" "),a("h3",{attrs:{id:"未来计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未来计划"}},[t._v("#")]),t._v(" 未来计划")]),t._v(" "),a("p",[t._v("因为目前正在读研，所以我的大部分精力还是会放在学业上，app的更新速度和假期时长成正比。因为自身一直在使用iOS设备，所以只开发了iOS端，也有不少用户在询问Android端和Web端，虽有心但力不足，时间成本对我来说也很重要，暂不会有多平台计划。未来如果有一定用户基础，或是这个产品有明确的发展方向了，或许会考虑其他平台，但在此还是会主要完善iOS端。")]),t._v(" "),a("p",[t._v("感谢你能看到最后，have a nice day！")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("同步发布于")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://sspai.com/post/71462",target:"_blank",rel:"noopener noreferrer"}},[t._v("少数派：「物品指南」- 从idea到上线"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/8erzC_0VBHGFG6v7DoK9VQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("公众号：「物品指南」- 从idea到上线"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);