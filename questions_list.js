const questions = [
    {
        question:
            "中国共产党第一次全国代表大会于1921年在上海和浙江嘉兴召开，会议选举了（ ）任书记。",
        choices: [
            { text: "陈独秀", value: "A" },
            { text: "李大钊", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "“一五”计划，是指我国从1953年到1957年发展国民经济的计划。它是在党中央的直接领导下，由（ ）、（ ）同志主持制定的。",
        choices: [
            { text: "周恩来 陈云", value: "A" },
            { text: "毛泽东 周恩来", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "全国人大常委会会议12月30日表决通过了关于召开十四届全国人大一次会议的决定。根据决定，十四届全国人大一次会议于2023年3月5日在北京召开。政协第十三届全国委员会召开主席会议，建议全国政协十四届一次会议于2023年3月4日在北京召开，请问两会的全称是?	",
        choices: [
            {
                text: "中华人民共和国全国人民代表大会和中国人民政治协商会议",
                value: "B",
            },
            { text: "中华人民共和国全国人民代表大会和全国人民政治协商会议", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "2022 年 10 月 16 日，习近平在中国共产党第二十次全国代表大会上的报告指出，我们深入推进全面从严治党，坚持打铁必须自身硬，提出和落实新时代（   ）总要求。",
        choices: [
            { text: "党的政治建设", value: "A" },
            { text: "党的建设", value: "B" },
        ],
        correct: "B",
    },
    {
        question:
            "2022 年 10 月 16 日，习近平在中国共产党第二十次全国代表大会上的报告指出，拥有马克思主义科学理论指导是我们党（    ）的根本所在。",
        choices: [
            { text: "坚定信仰信念、把握历史主动", value: "A" },
            { text: "坚定信仰信念、把握发展规律", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "1928年6月18日至7月11日，中国共产党第六次全国代表大会在（ ）召开。",
        choices: [
            { text: "莫斯科", value: "A" },
            { text: "上海", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "抗战时期清华、北大和南开南迁昆明组成西南联大，在极度艰苦的条件下仍弦歌不辍，创造了战时高等教育的奇迹。请问下面歌词中描写西南联大的是哪一句？",
        choices: [
            {
                text: "千秋耻，终当雪，中业兴，继往烈。",
                value: "A",
            },
            {
                text: "西山苍苍，东海茫茫，吾校庄严，巍然中央。",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "中国从1953年开始制定第一个“五年计划”。从（）起，“五年计划”改为“五年规划”。",
        choices: [
            { text: "十一五", value: "A" },
            { text: "十三五", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "十四五规划强调“坚持（）在我国现代化建设全局中的核心地位。",
        choices: [
            { text: "创新", value: "A" },
            { text: "发展", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "党的四大最重要的贡献是第一次明确提出了无产阶级在（ ）革命中的领导权和（ ）问题。",
        choices: [
            { text: "民主 工农联盟", value: "A" },
            { text: "社会主义 资产阶级", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "1949年3月,党的七届二中全会在河北西柏坡召开。会议着重讨论了党的工作重心的战略转移,即（）的问题。",
        choices: [
            { text: "从乡村转移到城市", value: "A" },
            {
                text: "从新民主主义社会转变到社会主义社会",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "我国历史上的社会主义“过渡时期”是指（）建国到抗美援朝胜利。",
        choices: [
            { text: "全国解放到社会主义改造基本完成", value: "A" },
            { text: "建国到社会主义改造基本完成", value: "B" },
        ],
        correct: "B",
    },
    {
        question:
            "1960年代初，我国为进行经济恢复和建设，实施（）的工作方针",
        choices: [
            { text: "“调整，巩固，充实，提高”", value: "A" },
            { text: "“一体两翼，一化三改”", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "1972年，时任美国总统尼克松访问中国，以下哪项为此次访问直接达成的结果：",
        choices: [
            {
                text: "推动美国乒乓球队访华，开启中美两国的民众交流",
                value: "A",
            },
            { text: "两国签署《上海公报》", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "党的十四大明确了我国经济改革的目标是：",
        choices: [
            { text: "建立社会主义市场经济体制", value: "A" },
            {
                text: "建立以公有制为主体，多种所有制经济共同发展的混合所有制",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "党的二十届二中全会审议通过了《党和国家机构改革方案》，同意将其中涉及国务院机构改革的内容提交______________审议。",
        choices: [
            { text: "第十四届政治协商会议第一次会议", value: "A" },
            {
                text: "第十四届全国人民代表大会第一次会议",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "党的二大的主要功绩是，在中国近代史上第一次明确地提出了（ ）的民主革命纲领。",
        choices: [
            { text: "反帝反封建", value: "A" },
            {
                text: "农村包围城市，武装夺取政权",
                value: "A",
            },
        ],
        correct: "A",
    },
    {
        question:
            "“一国两制”的根本宗旨是维护国家主权、安全、发展利益，保持香港、澳门长期繁荣稳定；____是“一国两制”方针的最高原则。",
        choices: [
            { text: "维护国家主权、安全、发展利益", value: "A" },
            {
                text: "保持香港、澳门长期繁荣稳定",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "党的十八大以来，以习近平同志为核心的党中央把粮食安全作为治国理政的头等大事，提出确保____的新粮食安全观，牢牢把住粮食安全主动权，带领亿万人民走出了一条中国特色粮食安全之路。",
        choices: [
            { text: "谷物完全自给、口粮基本安全", value: "A" },
            {
                text: "谷物基本自给、口粮绝对安全",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "据新华社2022年8月18日报道，中共中央总书记、国家主席、中央军委主席习近平近日在辽宁考察时指出，小康梦、强国梦、中国梦，归根到底是老百姓的____。中国共产党的一切奋斗都是____。",
        choices: [
            { text: "“幸福梦” 为民族谋复兴", value: "A" },
            {
                text: "“幸福梦” 为人民谋幸福",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "据新华社2022年8月18日报道，中共中央总书记、国家主席、中央军委主席习近平近日在辽宁考察时强调，党中央实施创新驱动发展战略，格外重视____，格外重视____，努力提升我国产业水平和实力，推动我国从经济大国向经济强国、制造强国转变。",
        choices: [
            { text: "自主创新 创新环境建设", value: "A" },
            {
                text: "制度创新 创新环境建设",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "________是中国革命具有决定意义的新起点。毛泽东同志领导军民在井冈山建立第一个农村革命根据地，党领导人民打土豪、分田地。",
        choices: [
            { text: "从进攻大城市转为向农村进军", value: "A" },
            {
                text: "中国共产党成立",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "一九五四年，召开第一届全国人民代表大会第一次会议，通过了__________。",
        choices: [
            {
                text: "《中国人民政治协商会议共同纲领》",
                value: "A",
            },
            {
                text: "《中华人民共和国宪法》",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "党坚持独立自主的和平外交政策，倡导和坚持和平共处五项原则，坚定维护国家独立、主权、尊严，支持和援助世界被压迫民族解放事业、新独立国家建设事业和各国人民正义斗争，反对_____________，彻底结束了旧中国的屈辱外交。",
        choices: [
            {
                text: "帝国主义、封建主义、官僚资本主义",
                value: "A",
            },
            {
                text: "帝国主义、霸权主义、殖民主义、种族主义",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "改革开放以后，我国人民生活显著改善，社会治理明显改进。同时，随着时代发展和社会进步，人民对美好生活的向往更加强烈，对民主、法治、公平、正义、安全、环境等方面的要求日益增长。党中央强调，___________就是我们的奋斗目标。",
        choices: [
            { text: "人民对美好生活的向往", value: "A" },
            {
                text: "增进民生福祉",
                value: "B",
            },
        ],
        correct: "A",
    },

    // 判断题
    {
        question:
            "毛泽东在党的七大明确地提出了“马克思主义的中国化”命题。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "我国现行的宪法是1983年颁布实施的。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "“第二个历史决议”是指1981年6月十一届六中全会通过的《关于若干历史问题的决议》。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "党的三大之后，在中国共产党的推动下，孙中山先生对国民党进行了改组，确定了联俄、联共、扶助农工的三大政策，召开了国共合作的国民党第一次全国代表大会，第一次国共合作正式建立。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "在革命斗争中，党形成理论联系实际、密切联系群众、批评和自我批评三大法宝。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "在革命斗争中，党坚持统一战线、武装斗争、党的建设三大优良作风。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "党中央提出，如今我国经济发展进入新常态，已由高速增长阶段转向高质量发展阶段，面临增长速度换挡期、结构调整阵痛期、前期刺激政策消化期“三期叠加”的复杂局面，传统发展模式难以为继。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "党中央强调，理想信念是共产党人精神上的“钙”，共产党人如果没有理想信念，精神上就会“缺钙”，就会得“软骨病”，必然导致政治上变质、经济上贪婪、道德上堕落、生活上腐化。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "贯彻新发展理念，建设现代化经济体系，必须坚持质量第一、效益优先，以供给侧结构性改革为主线。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "建设现代化经济体系，必须把发展经济的着力点放在虚拟经济上，把提高供给体系质量作为主攻方向，显著增强我国经济质量优势。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "中国共产党在中共六大第一次把毛泽东思想作为党的指导思想载入党章。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "党的十三届六中全会明确指出：“我国经济体制改革的目标是建立社会主义市场经济体制”。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "毛泽东在《星星之火，可以燎原》中提出中国革命“以乡村为中心”思想。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "第一次提出“建设有中国特色的社会主义理论”这一概念是在党的十一届三中全会。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "1949年中华人民共和国成立后，第一个承认新中国的西方国家是英国，第一个与新中国建立大使级外交关系的西方国家是瑞典。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "1988年9月5日邓小平在会见捷克斯洛伐克总统胡萨克时，提出了“一国两制”的著名论断。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "发展经济的根本目的是提高全国人民的生活水平和质量。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "2019 年 9 月 20 日，习近平在中央政协工作会议暨庆祝中国人民政治协商会议成立 70 周年大会上的讲话中，提出了新时代加强和改进人民政协工作的总体要求，指出新时代做好人民政协工作的中心环节是加强思想政治引领，广泛凝聚共识。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "近代以来中华民族面临着争取民族独立、人民解放和实现国家富强、人民富裕两大历史任务。近代中国的历史表明,要争得民族独立和人民解放,必须首先进行反帝反封建的民主革命。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "马克思出生于布鲁塞尔。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "社会主义民主政治的本质是人民民主专政。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "社会主义道德的核心和集中体现是为人民服务。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "社会主义民主政治的本质是无产阶级政党的领导。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "党执政后的最大危险是腐败。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "无产阶级政党的第一个党纲是《共产党宣言》。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },

    // 一二·九运动相关题目（20）
    {
        question:
            "一二·九运动是为了（）",
        choices: [
            { text: "反对封建军阀", value: "A" },
            { text: "抗日救国", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "一二·九运动最先在（）爆发，然后迅速扩展至全国。",
        choices: [
            { text: "北平", value: "A" },
            { text: "上海", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "一二·九运动是在（）的领导下展开的。",
        choices: [
            { text: "中国共产党", value: "A" },
            { text: "全国学联", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "一二·九运动爆发于（）年。",
        choices: [
            { text: "1935", value: "A" },
            { text: "1936", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "刘少奇在延安青年纪念“一二·九”运动大会上的讲话中曾指出，“一二·九”运动是划分中国  ____  的一个标志。",
        choices: [
            { text: "反动时期与革命时期", value: "A" },
            { text: "旧民主主义革命时期与新民主主义革命时期", value: "B",},
        ],
        correct: "A",
    },



];