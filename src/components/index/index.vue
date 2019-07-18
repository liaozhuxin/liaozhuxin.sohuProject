
<template>
	<main>
		<div id="bigAdBox">
			<adBox></adBox>
		</div>
		<header class="header" id="headerfix">
			<h1>
				<img src="../../assets/indexPic/sohuLogo.png" height="30px"/>
			</h1>
			<router-link to="/searching"><input type="text" value="梅西公开拒绝领奖" /></router-link>
			<span class="famousWebBtn"><router-link to="/famousWeb">名站</router-link></span>
			<router-link to="/login"><span class="headPortrait"></span></router-link>
		</header>
		<div class="headerMenuBox">
			<ul>
				<li><router-link to="/newsPage">新闻</router-link></li>
				<li>财经</li>
				<li>体育</li>
				<li><router-link to="/entertainmentNews">娱乐</router-link></li>
				<li>军事</li>
				<li><router-link to="/galleryIndex">图库</router-link></li>
				<li>健康</li>
				<li>汽车</li>
				<li>房产</li>
				<li><router-link to="/novel">小说</router-link></li>
				<li>历史</li>
				<li>科技</li>
			</ul>
			<div class="drowDownPicBox" @click="menuSlideDown($event)"><span class="drowDownPic"></span></div>
		</div>
		<transition @before-enter="be" @enter="e" @after-enter="ae" @before-leave="bl" @leave="l" @after-leave="al">
			<div class="headerMenuBoxT" v-show="slide">
				<ul>
					<li>教育</li>
					<li>母婴</li>
					<li>时尚</li>
					<li>文化</li>
					<li>专题</li>
					<li>警法</li>
					<li>游戏</li>
					<li>动漫</li>
					<li>旅游</li>
					<li>美食</li>
					<li>星座</li>
					<li>搞笑</li>
					<li>宠物</li>
					<li>直播</li>
					<li>NBA</li>
					<li>评测</li>
					<li>短视频</li>
				</ul>
			</div>
		</transition>			
		<ul class="mediaProgramMenuBox">
			<li><i class="tvIcon"></i>视频</li>
			<li>自媒体</li>
			<li>电视剧</li>
			<li>美剧</li>
			<li>电影</li>
		</ul>
		<div class="viewPagerBox">
			<span class="viewPagerIndex">{{num}}/7</span>
			<mt-swipe :show-indicators="false" :auto="4000" @change="handleChange">
			  <mt-swipe-item>
			  	<img src="../../assets/indexPic/viewPager1.jpg" width="100%"/>
			  	<p class="viewPagerText">伊朗正式宣布将突破浓缩铀丰度限制</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/indexPic/viewPager2.jpg" width="100%"/>
			  	<p class="viewPagerText">田瀚告白毕业季：练厨艺是为喜欢的人</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/indexPic/viewPager3.jpg" width="100%"/>
			  	<p class="viewPagerText">5G突如其来 运营商面临两道"选择题"</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/indexPic/viewPager4.jpg" width="100%"/>
			  	<p class="viewPagerText">终于出自动档了！果断来一辆！一...</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/indexPic/viewPager5.jpg" width="100%"/>
			  	<p class="viewPagerText">美加州连遭强震 公路铁路被震成"波浪线"</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/indexPic/viewPager6.jpg" width="100%"/>
			  	<p class="viewPagerText">与智利悍将爆发冲突 梅西生涯第2次染红</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/indexPic/viewPager7.jpg" width="100%"/>
			  	<p class="viewPagerText">石油巨无霸沙特阿美或重启IPO准备工作</p>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="firstTextBox">
			<p><router-link to="/indexArticle">习近平要求全力以赴打赢这场攻坚战</router-link></p>
			<p>习近平： 准确识变、科学应变、主动求变</p>
			<p>新一轮强降雨来了 今日锁定黔桂湘赣等地</p>
		</div>
		<div class="gapBox"></div>
		<section class="allNewsBox">
			<!--热点新闻-->
			<div class="importantNewsBox next">
				<div class="importantNewsHeader" :class="{ceilling:hName=='im'}">
					<h4>要闻</h4>
					<span>＞</span>
					<ul>
						<li>视频</li>
						<li>图库</li>
						<li>专题</li>
						<li>军事</li>
					</ul>
				</div>
				<ul>
					<li>铭记！七七事变82周年，这些细节不能忘</li>
					<li>"80后"将领不到养老金？最新回应来了</li>
					<li>公安局卸任女副局长被双开:纵容配偶谋利</li>
					<li>录音无距离,录像不断秒！仅198HXJ<span class="advertisementbox">广告</span></li>
					<li v-for="(item,index) in indexImportNews">{{item}}</li>
					<li>
						<p class="adText">说飞机票贵的，是你没用对APP！年轻人不妨来试试！</p>
					</li>
				</ul>
			</div>
		<div class="gapBox"></div>
		<p class="advertisementContain">福特公司的成功之道，来学习！<span class="advertisementbox">广告</span></p>
		<div class="gapBox"></div>
		<!--娱乐新闻-->
		<div class="entertainmentNewsBox next">
				<div class="entertainmentNewsHeader" :class="{ceilling:hName=='entertain'}">
					<h4>娱乐</h4>
					<span>＞</span>
					<ul>
						<li>美图</li>
						<li>电视</li>
						<li>电影</li>
					</ul>
				</div>
				<div class="entertainmentNewsPicbox">
					<div class="entNewsPicBoxL">
						<img src="../../assets/indexPic/entertainmentNewsPic1.jpg" width="100%"/>
						<p>李亚鹏女友晒美照 身材一点也不输王菲</p>
					</div>
					<div class="entNewsPicBoxR">
						<img src="../../assets/indexPic/entertainmentNewsPic2.jpg" width="100%"/>
						<p>刘亦菲版《花木兰》曝光 竟然被化成这样</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in entertainmentNews">{{item}}</li>
					<li>录音无距离,录像不断秒！仅198HXJ<span class="advertisementbox">广告</span></li>
				</ul>
			</div>
				
			<!--广告-->
			<div class="gapBox"></div>
			<div class="advertisementBox">
				<p class="advertisementContain">拉布拉多多少钱？免费咨询价格实惠<span class="advertisementbox">广告</span></p>
				<p class="advertisementContainPic">
					<span class="adPictextBox">二手车市场水这么深，你还敢买吗</span>
					<img src="../../assets/indexPic/advertisementPic.jpg" width="30.4%"/>
					<span class="advertisementbox">广告</span>
				</p>
			</div>
			<!--间隔-->
			<div class="gapBox"></div>
			
			<!--体育新闻-->
			<div class="PENewsBox next">
				<div class="PENewsHeader" :class="{ceilling:hName=='pe'}">
					<h4>体育</h4>
					<span>＞</span>
					<ul>
						<li>直播</li>
						<li>中超</li>
						<li>CBA</li>
						<li>NBA</li>
					</ul>
				</div>
			<div class="PENewsPicbox">
					<div class="PENewsPicBoxL">
						<img src="../../assets/indexPic/PENewsPic1.jpg" width="100%"/>
						<p>美洲杯-巴西3-1夺冠 阿尔维斯高举奖杯</p>
					</div>
					<div class="PENewsPicBoxR">
						<img src="../../assets/indexPic/PENewsPic2.jpg" width="100%"/>
						<p>女排3-1土耳其摘铜 龚翔宇振臂欢呼</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in PENews">{{item}}</li>
				</ul>
			</div>
			
			<!--间隔与新闻-->
			<div class="gapBox"></div>
			<div class="advertisementBox">
				<p class="advertisementContain">拉布拉多多少钱？免费咨询价格实惠<span class="advertisementbox">广告</span></p>
				<p class="advertisementContainPic">
					<span class="adPictextBox">二手车市场水这么深，你还敢买吗</span>
					<img src="../../assets/indexPic/advertisementPic.jpg" width="30.4%"/>
					<span class="advertisementbox">广告</span>
				</p>
			</div>
			<div class="gapBox"></div>
			
			<!--财经新闻-->
			<div class="financeNewsBox next">
				<div class="financeNewsHeader" :class="{ceilling:hName=='finance'}">
					<h4>财经</h4>
					<span>＞</span>
					<ul>
						<li>股票</li>
						<li>理财</li>
						<li>宏观</li>
					</ul>
				</div>
				<div class="financeSituation">
					<div class="financeSituationHeader">
						<div class="textSwipe">
							<ul>
								<li>上证指数<span>2933.36&nbsp;-77.70</span></li>
								<li>深证成指<span>9186.29&nbsp;-256.92</span></li>
								<li>上证指数<span>2933.36&nbsp;-77.70</span></li>
							</ul>
						</div>
						<p>行情中心</p>
					</div>
					<div class="financeSearchBox">
						<input type="text"  value="代码/中文/拼音缩写" />
						<span class="financeSearchBtn">查行情</span>
						<span class="MyfinanceSearch">我的自选</span>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in financeNews">{{item}}</li>
					<li>录音无距离,录像不断秒！仅198HXJ<span class="advertisementbox">广告</span></li>
					
				</ul>
			</div>
			<!--间隔与新闻-->
			<div class="gapBox"></div>
			<p class="advertisementContain">福特公司的成功之道，来学习！<span class="advertisementbox">广告</span></p>
			<div class="gapBox"></div>
		
		<!--汽车类新闻-->	
		<div class="carNewsBox next">
				<div class="carNewsHeader" :class="{ceilling:hName=='car'}">
					<h4>汽车</h4>
					<span>＞</span>
					<ul>
						<li>精彩视频</li>
						<li>好车榜</li>
						<li>降价</li>
						<li>选车</li>
					</ul>
				</div>
			<div class="carNewsPicbox">
					<div class="carNewsPicBoxL">
						<img src="../../assets/indexPic/carNewsPic1.jpg" width="100%"/>
						<p>差价近7万 沃尔沃XC40热销与顶配啥区别?</p>
					</div>
					<div class="PENewsPicBoxR">
						<img src="../../assets/indexPic/carNewsPic2.jpg" width="100%"/>
						<p>各国最经典车盘点 哪款让你难忘?</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in carNews">{{item}}</li>
					<li>录音无距离,录像不断秒！仅198HXJ<span class="advertisementbox">广告</span></li>
					
				</ul>
			</div>
			<div class="gapBox"></div>
			<p class="advertisementContain">拉布拉多多少钱？免费咨询价格实惠<span class="advertisementbox">广告</span></p>
			<div class="gapBox"></div>
		<!--房产新闻-->
		<div class="houseNewsBox next">
				<div class="houseNewsHeader" :class="{ceilling:hName=='house'}">
					<h4>房产</h4>
					<span>＞</span>
					<ul>
						<li>家居</li>
						<li>租房</li>
						<li>二手房</li>
						<li>新房</li>
					</ul>
				</div>
			<div class="houseNewsPicbox">
					<div class="houseNewsPicBoxL">
						<img src="../../assets/indexPic/houseNewsPic1.jpg" width="100%"/>
						<p>即将破6？广纸新城一线江景洋房悄然涨价</p>
					</div>
					<div class="houseNewsPicBoxR">
						<img src="../../assets/indexPic/houseNewsPic2.jpg" width="105%"/>
						<p>汉溪精选必看四室刚需房</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in house">{{item}}</li>
					<li>录音无距离,录像不断秒！仅198HXJ<span class="advertisementbox">广告</span></li>
					
				</ul>
			</div>
			<div class="gapBox"></div>
			<p class="advertisementContain">拉布拉多多少钱？免费咨询价格实惠<span class="advertisementbox">广告</span></p>
			<div class="gapBox"></div>
		<!--军事新闻-->
		<div class="militaryNewsBox next">
				<div class="militaryNewsHeader" :class="{ceilling:hName=='miliary'}">
					<h4>军事</h4>
					<span>＞</span>
					<ul>
						<li>兵器</li>
						<li>国防</li>
						<li>环球</li>
					</ul>
				</div>
			<div class="militaryNewsPicbox">
					<div class="militaryNewsPicBoxL">
						<img src="../../assets/indexPic/militaryNewsPic1.jpeg" width="100%"/>
						<p>“辽宁”航母远航归来新照亮相，歼-15上舰，双航母时代临近</p>
					</div>
					<div class="PENewsPicBoxR">
						<img src="../../assets/indexPic/militaryNewsPic2.jpeg" width="100%"/>
						<p>韩国五代机：梦想与现实之间的差距（4）“中国能我也能”的错觉</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in militaryNews">{{item}}</li>
				</ul>
			</div>
			
			<!--间隔与新闻-->
			<div class="gapBox"></div>
			<p class="advertisementContain">拉布拉多多少钱？免费咨询价格实惠<span class="advertisementbox">广告</span></p>
			<div class="gapBox"></div>
			<div class="picadBox">
				<div class="adPicListBox">
					<ul class="adPicList">
						<li><img src="../../assets/indexPic/adPic1.jpg" width="105%"/><p>ui怎么学</p></li>
						<li><img src="../../assets/indexPic/adPic2.jpg" width="99%"/><p>全新君越上市</p></li>
						<li><img src="../../assets/indexPic/adPic3.jpg" width="99%"/><p>ui班</p></li>
					</ul>
					<div class="adCloseMsgBox">
						<span class="adCloseText">
							广告
						</span>
						<span class="adCloseBtn">
							X
						</span>
					</div>
				</div>
				
				<div class="adCloseSugBox">
					
				</div>
			</div>
			<div class="gapBox"></div>
		
		<!--科技-->
		<div class="militaryNewsBox next">
				<div class="militaryNewsHeader" :class="{ceilling:hName=='science'}">
					<h4>科技</h4>
					<span>＞</span>
					<ul>
						<li>科学</li>
						<li>5G</li>
						<li>通讯</li>
						<li>智能硬件</li>
					</ul>
				</div>
			<div class="militaryNewsPicbox">
					<div class="militaryNewsPicBoxL">
						<img src="../../assets/indexPic/sciencePic1.jpeg" width="100%"/>
						<p>面子税?苹果耳机用中国技术，溢价至1千元</p>
					</div>
					<div class="PENewsPicBoxR">
						<img src="../../assets/indexPic/sciencePic2.jpeg" width="100%"/>
						<p>小米9部分推送MIUI 10.9.7.11开发版，安卓Q内测包</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in scienceNews">{{item}}</li>
					<li>录音无距离,录像不断秒！仅198HXJ<span class="advertisementbox">广告</span></li>
					
				</ul>
			</div>
			<div class="gapBox"></div>
			<p class="advertisementContain">拉布拉多多少钱？免费咨询价格实惠<span class="advertisementbox">广告</span></p>
			<div class="gapBox"></div>
		<!--专题-->
		<div class="importantNewsBox next">
				<div class="importantNewsHeader" :class="{ceilling:hName=='special'}">
					<h4>专题</h4>
					<span>＞</span>
				</div>
				<ul>
					<li v-for="(item,index) in specialTopic">{{item}}</li>
					<li>石斛 选购小窍门！<span class="advertisementbox">广告</span></li>
					
				</ul>
			</div>
		<div class="gapBox"></div>
		<p class="advertisementContain">福特公司的成功之道，来学习！<span class="advertisementbox">广告</span></p>
		<div class="gapBox"></div>
		
		<!--历史-->
		<div class="militaryNewsBox next">
				<div class="militaryNewsHeader" :class="{ceilling:hName=='history'}">
					<h4>历史</h4>
					<span>＞</span>
					<ul>
						<li>隋唐</li>
						<li>三国</li>
						<li>清史</li>
					</ul>
				</div>
			<div class="militaryNewsPicbox">
					<div class="militaryNewsPicBoxL">
						<img src="../../assets/indexPic/historyPic.jpeg" width="100%"/>
						<p>梁实秋与鲁迅的一面之缘</p>
					</div>
					<div class="PENewsPicBoxR">
						<img src="../../assets/indexPic/historyPic2.jpeg" width="100%"/>
						<p>中国古代由南向北的进攻为何大多都以失败告终？</p>
					</div>
				</div>
				<ul>
					<li>娄山关战斗：红军长征以来的第一场大胜仗</li>
					<li>明朝开国五虎将，每位都是不可一世的战神</li>
					<li>孙权的弟媳是怎样为丈夫孙翊报仇的？</li>
					<li>被“性感”吃掉的柳岩！<span class="advertisementbox">广告</span></li>
					<li>航海先行者的葡萄牙，为何会冷遇哥伦布？</li>
					<li>北洋军阀的纲纪宿命：以利为本，以谊为用</li>
					<li>司马懿跟曹操斗法，真真一个敢说一个敢做</li>
				</ul>
			</div>
			<div class="gapBox"></div>
			<div class="advertisementBox">
				<p class="advertisementContain">拉布拉多多少钱？免费咨询价格实惠<span class="advertisementbox">广告</span></p>
				<p class="advertisementContainPic">
					<span class="adPictextBox">二手车市场水这么深，你还敢买吗</span>
					<img src="../../assets/indexPic/advertisementPic.jpg" width="30.4%"/>
					<span class="advertisementbox">广告</span>
				</p>
			</div>
			<div class="gapBox"></div>
		<!--文化-->
		<div class="militaryNewsBox next">
				<div class="militaryNewsHeader" :class="{ceilling:hName=='culture'}">
					<h4>文化</h4>
					<span>＞</span>
					<ul>
						<li>佳人</li>
						<li>人物</li>
						<li>读书</li>
						<li>图片</li>
					</ul>
				</div>
			<div class="militaryNewsPicbox">
					<div class="militaryNewsPicBoxL">
						<img src="../../assets/indexPic/culturePic1.jpeg" width="100%"/>
						<p>永远年轻，永远热泪盈眶 | 书单</p>
					</div>
					<div class="PENewsPicBoxR">
						<img src="../../assets/indexPic/culturePic2.jpeg" width="100%"/>
						<p>周晓枫《星鱼》：从星辰跃向大海，书写生命的诗性与辽阔</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in culture">{{item}}</li>
					<li>录音无距离,录像不断秒！仅198HXJ<span class="advertisementbox">广告</span></li>
					
				</ul>
		</div>
			<div class="gapBox"></div>
			<div class="advertisementBox">
				<p class="advertisementContainPic">
					<span class="adPictextBox">这里有你想要的越野车降价信息，这车降价3万，等你来！</span>
					<img src="../../assets/indexPic/adPic4.jpg" width="30.4%"/>
					<span class="advertisementbox">广告</span>
				</p>
			</div>
			<div class="gapBox"></div>
			
			<!--时尚-->
		<div class="militaryNewsBox next">
				<div class="militaryNewsHeader" :class="{ceilling:hName=='fashion'}">
					<h4>时尚</h4>
					<span>＞</span>
					<ul>
						<li>时装</li>
						<li>奢品</li>
						<li>美容</li>
					</ul>
				</div>
			<div class="militaryNewsPicbox">
					<div class="militaryNewsPicBoxL">
						<img src="../../assets/indexPic/fashionPic1.jpeg" width="100%"/>
						<p>港姐15强“整妆待发”，这素质大家还满意？</p>
					</div>
					<div class="PENewsPicBoxR">
						<img src="../../assets/indexPic/fashionPic2.jpeg" width="100%"/>
						<p>被“性感”吃掉的柳岩！</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in fashion">{{item}}</li>
				</ul>
		</div>
			<div class="gapBox"></div>
			<div class="advertisementBox">
				<p class="advertisementContain">拉布拉多多少钱？免费咨询价格实惠<span class="advertisementbox">广告</span></p>
				<p class="advertisementContainPic">
					<span class="adPictextBox">二手车市场水这么深，你还敢买吗</span>
					<img src="../../assets/indexPic/advertisementPic.jpg" width="30.4%"/>
					<span class="advertisementbox">广告</span>
				</p>
			</div>
			<div class="gapBox"></div>
		
		<!--教育-->
		<div class="importantNewsBox next">
				<div class="importantNewsHeader" :class="{ceilling:hName=='educa'}">
					<h4>教育</h4>
					<span>＞</span>
					<ul>
						<li>资讯</li>
						<li>家长帮</li>
						<li>校园</li>
					</ul>
				</div>
				<ul>
					<li v-for="(item,index) in education">{{item}}</li>
				</ul>
			</div>
		<div class="gapBox"></div>
		<p class="advertisementContain">福特公司的成功之道，来学习！<span class="advertisementbox">广告</span></p>
		<div class="gapBox"></div>
		
		<!--小说-->
		<div class="novelNewsBox next">
				<div class="novelNewsHeader" :class="{ceilling:hName=='novel'}">
					<h4>小说</h4>
					<span>＞</span>
					<ul>
						<li>排行</li>
						<li>免费</li>
						<li>书架</li>
					</ul>
				</div>
			<div class="novelNewsAllPicbox">
					<div class="novelNewsPicBox">
						<img src="../../assets/indexPic/novelPic1.jpg" width="100%"/>
						<p>我为国家修文物</p>
					</div>
					<div class="novelNewsPicBox">
						<img src="../../assets/indexPic/novelPic2.jpg" width="100%"/>
						<p>交锋</p>
					</div>
					<div class="novelNewsPicBox">
						<img src="../../assets/indexPic/novelPic3.jpg" width="100%"/>
						<p>后手</p>
					</div>
					<div class="novelNewsPicBox">
						<img src="../../assets/indexPic/novelPic4.jpg" width="100%"/>
						<p>材料帝国</p>
					</div>
				</div>
				<ul>
					<li v-for="(item,index) in novel">{{item}}</li>
				</ul>
			</div>
			<div class="gapBox"></div>
			
		<!--健康，母婴-->
		<div class="importantNewsBox next" v-for="(item,index) in dubleTitle">
				<div class="importantNewsHeader" :class="{ceilling:hName==item.title}">
					<h4>{{item.titleL}}</h4>
					<span>＞</span>
					<h4>{{item.titleR}}</h4>
					<span>＞</span>
				</div>
				<ul>
					<li v-for="(item,index) in dubleTitle[index].contain">{{item}}</li>
					<li>录音无距离,录像不断秒！仅198HXJ<span class="advertisementbox">广告</span></li>
					
				</ul>
				<div class="gapBox"></div>
			</div>
		<div class="gapBox"></div>
		<p class="advertisementContain">福特公司的成功之道，来学习！<span class="advertisementbox">广告</span></p>
		<div class="gapBox"></div>
			<!--生活服务-->
			<div class="lifeServiceBox next">
				<div class="lifeServiceHeader">
					<h4>生活服务</h4>
				</div>
				<ul>
					<li>
						<img src="../../assets/indexPic/local-service.png"/>
						<p>本地服务</p>
					</li>
					<li>
						<img src="../../assets/indexPic/high-price-job.png" />
						<p>高薪工作</p>
					</li>
					<li>
						<img src="../../assets/indexPic/second-house.png" />
						<p>优质房产</p>
					</li>
					<li>
						<img src="../../assets/indexPic/tv-repair.png" />
						<p>家电维修</p>
					</li>
					<li>
						<img src="../../assets/indexPic/second-good.png" />
						<p>二手好货</p>
					</li>
					<li>
						<img src="../../assets/indexPic/house-making.png" />
						<p>家政服务</p>
					</li>
					<li>
						<img src="../../assets/indexPic/house-move.png" />
						<p>放心搬家</p>
					</li>
					<li>
						<img src="../../assets/indexPic/rent-house.png" />
						<p>热租房源</p>
					</li>
					<li>
						<img src="../../assets/indexPic/second-car.png" />
						<p>二手好车</p>
					</li>
					<li>
						<img src="../../assets/indexPic/pet-zone.png" />
						<p>萌宠专区</p>
					</li>
				</ul>
			</div>
			<div class="gapBox"></div>
			<!--网站地图-->
			<div class="webMapBox ">
				<div class="webMapHeader">
					<h4>网站地图</h4>
				</div>
				<ul>
					<li>新闻</li>
					<li>财经</li>
					<li>体育</li>
					<li>娱乐</li>
					<li>军事</li>
					<li>图库</li>
					<li>汽车</li>
					<li>房产</li>
					<li>时尚</li>
					<li>小说</li>
					<li>历史</li>
					<li>科技</li>
				</ul>
			</div>
		</section>
		<footer>
			<p class="sugguestAcoorperationText">用户反馈 &nbsp;&nbsp;&nbsp;合作</p>
			<p class="footerText">Copyright © 2019 Sohu All Rights Reserved</p>
			<p class="footerText">搜狐公司 版权所有</p>
		</footer>
		
		<!--测试-->
		<!--<p style="position: fixed;top: 0;left: 0;width: 100%;height: 50px; background-color: lightgreen; z-index: 99999;">{{scrollTop1}}</p>-->
		<!-------------回顶与下一屏---------------------->
		<div class="backTopAslideDownBox" v-show="backtopsituat">
			<div>
				<span class="backTop" @click="backTop()"></span>
			</div>
			<div v-show="nextScreeBox">
				<span class="slideDown" @click="nextScree()"></span>
			</div>
		</div>
		<!--------------------每一部分的吸顶效果------------------------------->
		<!--<p class=""></p>-->
	</main>
</template>
<script>
	import adBox from "./adBox.vue"
	export default({
		data(){
			return{
				num:1,
				slide:false,
				screenNum:0,
				backtopsituat:true,
				indexImportNews:[],
				entertainmentNews:[],
				PENews:[],
				financeNews:[],
				carNews:[],
				militaryNews:[],
				scienceNews:[],
				specialTopic:[],
				culture:[],
				fashion:[],
				education:[],
				novel:[],
				dubleTitle:[],
				house:[],
				contain:[],
				hName:'',
				fixClassNameList:['im','entertain','pe','finance','car','house','miliary','science','special','history','culture','fashion','educa','novel','baby','travel','constellation','cartoon','video'],
				nextScreeBox:true,
				scrollTop1:0,
				textSwipeNum:0
			}
			
		},
		components:{
			'adBox':adBox
		},
		mounted(){
			
			var _this = this;
			var oNext = document.getElementsByClassName('next')
			document.onscroll = function(){
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				 //回顶盒子的显示与隐藏
				if(scrollTop>300){
					_this.backtopsituat=true;
					
				}else{
					_this.backtopsituat = false;
				}
				
			//比第一模块小，比第14个模块大 让头部重新吸顶
				if(scrollTop < (oNext[0].offsetTop-44) || scrollTop > (oNext[19].offsetTop-44)){
					headerfix.style.position = "fixed";
					_this.hName = '';
				}
				//每一个模块吸顶,下一模块的num改变
				if(scrollTop > (oNext[0].offsetTop-44) && scrollTop < (oNext[1].offsetTop-44)){
					console.log('first')
					_this.hName =  _this.fixClassNameList[0];
					_this.screenNum = 1;
					headerfix.style.position = "static";
				}
				if(scrollTop > (oNext[1].offsetTop-44)&&scrollTop < (oNext[2].offsetTop-44)){
					_this.hName = _this.fixClassNameList[1];
					_this.screenNum = 2;
					headerfix.style.position = "static";
				}
				if(scrollTop > (oNext[2].offsetTop-44)&&scrollTop < (oNext[3].offsetTop-44)){
					_this.hName = _this.fixClassNameList[2];
					_this.screenNum = 3;
					headerfix.style.position = "static";
				}
				if(scrollTop > (oNext[3].offsetTop-44)&&scrollTop < (oNext[4].offsetTop-44)){
					_this.hName = _this.fixClassNameList[3];
					_this.screenNum = 4;
					headerfix.style.position = "static";
				}
				if(scrollTop > (oNext[4].offsetTop-44)&&scrollTop < (oNext[5].offsetTop-44)){
					_this.hName = _this.fixClassNameList[4];
					_this.screenNum = 5;
					headerfix.style.position = "static";
				}
				if(scrollTop > (oNext[5].offsetTop-44)&&scrollTop < (oNext[6].offsetTop-44)){
					_this.hName = _this.fixClassNameList[5];
					_this.screenNum = 6;
					headerfix.style.position = "static";
				}
				if(scrollTop > (oNext[6].offsetTop-44)&&scrollTop < (oNext[7].offsetTop-44)){
					_this.hName = _this.fixClassNameList[6];
					_this.screenNum = 7;
					headerfix.style.position = "static";
					
				}if(scrollTop > (oNext[7].offsetTop-44)&&scrollTop < (oNext[8].offsetTop-44)){
					_this.hName = _this.fixClassNameList[7];
					_this.screenNum = 8;
					headerfix.style.position = "static";
					
				}if(scrollTop > (oNext[8].offsetTop-44)&&scrollTop < (oNext[9].offsetTop-44)){
					_this.hName = _this.fixClassNameList[8];
					_this.screenNum = 9;
					headerfix.style.position = "static";
					
				}if(scrollTop > (oNext[9].offsetTop-44)&&scrollTop < (oNext[10].offsetTop-44)){
					_this.hName = _this.fixClassNameList[9];
					_this.screenNum = 10;
					headerfix.style.position = "static";
					
				}if(scrollTop > (oNext[10].offsetTop-44)&&scrollTop < (oNext[11].offsetTop-44)){
					_this.hName = _this.fixClassNameList[10];
					_this.screenNum = 11;
					headerfix.style.position = "static";
					
				}if(scrollTop > (oNext[11].offsetTop-44)&&scrollTop < (oNext[12].offsetTop-44)){
					_this.hName = _this.fixClassNameList[11];
					headerfix.style.position = "static";
					_this.screenNum = 12;
				}if(scrollTop > (oNext[12].offsetTop-44)&&scrollTop < (oNext[13].offsetTop-44)){
					_this.hName = _this.fixClassNameList[12];
					headerfix.style.position = "static";
					_this.screenNum = 13;
				}if(scrollTop > (oNext[13].offsetTop-44)&&scrollTop < (oNext[14].offsetTop-44)){
					_this.hName = _this.fixClassNameList[13];
					headerfix.style.position = "static";
					_this.screenNum = 14;
				}if(scrollTop > (oNext[14].offsetTop-44)&&scrollTop < (oNext[15].offsetTop-44)){
					_this.hName = _this.fixClassNameList[14];
					headerfix.style.position = "static";
					_this.screenNum = 15;
				}if(scrollTop > (oNext[15].offsetTop-44)&&scrollTop < (oNext[16].offsetTop-44)){
					_this.hName = _this.fixClassNameList[15];
					headerfix.style.position = "static";
					_this.screenNum = 16;
				}if(scrollTop > (oNext[16].offsetTop-44)&&scrollTop < (oNext[17].offsetTop-44)){
					_this.hName = _this.fixClassNameList[16];
					headerfix.style.position = "static";
					_this.screenNum = 17;
				}if(scrollTop > (oNext[17].offsetTop-44)&&scrollTop < (oNext[18].offsetTop-44)){
					_this.hName = _this.fixClassNameList[17];
					headerfix.style.position = "static";
					_this.screenNum = 18;
				}if(scrollTop > (oNext[18].offsetTop-44)&&scrollTop < (oNext[19].offsetTop-44)){
					_this.hName = _this.fixClassNameList[18];
					headerfix.style.position = "static";
					_this.screenNum = 0;
				}
			}
			//AJAX传数据
			this.$http.get('./data/data.json')
			.then((res)=>{
				this.indexImportNews = res.data.newslist[0].indexImportNews;
				this.entertainmentNews = res.data.newslist[1].entertainmentNews;
				this.PENews = res.data.newslist[2].PENews;
				this.financeNews = res.data.newslist[3].financeNews;
				this.carNews = res.data.newslist[4].carNews;
				this.militaryNews = res.data.newslist[5].militaryNews;
				this.scienceNews = res.data.newslist[6].scienceNews;
				this.specialTopic = res.data.newslist[7].specialTopic;
				this.culture = res.data.newslist[8].culture;
				this.fashion = res.data.newslist[9].fashion;
				this.education = res.data.newslist[10].education;
				this.novel = res.data.newslist[11].novel;
				this.dubleTitle = res.data.newslist[12].dubleTitle;
				this.house = res.data.newslist[13].house;
			})
			.catch(()=>{})
			.finally((f)=>{
				console.log('请求结束')
			})
			//财经新闻无缝滚动
			var oTextSwipe = document.getElementsByClassName('textSwipe')[0].childNodes[0];
			setInterval(function(){
				_this.textSwipeNum++;
					if(_this.textSwipeNum > 2){
						_this.textSwipeNum = 0;
						oTextSwipe.style.transition = 'all 0s'
						oTextSwipe.style.top = -21*_this.textSwipeNum+'px';
						
					}
					else{
						
						oTextSwipe.style.top = '-'+_this.textSwipeNum*21+'px';
						oTextSwipe.style.transition = 'all 1s'
					}
//					_this.textSwipeNum = 1

				},2000)
		},
		methods:{
			handleChange(index){
				this.num=index+1;
			},
			menuSlideDown(a){
				if (this.slide==false) {
					a.target.parentNode.style.bottom='-74px';
					a.target.style.transform='rotate(180deg)';
				} else{
					a.target.parentNode.style.bottom='10px';
					a.target.style.transform='rotate(0deg)';
				}
				this.slide = !this.slide;
			},
			be(el){
				el.style.height = '0px';
			},
			e(el){
				el.style.height = '0px';
				
			},
			ae(el){
				el.style.height = '94px';
				el.style.transition='all 1s';
			},
			bl(el){
				el.style.height = '0px';
			},
			l(el){
				el.style.height = '0px';
				el.style.transition='all 1s';
			},
			al(el){
				el.style.height = '94px';
				el.style.transition='all 0s';
			},
			backTop(){
				document.documentElement.scrollTop=0
				window.pageYOffset=0
				document.body.scrollTop=0
				this.screenNum = 0;
			},
			nextScree(){
				if(this.screenNum > 18){
					this.screenNum = 0;
				}
				document.documentElement.scrollTop = document.body.scrollTop = document.getElementsByClassName('next')[this.screenNum].offsetTop-14;
				this.screenNum++;
			}
		}
		
	})
</script>

<style scoped>
	/*********进入页面时的广告盒子***************/
	#bigAdBox{
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		background-color: rgba(0,0,0,.3);
	}
	
	/*********财经字体轮播************/
	.textSwipe{
		position: relative;
	}
	.textSwipe>ul{
		position: absolute;
		top: 0;
		left: 0;
		/*transition: all 1s;*/
	}
	/***每一个标题吸顶****/
	.ceilling{
		max-width: 780px;
		position: fixed;
		top: 0;
		left: 50%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 999;
		background-color: white;
	}
	
	
	/*********/
	html,body{
		max-width: 780px;
		overflow-x: hidden;
	}
	main{
		background-color: white;
	}
	
	li{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	
	.header{
		position: fixed;
		top: 0;
		width: 100%;
		padding-bottom: 10px;
		padding-left: 3%;
		background-color: #ffd200;
		z-index: 11;
		overflow: hidden;
		box-sizing: border-box;
		max-width: 780px;
		left: 50%;
		transform: translateX(-50%);
	}
	.header h1{
		float: left;
		width: 11%;
		margin-top: 9px;
	}
	.header h1 img{
		width: 100%;
	}
	.header input{
		float: left;
		width: 55%;
	    height: 33px;
	    box-sizing: border-box;
	    padding: 0 0.266667rem 0 0.826667rem;
	    border: 10px solid #fff8c8;
	    border-radius: 15px;
	    background-color: #fff8c8;
	    overflow: hidden;
	    text-decoration: none;
	    color: #ACA785;
	    margin-top: 9px;
	    margin-left: 5%;

	}
	.header a:nth-last-of-type{
		display: inline-block;
		float: right;
		overflow: hidden;
	}
	.famousWebBtn{
		float: left;
		width: 12%;
		height: 30px;
		border: 1px solid #e3bb00;
	    border-radius: 18px;
	    color: #6b5d00;
	    font-size: 12px;
	    line-height: 30px;
	    margin-top: 9px;
	    text-align: center;
	    margin-left: 2%;
	}
	.headPortrait{
		float: right;
		width: 9.5vw;
		height: 9.5vw;
		max-width: 31px;
		max-height: 31px;
		border-radius: 50%;
		margin-top: 9px;
		margin-right: 4%;
	    background: url(../../assets/indexPic/icMyPhoto.png);
		background-size: cover;
	}
	
	/***********头部菜单*****************/
	.headerMenuBox{
		width: 100%;
		padding-top: 51px;
		height: 70px;
		background-color: #373740;
		position: relative;
		z-index: 9;
	}
	.headerMenuBox ul{
		width: 100%;
		height: 100%;
		color: #C4C4C4;
	}
	.headerMenuBox ul li{
		width: calc(100%/6);
		margin-top: 10px;
		float: left;
		text-align: center;
		font-size: 1.23em;
	}
	.headerMenuBox ul li a{
		color: #C4C4C4;
	}
	
	.headerMenuBoxT{
		width: 100%;
		height: 94px;
		background-color: #373740;
		overflow: hidden;
		margin-top: -10px;
	}
	.headerMenuBoxT ul{
		width: 100%;
		height: 100%;
		color: #C4C4C4;
	}
	.headerMenuBoxT ul li{
		width: calc(100%/6);
		margin-top: 10px;
		float: left;
		font-size: 1.23em;
		text-align: center;
		font-weight: 100;
	}
	
	.headerMenuBox .drowDownPicBox{
		position: absolute;
		right: 0%;
		bottom: 10px;
		height: 22px;
		width: 16.667%;
		background-color: #373740;/*#373740*/
		z-index: 99;
		transition: all 1.1s;
		overflow: hidden;
		text-align: center;
	}
	.drowDownPic{
		display: inline-block;
		width: 60%;
		height: 25px;
		background: url(../../assets/indexPic/icDropDown.png) no-repeat;
		background-size: contain;
	}
	.mediaProgramMenuBox{
		width: 100%;
		height: 40px;
		color: #a4a4a4;
		font-size: 0.84em;
	}
	.mediaProgramMenuBox{
		width: 100%;
		font-size: 1.23em;
		overflow: hidden;
	}
	.mediaProgramMenuBox li{
		float: left;
		width: calc(100%/5);
		margin-top: 10px;
		text-align: center;
		position: relative;
	}
	.tvIcon{
		position: absolute;
		top: 1px;
		left: 11%;
		width: 28%;
		height: 18px;
		background: url(../../assets/indexPic/tv_icon.png) no-repeat;
		background-size: contain;
		
	}
	
	.viewPagerBox{
		width: 100%;
		position: relative;
	}
	.viewPagerText{
		color: white;
		position: absolute;
		left: 6%;
		bottom: 6%;
		font-size: 1.3em;
	}
	.viewPagerIndex{
		font-style:italic;
		color: #d7d7d7;
		font-size: 22px;
		position: absolute;
		left: 6%;
		bottom: 40px;
		z-index: 1;
	}
	.firstTextBox{
		width: 100%;
		padding-left: 3%;
		box-sizing: border-box;
	}
	.firstTextBox p{
	    width: 97%;
	    padding-left: 1.5%;
		text-align: left;
		line-height: 49px;
		color: #3c3c3d;
		font-size: 1.24em;
		border-bottom: 1px solid #f5f5f5;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.gapBox{
		width: 100%;
		height: 12.5px;
		background-color:#f5f5f5 ;
	}
	.importantNewsBox{
		width: 100%;
	}
	.importantNewsHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 5px;
	}
	.importantNewsHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.importantNewsHeader span{
		float: left;
		width: 18px;
		height: 18px;
		margin-left: 5px;
		margin-top: 10px;
		border-radius: 50%;
		background-color: #ffd200;
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.importantNewsHeader ul{
		overflow: hidden;
		margin-right: 4%;
	}
	.importantNewsHeader ul li{
		float: right;
		color: #656565;
		margin-top: 11px;
		margin-left: 20px;
		font-size: 1.21em;
	}
	.importantNewsBox>ul{
		width: 100%;
		box-sizing: border-box;
		padding-left: 3%;
		color: #3C3C3D;
	}
	.importantNewsBox>ul li{
		font-size: 17px;
		text-align: left;
		line-height: 48px;
		width: 100%;
		height: 47px;
		font-size: 1.3em;
		border-bottom: 1px solid #F5F5F5;
	}
	.advertisementbox{
		width: 58px;
		height: 34px;
		font-size: 22px;
		border: 1px solid rgb(215, 215, 215);
		float: right;
		color: #A4A4A4;
		text-align: center;
		line-height: 34px;
		margin-top: 5px;
		transform: scale(0.55);
		
	}
	.allNewsBox{
		width: 100%;
	}

	
	/************纯文字广告盒子******************/
	.advertisementContain{
		text-align: left;
		line-height: 48px;
		padding-left: 3%;
		box-sizing: border-box;
		width: 100%;
		height: 47px;
		border-bottom: 1px solid #F5F5F5;
		font-size: 1.3em;
		color: #3C3C3D;
	}
	
	/************娱乐新闻啊******************/
	
	.entertainmenNewsBox{
		width: 100%;
	}
	.entertainmentNewsHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.entertainmentNewsHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.entertainmentNewsHeader span{
		float: left;
		width: 18px;
		height: 18px;
		margin-left: 5px;
		margin-top: 10px;
		border-radius: 50%;
		background-color: #ffd200;
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.entertainmentNewsHeader ul{
		overflow: hidden;
		margin-right: 4%;
	}
	.entertainmentNewsHeader ul li{
		float: right;
		color: #656565;
		margin-top: 11px;
		margin-left: 20px;
		font-size: 1.21em;
	}
	.entertainmentNewsBox>ul{
		width: 100%;
		box-sizing: border-box;
		padding-left: 3%;
		color: #3C3C3D;
		margin-top: 10px;
	}
	.entertainmentNewsBox>ul li{
		font-size: 16.4px;
		text-align: left;
		line-height: 48px;
		width: 100%;
		height: 47px;
		border-bottom: 1px solid #F5F5F5;
	}
	.entertainmentNewsPicbox{
		width: 100%;
		overflow: hidden;
	}
	.entNewsPicBoxL{
		width: 45%;
		float: left;
		margin-left: 3%;
	}
	.entNewsPicBoxL p{
		width: 100%;
		text-align: left;
		font-size: 1.2em;
		color: #656565;
		margin-top: 5px;
	}
	.entNewsPicBoxR{
		width: 45%;
		float: right;
		margin-right: 3%;
	}
	.entNewsPicBoxR p{
		text-align: left;
		width: 100%;
		font-size: 1.19em;
		color: #656565;
		margin-top: 5px;
	}
	.advertisementBox{
		width: 100%;
		overflow: hidden;
		padding-bottom: 10px;
	}
	.advertisementContainPic{
		width: 100%;
	}
	.advertisementContainPic>.advertisementbox{
		float: left;
	}
	.advertisementContainPic img{
		float: right;
		margin-top: 10px;
		margin-right: 4.5%;
	}
	.adPictextBox{
		float: left;
		width: 50%;
		text-align: left;
		margin-left: 3%;
		margin-top: 20px;
		font-size: 1.25em;
		color: #3C3C3D;
	}
	/**************体育啊***************************/
	.PENewsBox{
		width: 100%;
		overflow: hidden;
	}
	.PENewsHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.PENewsHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.PENewsHeader span{
		float: left;
		width: 18px;
		height: 18px;
		margin-left: 5px;
		margin-top: 10px;
		border-radius: 50%;
		background-color: #ffd200;
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.PENewsHeader ul{
		overflow: hidden;
		margin-right: 4%;
	}
	.PENewsHeader>ul>li{
		float: right;
		color: #656565;
		margin-top: 11px;
		margin-left: 20px;
		font-size: 1.21em;
	}
	.PENewsBox>ul{
		width: 100%;
		box-sizing: border-box;
		padding-left: 3%;
		color: #3C3C3D
	}
	.PENewsBox>ul li{
		text-align: left;
		line-height: 48px;
		width: 100%;
		height: 47px;
		font-size: 1.3em;
		border-bottom: 1px solid #F5F5F5;
	}
	.PENewsPicbox{
		width: 100%;
		overflow: hidden;
	}
	.PENewsPicBoxL{
		width: 45%;
		float: left;
		margin-left: 3%;
	}
	.PENewsPicBoxL p{
		text-align: left;
		width: 100%;
		font-size: 1.19em;
		color: #656565;
		margin-top: 5px;
	}
	.PENewsPicBoxR{
		width: 45%;
		float: right;
		margin-right: 3%;
	}
	.PENewsPicBoxR p{
		text-align: left;
		width: 100%;
		font-size: 1.19em;
		color: #656565;
		margin-top: 5px;
	}
	/******************财经啊**********************************/
	.financeNewsBox{
		width: 100%;
		overflow: hidden;
	}
	.financeNewsHeader{
		width: 100%;
		padding-bottom: 15px;
		overflow: hidden;
	}
	.financeNewsHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 15px;
	}
	.financeNewsHeader span{
		float: left;
		width: 18px;
		height: 18px;
		margin-left: 5px;
		margin-top: 20px;
		border-radius: 50%;
		background-color: #ffd200;
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.financeNewsHeader ul{
		overflow: hidden;
		margin-right: 4%;
		margin-top: 10px;
	}
	.financeNewsHeader ul li{
		float: right;
		color: #656565;
		margin-top: 11px;
		margin-left: 20px;
		font-size: 1.21em;
	}
	.financeNewsBox>ul{
		width: 100%;
		box-sizing: border-box;
		padding-left: 3%;
		color: #3C3C3D;
	}
	.financeNewsBox>ul li{
		text-align: left;
		line-height: 48px;
		width: 100%;
		height: 47px;
		font-size: 1.3em;
		border-bottom: 1px solid #F5F5F5;
	}
	.financeSituation{
		width: 100%;
		background-color: #F5F5F5;
		font-size: 1.3em;
		overflow: hidden;
	}
	.financeSituationHeader{
		width: 100%;
		height: 22.1px;
		box-sizing: border-box;
		padding-left: 4%;
		margin-top: 12px;
	}
	.textSwipe{
		width:52%;
		height: 22.1px;
		overflow: hidden;
	}
	.textSwipe>ul{
		width: 100%;
		margin-top:2px;
	}
	.textSwipe>ul>li>span{
		display: inline-block;
		margin-left: 10px;
		font-size: 0.97em;
		color: #498e1d;
	}
	.financeSituationHeader p{
		float: right;
		width: 40%;
		box-sizing: border-box;
		padding-left: 10px;
		margin-top: -20px;
		text-align: left;
		border-left: 1px solid #A4A4A4;
	}
	.financeSearchBox{
		width: 100%;
		overflow: hidden;
		margin-bottom: 20px;
		margin-top: 15px;
		box-sizing: border-box;
		padding-left: 10px;
		padding-right: 10px;
	}
	.financeSearchBox>input{
		border: none;
		width:50%;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 18px;
		color: #A4A4A4;
	}
	.financeSearchBtn{
		display: inline-block;
		width: 17.3%;
		text-align: center;
		padding-top: 10px;
		padding-bottom: 9px;
		background-color: #fd4b4b;
		margin-left: -0.7%;
		color: white;
		font-size: 12.5px;
	}
	.MyfinanceSearch{
		display: inline-block;
		text-align: center;
		width: calc(100% - 67.3% - 42px);
		padding-top: 10px;
		padding-bottom: 9px;
		background-color: white;
		margin-left: 4px;
		font-size: 12.5px;
	}
/***************汽车***************************************/
	
	.carNewsBox{
		width: 100%;
		overflow: hidden;
	}
	.carNewsHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.carNewsHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px
	}
	.carNewsHeader span{
		float: left;
		width: 18px;
		height: 18px;
		margin-left: 5px;
		margin-top: 10px;
		border-radius: 50%;
		background-color: #ffd200;
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.carNewsHeader ul{
		overflow: hidden;
		margin-right: 4%;
	}
	.carNewsHeader>ul>li{
		float: right;
		color: #656565;
		margin-top: 11px;
		margin-left: 20px;
		font-size: 1.21em;
	}
	.carNewsBox>ul{
		width: 100%;
		box-sizing: border-box;
		padding-left: 3%;
		color: #3C3C3D;
		overflow: hidden;
	}
	.carNewsBox>ul li{
		text-align: left;
		line-height: 48px;
		width: 100%;
		height: 47px;
		font-size: 1.3em;
		border-bottom: 1px solid #F5F5F5;
	}
	.carNewsPicbox{
		width: 100%;
		overflow: hidden;
	}
	.carNewsPicBoxL{
		width: 45%;
		float: left;
		margin-left: 3%;
	}
	.carNewsPicBoxL p{
		width: 100%;
		text-align: left;
		font-size: 1.19em;
		margin-top: 5px;
		color: #656565;
	}
	.carNewsPicBoxR{
		width: 45%;
		float: right;
		margin-right: 3%;
	}
	.carNewsPicBoxR p{
		text-align: left;
		width: 100%;
		font-size: 1.19em;
		margin-top: 5px;
		color: #656565;
	}
/***************房产****************************/
	.houseNewsBox{
		width: 100%;
		overflow: hidden;
	}
	.houseNewsHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.houseNewsHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.houseNewsHeader span{
		float: left;
		width: 18px;
		height: 18px;
		margin-left: 5px;
		margin-top: 10px;
		border-radius: 50%;
		background-color: #ffd200;
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.houseNewsHeader ul{
		overflow: hidden;
		margin-right: 4%;
	}
	.houseNewsHeader>ul>li{
		float: right;
		color: #656565;
		margin-top: 11px;
		margin-left: 20px;
		font-size: 1.21em;
	}
	.houseNewsPicbox{
		width: 100%;
		overflow: hidden;
	}
	.houseNewsPicBoxL{
		width: 45%;
		float: left;
		margin-left: 3%;
	}
	.houseNewsPicBoxL p{
		width: 100%;
		text-align: left;
		font-size: 1.19em;
		color: #656565;
		margin-top: 5px;
	}
	.houseNewsPicBoxR{
		width: 45%;
		float: right;
		margin-right: 3%;
		overflow: hidden;
	}
	.houseNewsPicBoxR p{
		text-align: left;
		width: 100%;
		font-size: 1.19em;
		margin-top: 5px;
		color: #656565;
	}
	.houseNewsBox>ul{
		width:100%;
		box-sizing: border-box;
		padding-left: 3%;
		color: #3C3C3D;
	}
	.houseNewsBox>ul li{
		text-align: left;
		font-size: 1.3em;
		line-height: 48px;
		width: 100%;
		height: 47px;
		border-bottom: 1px solid #F5F5F5;
	}
	
/*******************军事啊*************************************/
	.militaryNewsBox{
		width: 100%;
		overflow: hidden;
	}
	.militaryNewsHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.militaryNewsHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.militaryNewsHeader span{
		float: left;
		width: 18px;
		height: 18px;
		margin-left: 5px;
		margin-top: 10px;
		border-radius: 50%;
		background-color: #ffd200;
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.militaryNewsHeader ul{
		overflow: hidden;
		margin-right: 4%;
	}
	.militaryNewsHeader>ul>li{
		float: right;
		color: #656565;
		margin-top: 11px;
		margin-left: 20px;
		font-size: 1.21em;
	}
	.militaryNewsPicbox{
		width: 100%;
		overflow: hidden;
	}
	.militaryNewsPicBoxL{
		width: 45%;
		float: left;
		margin-left: 3%;
	}
	.militaryNewsPicBoxL p{
		width: 100%;
		text-align: left;
		font-size: 1.15em;
		color: #656565;
		margin-top: 5px;
	}
	.militaryNewsPicBoxR{
		width: 45%;
		float: right;
		margin-right: 3%;
		overflow: hidden;
	}
	.militaryNewsPicBoxR p{
		text-align: left;
		width: 100%;
		font-size: 1.15em;
		color: #656565;
		margin-top: 5px;
	}
	.militaryNewsBox>ul{
		width: 100%;
		overflow: hidden;
		padding-top: 5px;
		box-sizing: border-box;
		padding-left: 3%;
		color: #3C3C3D;
	}
	.militaryNewsBox>ul li{
		font-size: 1.3em;
		text-align: left;
		line-height: 48px;
		width: 100%;
		height: 47px;
		border-bottom: 1px solid #F5F5F5;
	}
	.importantNewsBox .adText{
		/*float: left;*/
		width: 70%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.picadBox{
		width: 100%;
		position: relative;
		overflow: hidden;
		padding-bottom: 28%;
	}
	.adPicListBox{
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.adPicList{
		width: 100%;
		overflow: hidden;
		margin-top: 15px;
	}
	.adPicList>li{
		float: left;
		width: calc(100%/3.4);
		margin-left: 2.9%;
		overflow: hidden;
		position: relative;
	}
	.adPicList>li>p{
		width: 100%;
		position: absolute;
		top: 82%;
		left: 0;
		text-align: center;
		color: white;
		background-color: rgba(0,0,0,0.5);
	}
	.adCloseMsgBox{
		width: 44px;
		height: 15px;
		position: absolute;
		bottom: -8%;
		right: 0%;
		font-size: 12px;
		line-height: 15px;
		transform: scale(0.7);
	}
	.adCloseMsgBox>span{
		display: inline-block;
		background-color: rgba(0,0,0,0.5);
		color: #F5F5F5;
	}
	.adCloseBtn{
		margin-left: -2.2px;
	}
	.adCloseSugBox{
		display: none;
	}
	/****************小说*******************************/
	.novelNewsBox{
		width: 100%;
		overflow: hidden;
	}
	.novelNewsHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.novelNewsHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.novelNewsHeader span{
		float: left;
		width: 18px;
		height: 18px;
		margin-left: 5px;
		margin-top: 10px;
		border-radius: 50%;
		background-color: #ffd200;
		font-size: 13px;
		text-align: center;
		color: white;
	}
	.novelNewsHeader ul{
		overflow: hidden;
		margin-right: 4%;
	}
	.novelNewsHeader>ul>li{
		float: right;
		color: #656565;
		margin-top: 11px;
		font-size: 1.21em;
		margin-left: 20px;
	}
	.novelNewsAllPicbox{
		width: 100%;
		overflow: hidden;
	}
	.novelNewsPicBox{
		text-align: center;
		width: calc(100%/4.5);
		margin-left: calc(11%/5);
		float: left;
	}
	.novelNewsPicBox p{
		width: 100%;
		text-align: left;
		font-size: 1.19em;
		color: #656565;
	}
	.novelNewsBox>ul{
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		padding-left: 3%;
		color: #3C3C3D;
	}
	.novelNewsBox>ul li{
		font-size: 1.3em;
		text-align: left;
		line-height: 48px;
		width: 100%;
		height: 47px;
		border-bottom: 1px solid #F5F5F5;
	}
	/***************生活服务************************************/
	.lifeServiceBox{
		width: 100%;
	}
	.lifeServiceHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.lifeServiceHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.lifeServiceBox ul{
		width: 100%;
		color: #3C3C3D;
		overflow: hidden;
	}
	.lifeServiceBox ul li{
		float: left;
		width: calc(100%/5);
		text-align: center;
	}
	.lifeServiceBox>ul li img{
		width: 55%;
	}
	.lifeServiceBox>ul li p{
		width: 100%;
		font-size: 1.19em;
		margin-top: 10px;
		margin-bottom: 15px;
	}
	.webMapBox{
		width: 100%;
		overflow: hidden;
	}
	.webMapHeader{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
		padding-top: 25px;
	}
	.webMapHeader h4{
		color: #3c3c3d;
		font-size: 17.5px;
		float: left;
		margin-left: 3%;
		margin-top: 5px;
	}
	.webMapBox ul{
		width: 100%;
		overflow: hidden;
		padding-bottom: 15px;
	}
	.webMapBox ul li{
		float: left;
		text-align: center;
		width: calc(100%/6);
		font-size: 1.3em;
		margin-bottom: 30px;
		color: #3C3C3D;
	}
	footer{
		text-align: center;
		width: 100%;
		background-color: #F5F5F5;
		padding-top: 40px;
		padding-bottom: 30px;
	}
	.sugguestAcoorperationText{
		font-size: 14px;
		color: #3C3C3D;
		margin-bottom: 30px;
	}
	.footerText{
		color: #A4A4A4;
		font-size: 12px;		
	}
	/****************回顶****************************************/
	.backTopAslideDownBox{
		position: fixed;
		bottom: 20px;
		right: 10px;
		width: 46px;
		height: 110px;
		z-index: 99;
	}
	.backTopAslideDownBox>div{
		margin-top: 8px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: rgba(255,210,0,0.5);
	}
	.backTop{
		display: inline-block;
		width: 28px;
		height: 28px;
		margin-top: 6px;
		margin-left: 6px;
		background: url(../../assets/indexPic/backTop.png);
		background-size: cover;
	}
	.slideDown{
		display: inline-block;
		width: 42px;
		height: 38px;
		margin: 1px auto;
		background: url(../../assets/indexPic/slideDown.png);
		background-size: cover;
	}
	
	
	
	
</style>


<style>
	.mint-swipe-items-wrap{
		padding-bottom:50% ;
		overflow: hidden;
	}
</style>