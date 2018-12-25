var expression;
var answer;
//实现输入框的显示
function onclicknum(nums)
{
	expression=document.getElementById("exp");
    expression.value=expression.value+nums;
}
//实现输入框和输出框的内容的完全清除
function onclickclear() 
{
	expression=document.getElementById("exp");
	answer=document.getElementById("ans");
    expression.value="";
    answer.value="";
}
//实现退格键的操作
function onclickback()
{
	expression=document.getElementById("exp");
	if(expression.value=="0"||expression.value=="")
	{
		expression.value="0";
	}
	else
	{
		document.getElementById("exp").value=document.
		getElementById("exp").value.slice(0,-1);
	}
}
//实现输入框中一些特殊运算符的转换，便于计算
function onclickresult() 
{
	expression=document.getElementById("exp").value;
	expression=expression.replace(/sin/g,"Math.sin");
	expression=expression.replace(/cos/g,"Math.cos");
	expression=expression.replace(/sqrt/g,"Math.sqrt");
	expression=expression.replace(/tan/g,"Math.tan");
	expression=expression.replace(/e/g,"Math.E");
	expression=expression.replace(/Π/g,"Math.PI");
	expression=expression.replace(/㏑/g,"Math.log");
	expression=expression.replace(/asin/g,"Math.asin");
	expression=expression.replace(/acos/g,"Math.acos");
    expression=expression.replace(/atan/g,"Math.atan");
	answer=document.getElementById("ans");
	//函数eval()可以计算某个字符串，该方法只接受原始字符串作为参数
    answer.value=eval(expression);
}







