alert("welcome to my dynamic web page")
function jsonFile(file,callback){
	var ajaxCall=new XMLHttpRequest();
	ajaxCall.overrideMimeType("application/json");
	ajaxCall.open("GET",file,true);
	ajaxCall.onreadystatechange=function(){
		if(ajaxCall.readystate === 4 && ajaxCall.status =="200"){
			callback(ajaxCall.responseText);
		}
	}
	ajaxCall.send(null);
}

jsonFile("data.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	details(data.details);
})

var body=document.querySelector("#root")
console.log(body);
var main=document.createElement("section");
main.classList.add("container");
body.appendChild(main);

var artical1=document.createElement("artical");
artical1.setAttribute("class","artical1");
body.appendChild(artical1);

var image=document.createElement("img");
image.src="cutie.jpg";
image.al"profile pic";
artical1.appendChild(image);

function details(mydetails){
	
	var h2=document.createElement("h4");
	h2.textContent=mydetails.name;
	artical1.appendChild(h2);
	var email=document.createElement("h4");
	email.textContent=mydetails.email;
	artical1.appendChild(email);
	var mob=document.createElement("h4");
	mob.textContent=mydetails.mobile;
	artical1.appendChild(mob);

	let btn=document.createElement("a")
	btn.textContent="profile";
	btn.href="#";
	btn.style.textDecoration="none";
	artical.appendChild(btn);
	rtical1.appendChild(btn);



}
//(
	//function (){
//	alert("hai welcome to my dynamic web page")
		//function filesGetting(file,callback){
		//	var ajaxCall= new XMLHttpRequest();
		//	ajaxCall.overrideMimeType("application/json");
		//	ajaxCall.open("GET",file,true);
		//	ajaxCall.onreadystatechange=function(){
		//		console.log("abcd");
//
//				console.log("dsdf");
//				if(ajaxCall.readystate===4  && ajaxCall.status==="200"){
//					callback(ajaxCall.responseText);
//					console.log(ajaxcall.status.responseText);
//				}
//			}
//			ajaxCall.send(null);
//		}
//	}
//	filesGetting("data.json",function(jsondata){
//		var data=JSON.parse(jsondata);
//		details(data);
//		console.log(data);
//				
//			}	
//)
//	var child=document.querySelector('.child')
//	function details(data){
//		var name=document.createElement('h2')
//		name.textContent=data.name;
//		child.appendChild(name)
//	}
//}
//var x=4;
//var 123="madhuri";
//var_madhuri=123;
//var $madhuri="keerthi";