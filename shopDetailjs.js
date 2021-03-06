
function onCreate(){
	makeDressList();
	makeQnATable();
}

function makeDressList(){
	var doc = document;
	var dressListText0 ="";
	var dressListText1 ="";
	var dressListText2 ="";
	for(var i=0; i<9; i++){
		if(i%3==0){
			dressListText0 += "<div onmouseover=\"dressListMouseOver(this)\" onmouseout=\"dressListMouseOut(this)\"><img class=\"dressListPics\" src=\"images/dressList"+i+".jpg\" ></div>"
		}
		else if(i%3==1){
			dressListText1 += "<div onmouseover=\"dressListMouseOver(this)\" onmouseout=\"dressListMouseOut(this)\"><img class=\"dressListPics\" src=\"images/dressList"+i+".jpg\"></div>"
		}
		else{
			dressListText2 += "<div onmouseover=\"dressListMouseOver(this)\" onmouseout=\"dressListMouseOut(this)\"><img class=\"dressListPics\" src=\"images/dressList"+i+".jpg\"></div>"
		}
	}
	doc.getElementById("dressListDiv0").innerHTML =dressListText0;
	doc.getElementById("dressListDiv1").innerHTML =dressListText1;
	doc.getElementById("dressListDiv2").innerHTML =dressListText2;
}

function makeQnATable(){
	var doc = document;
	var qnaContents = new Array(15);
	for(var i=0; i<15; i++){
		qnaContents[i] = new Array(5);
		qnaContents[i][0] = "[질문]";
		qnaContents[i][1] = "질문"+i;
		qnaContents[i][2] = "전진우";
		qnaContents[i][3] = "2012-8"+(-i-1);
		qnaContents[i][4] = i;
	}
	
	var qnaTableText=""
	for(var i=0; i<15; i++){
		qnaTableText += "<tr>";
		qnaTableText += "<td class=\"qna0\">";
		qnaTableText += qnaContents[i][0];
		qnaTableText += "</td>";
		qnaTableText += "<td class=\"qna1\">";
		qnaTableText += "<span onmouseover=\"qnaTableMouseOver(this)\" onmouseout=\"qnaTableMouseOut(this)\">"+qnaContents[i][1]+"</span>";
		qnaTableText += "</td>";
		qnaTableText += "<td class=\"qna2\">";
		qnaTableText += qnaContents[i][2];
		qnaTableText += "</td>";
		qnaTableText += "<td class=\"qna3\">";
		qnaTableText += qnaContents[i][3];
		qnaTableText += "</td>";
		qnaTableText += "<td class=\"qna4\">";
		qnaTableText += qnaContents[i][4];
		qnaTableText += "</td>";
		qnaTableText += "</tr>";
	}
	doc.getElementById("qnaTable").innerHTML = qnaTableText;
}

function scroll(){
	if(window.pageYOffset>350){
		document.getElementById("shopMenu").style.position = "fixed";
		document.getElementById("shopMenu").style.top="45px";
	} 
	else{
		document.getElementById("shopMenu").style.position = "relative";
		document.getElementById("shopMenu").style.top="0px";
	}
}

function dressListMouseOver(node){ 
	var grayDiv = document.createElement("div")
	var grayHeight = 50;
	grayDiv.setAttribute("style","position:relative; top:-"+grayHeight+"px; ; width:351px; height:"+grayHeight+"px; margin-bottom:-"+grayHeight+"px; background:rgba(0,0,0,0.4); ");
	node.appendChild(grayDiv);  
}

function dressListMouseOut(node){
	node.removeChild(node.lastChild);
}

function qnaTableMouseOver(node){
	var tr = node.parentNode.parentNode;
	for(var i=0; i<5; i++){
		tr.childNodes[i].style.backgroundColor="#888888";
	}
}
function qnaTableMouseOut(node){
	var tr = node.parentNode.parentNode;
	for(var i=0; i<5; i++){
		tr.childNodes[i].style.backgroundColor="#ffffff";
	}

}

function shopMenuClick(menuIndex){
	var doc = document;
	doc.getElementById("dressListDiv").style.display = "none";
	doc.getElementById("qnaDiv").style.display = "none";
	doc.getElementById("contactDiv").style.display = "none";
	if(menuIndex==0){
		doc.getElementById("dressListDiv").style.display = "block"
	}
	else if(menuIndex==1){
		doc.getElementById("qnaDiv").style.display = "block"
	}
	else{
		doc.getElementById("contactDiv").style.display = "block"
	}
		
}