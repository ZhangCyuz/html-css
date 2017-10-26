// JavaScript Document
//function changeBg(obj)
//{ //alert(obj);
//var vs = document.all;
//	for(i=1;i<=2;i++){
//		vs["Head_"+i].className="ggggreen" ;
//		vs["Coun_"+i].className="ggggreen01-n" ;
//		}
//	vs["Head_"+obj].className="gggblak";
//	vs["Coun_"+obj].className="ggggreen";
//}
//
//function changeBg01(obj)
//{ //alert(obj);
//var vs = document.all;
//	for(i=1;i<=4;i++){
//		vs["Head01_"+i].className="tj" ;
//		vs["Coun01_"+i].className="tj01-n" ;
//		}
//	vs["Head01_"+obj].className="ttj";
//	vs["Coun01_"+obj].className="tj";
//}
//
//function changeBg02(obj)
//{ //alert(obj);
//var vs = document.all;
//	for(i=1;i<=2;i++){
//		vs["Head02_"+i].className="krenqij" ;
//		vs["Coun02_"+i].className="krenqij01-n" ;
//		}
//	vs["Head02_"+obj].className="renqij";
//	vs["Coun02_"+obj].className="renqij01";
//}

//说明
//	id 当前引用ID数值
//	Num 循环最大数量
//	TH 点击事件ID前缀
//	TH_ClassA 触发ID表现Class样式
//	TH_ClassB 其他TH引用Class样式
//	CH 被控制显示隐藏ID前缀
//

function BlockAndNone(id,Num,TH,TH_ClassA,TH_ClassB,CH)
{
	var obj = document.all;
	for(i=1;i<=Num;i++)
	{
		//alert(TH + i);
		obj[TH + i].className=TH_ClassB;
		obj[CH + i].style.display="none";
	}
	obj[TH + id].className=TH_ClassA;
	obj[CH + id].style.display="block";
	
}

display:block; display:none