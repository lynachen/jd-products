//==================图片放大镜 start=====================
//鼠标经过预览图片函数
function preview(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}

//图片放大镜效果
$(function(){
	$(".jqzoom").jqueryzoom({xzoom:380,yzoom:410});
});

//图片预览小图移动效果,页面加载时触发
$(function(){
	var tempLength = 0; //临时变量,当前移动的长度
	var viewNum = 8; //设置每次显示图片的个数量
	var moveNum = 2; //每次移动的数量
	var moveTime = 300; //移动速度,毫秒
	var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
	var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
	var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
	console.log(scrollItems.length)
	console.log(viewNum)
	console.log(scrollItems.eq(0).width())
	var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
	  
	//下一张
	$(".spec-scroll .next").on("click",function(){
		if(tempLength < countLength){
			if((countLength - tempLength) > moveLength){
				scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
				tempLength += moveLength;
			}else{
				scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
				tempLength += (countLength - tempLength);
			}
		}
	});
	//上一张
	$(".spec-scroll .prev").on("click",function(){
		if(tempLength > 0){
			if(tempLength > moveLength){
				scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
				tempLength -= moveLength;
			}else{
				scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
				tempLength = 0;
			}
		}
	});
});
//==================图片放大镜 end=====================

var  vue = new Vue({
    el:'#app',
    data:{
    	current:0,
		counter:1,
		allSize:[
			{text:'6寸'},
			{text:'8寸'},
			{text:'10寸'},
			{text:'12寸'},
		],
    },
    created: function () {
    	
    },
    mounted: function () {

    },
    methods:{
    	//选中焦点
    	choiceSize(index){
    		this.current=index
    	},
    	//加
    	add:function(){
    		this.counter = parseInt(this.counter) + 1;
    		$('.reduce').removeClass('reSty');
    	},
    	//减
    	reduce:function(){
    		if(this.counter > 1){
    			this.counter = parseInt(this.counter) - 1;
    		} else{
    			this.counter = 1
    			$('.reduce').addClass('reSty');
    		}
    	}        
    }
})