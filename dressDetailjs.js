
		var numberOfPics =  11;
		var currentPicIndex = 0;
		
		function onCreate(){
			setDressList(); // 왼쪽 하단 드레스 리스트
			setOtherDressList(); //오른쪽 중간 다른 드레스 리스트
			setImgSize(document.getElementById("designerPicImg"), 160,170); //디자이너 이미지 비율조정
		}
		
		function setDressList(){
			var doc = document;
			var dressListText = "<tr>";
				dressListText +="<td class=\"dressListCell\" align=\"center\" onmouseover=\"smallDressOver(this)\" onmouseout=\"smallDressOut(this)\" onclick=\"smallDressClick(this)\">";
					dressListText +="<img class=\"dressListImg\" src=\"images/dressbig.jpg\">";
				dressListText +="</td>";
			for(var i=0; i<10; i++){
				dressListText +="<td class=\"dressListCell\" align=\"center\" onmouseover=\"smallDressOver(this)\" onmouseout=\"smallDressOut(this)\" onclick=\"smallDressClick(this)\">";
					dressListText +="<img class=\"dressListImg\" src=\"images/dresssmall"+i+".jpg\">";
				
					
				dressListText +="</td>";
			}
			dressListText += "</tr>";
			doc.getElementById("dressPhotoListTable").innerHTML = dressListText
			doc.getElementById("dressPhotoListTable").style.width= 90*11+"px";
			
			for(var i=0; i< doc.getElementById("dressPhotoListTable").childNodes[0].childNodes[0].childNodes.length; i++){
				setImgSize(doc.getElementById("dressPhotoListTable").childNodes[0].childNodes[0].childNodes[i].childNodes[0],90,100)
			} 		
		}
		
		function setOtherDressList(){
			var doc = document;
			var otherDressListText = "<tr>";
			for(var i=2; i<7; i++){
				otherDressListText +="<td align=\"center\">";
					otherDressListText +="<img class=\"otherDressImg\" src=\"images/dresssmall"+i+".jpg\">";
				otherDressListText +="</td>";
			}
			otherDressListText += "</tr>";
			doc.getElementById("otherDressTable").innerHTML = otherDressListText
			
			for(var i=0; i< doc.getElementById("otherDressTable").childNodes[0].childNodes[0].childNodes.length; i++){
				setImgSize(doc.getElementById("otherDressTable").childNodes[0].childNodes[0].childNodes[i].childNodes[0],90,100)
			} 					
		}
	
		function shopNameMouseOver(node){
			node.style.color="rgb(20, 20, 200)";
			node.style.backgroundColor="rgb(150, 150, 250)";
		}
		function shopNameMouseOut(node){
			node.style.color="rgb(0, 0, 0)";
			node.style.backgroundColor="rgb(255, 255, 255)";
		}
		
		function dressListMouseOver(){
			var doc = document;
			doc.getElementById("scrollLeftButton").style.display="inline";
			doc.getElementById("scrollRightButton").style.display="inline";
		}
		function dressListMouseOut(){
			var doc = document;
			doc.getElementById("scrollLeftButton").style.display="none";
			doc.getElementById("scrollRightButton").style.display="none";
		}
		
		function dressListScrollButtonOver(node){
			dressListMouseOver();
			node.style.backgroundColor="rgba(10,10,230,0.5)"
			node.style.color="rgb(10, 10, 230)";
		}
		function dressListScrollButtonOut(node){
			dressListMouseOut();
			node.style.backgroundColor="rgba(255,255,255,0.5)"
			node.style.color="rgb(0, 0, 0)";
		}
		
		function dressListScroll(index){
			var doc = document;
			if(index==0)
				doc.getElementById("dressPhotoListDiv").scrollLeft -= 90;
			else
				doc.getElementById("dressPhotoListDiv").scrollLeft += 90;			
		}
		
		
		function smallDressOver(node){
			node.style.backgroundColor="rgba(80,80,180,0.5)";
			node.childNodes[0].style.opacity=0.5;
		}
		function smallDressOut(node){
			node.style.backgroundColor="rgb(255,255,255)";
			node.childNodes[0].style.opacity=1;
		}
		function smallDressClick(node){
			currentPicIndex = node.cellIndex;
			var doc = document;
			var ratio = getImgRatio(node.childNodes[0].src);
			
			doc.getElementById("dressPhotoDiv").innerHTML = 
			"<img id=\"dressBigImg\" class=\"dressPhotoImg\" src=\"images/dressbig.jpg\" style=\"cursor:pointer;\" onclick=\"dressBigImgClick();\" >"
			doc.getElementById("dressBigImg").src = node.childNodes[0].src;
			setImgSize(doc.getElementById("dressBigImg"), 650, 700);
			doc.getElementById("dressBigImg").style.marginTop = (700-doc.getElementById("dressBigImg").style.height.slice(0,-2))/2 + "px";
		}
		
		function getImgRatio(source){
			var Imginfo = new Image();
			Imginfo.src = source;
			var width = Imginfo.width;
			var height = Imginfo.height;		
			
			return width/height;
		}
		
		function setImgSize(node, moldWidth, moldHeight){
			var Imgratio = getImgRatio(node.src);
			var moldratio = moldWidth/moldHeight;
			if(Imgratio<moldratio){
				node.style.width = moldHeight*Imgratio + "px";
				node.style.height = moldHeight + "px";
				
			}
			else{
				node.style.width = moldWidth + "px";
				node.style.height = moldWidth/Imgratio + "px";
			}
			
		}
		
		function designerPicMouseOver(){
			var doc = document;
			doc.getElementById("designerPicImg").src = "images/designer.jpg";
		}
		function designerPicMouseOut(){
			var doc = document;
			doc.getElementById("designerPicImg").src = "images/designergray.jpg";
		}
		
		function dressBigImgClick(){
			var doc = document;
			doc.getElementById("photoFocusGrayDiv").style.display = "inline";
			doc.getElementById("focusedPhoto").src = doc.getElementById("dressBigImg").src;
			setImgSize(doc.getElementById("focusedPhoto"), 650, 700);
			doc.getElementById("focusedPhoto").style.marginTop = (700-doc.getElementById("focusedPhoto").style.height.slice(0,-2))/2 + "px";
		}
		
		var isFocusedButtonClick = 0;
		
		function closeFocusGrayDiv(){
			var doc = document;
			if(isFocusedButtonClick==0){
				doc.getElementById("photoFocusGrayDiv").style.display = "none";			
			}
			isFocusedButtonClick = 0;
		}
		
		function focusedPhotoButtonClick(index){
			var doc = document;
			isFocusedButtonClick = 1;
			if(index == 0 && currentPicIndex > 0){
				currentPicIndex--;
				smallDressClick(doc.getElementById("dressPhotoListTable").childNodes[0].childNodes[0].childNodes[currentPicIndex]);
				dressBigImgClick();
			}
			else if(index == 1 &&currentPicIndex<numberOfPics-1){
				currentPicIndex++;
				smallDressClick(doc.getElementById("dressPhotoListTable").childNodes[0].childNodes[0].childNodes[currentPicIndex]);
				dressBigImgClick();
			}
		}