    
notsuitable = function(rowid) {
    var recnum  = "recno" + rowid;
	var bcolor = document.getElementById(recnum).style.backgroundColor = "#edeceb";
	var bc = document.getElementById("pagingbutton").style.backgroundColor = "#edeceb";
	var bc = document.getElementById("pagingbutton1").style.backgroundColor = "#edeceb";
	var bc = document.getElementById("hradminnote").style.display = "block";
	//var bc = document.getElementById("savechangesbutton").style.display = "block";
	var dchkboxnum  = "dchkbox_" + rowid;
	document.getElementById(dchkboxnum).checked = false;
	document.getElementById(dchkboxnum).disabled = true;
	var chss  = "chs_" + rowid;
	var chs = document.getElementsByClassName(chss);
	chs[0].disabled = false ;
	var notsuitcomment  = "notsuitcomment_" + rowid;
	document.getElementById(notsuitcomment).style.display = "block";
}


myOverFunction = function(){
	document.getElementById("edit-email").style.background = "#ffffff";
}

myoutFunction = function(){
	//var emailform = document.getElementById("edit-email").value;
	//if(emailform == ''){
	//	alert('blank');
	//}
	document.getElementById("edit-email").style.background = "#efeeee";
	
}



checkall = function(){
	var chs = document.getElementsByClassName("checkbox");
	for(var i=0, n=chs.length;i<n;i++) {
		chs[i].checked = true;
		
	}
	document.getElementById("downloadbutton").style.display = "block";
}

checkall_second = function(){
	var chs = document.getElementsByClassName("checkbox_second");
	for(var i=0, n=chs.length;i<n;i++) {
		chs[i].checked = true;
	}
	document.getElementById("downloadbutton_second").style.display = "block";
}


checkall_third = function(){
	var chs = document.getElementsByClassName("checkbox_third");
	for(var i=0, n=chs.length;i<n;i++) {
		chs[i].checked = true;
	}
	document.getElementById("downloadbutton_third").style.display = "block";
}

showdownloadbutt = function(rowid){
	var recnum  = "recno" + rowid;
	var chkid  = "dchkbox_" + rowid;
	var lfckv = document.getElementById(chkid).checked;
	if(lfckv == true){
		var bcolor = document.getElementById(recnum).style.backgroundColor = "#dcb28d";
		document.getElementById("downloadbutton").style.display = "block";
	}else{
		var bcolor = document.getElementById(recnum).style.backgroundColor = "#fff";
		document.getElementById("downloadbutton").style.display = "none";
	}
}



showdownloadbutt_second = function(rowid){
	
	
	var recnum  = "recno" + rowid;
	var chkid  = "dchkbox_" + rowid;

	var lfckv = document.getElementById(chkid).checked;

	if(lfckv == true){
		var bcolor = document.getElementById(recnum).style.backgroundColor = "#dcb28d";
		document.getElementById("downloadbutton_second").style.display = "block";
	}else{
		var bcolor = document.getElementById(recnum).style.backgroundColor = "#fff";
		document.getElementById("downloadbutton_second").style.display = "none";
	}
}

showdownloadbutt_third = function(rowid){
	
	var recnum  = "recno" + rowid;
	var chkid  = "dchkbox_" + rowid;
	var lfckv = document.getElementById(chkid).checked;
	if(lfckv == true){
		var bcolor = document.getElementById(recnum).style.backgroundColor = "#dcb28d";
		document.getElementById("downloadbutton_third").style.display = "block";
	}else{
		var bcolor = document.getElementById(recnum).style.backgroundColor = "#fff";
		document.getElementById("downloadbutton_third").style.display = "none";
	}
}

suitable = function(rowid) {
	var recnum  = "recno" + rowid;
	var bcolor = document.getElementById(recnum).style.backgroundColor = "#f8c8bb";
	var dchkboxnum  = "dchkbox_" + rowid;
	document.getElementById(dchkboxnum).disabled = false;
	var bc = document.getElementById("pagingbutton").style.backgroundColor = "#edeceb";
	var bc = document.getElementById("pagingbutton1").style.backgroundColor = "#edeceb";
	//var bc = document.getElementById("savechangesbutton").style.display = "block";
	var chss  = "chs_" + rowid;
	var chs = document.getElementsByClassName(chss);
	chs[0].disabled = false ;
	var notsuitcomment  = "notsuitcomment_" + rowid;
	var nts = document.getElementById(notsuitcomment).style.display;
	if(nts == "block"){
		var nts0 = document.getElementById(notsuitcomment).style.display = "none";
	}
	
}


reassigned = function(rowid) {
	var recnum  = "recno" + rowid;
    var dchkboxnum  = "dchkbox_" + rowid;
	var notsuitablenum  = "notsuitable_" + rowid;
	var suitablenum  = "suitable_" + rowid;
	var assignedjobselect  = "assignedjob_select" + rowid;
	document.getElementById(dchkboxnum).disabled = false;
	document.getElementById(assignedjobselect).disabled = false;
	document.getElementById(notsuitablenum).checked = false;
	document.getElementById(suitablenum).checked = false;
	document.getElementById(recnum).style.backgroundColor = "#c8f440";
	var chss  = "chs_" + rowid;
	var chs = document.getElementsByClassName(chss);
	chs[0].disabled = false ;
}


assignedjobdisabled = function(rowid){
	var assignedjobselect  = "assignedjob_select" + rowid;
	//document.getElementById(assignedjobselect).disabled = true;
}


checknonsuitable = function(){
	//var suitablenum  = "suitable_" + rowid;
	//var dchkboxnum  = document.getElementById(suitablenum).checked;
	//alert('hello');
}


notsuitableh = function(rowid) {
    var recnum  = "recno" + rowid;
	var notsuitcomment  = "notsuitcomment_" + rowid;
	document.getElementById(notsuitcomment).style.display = "block";
}

notsuitableo = function(rowid) {
    var recnum  = "recno" + rowid;
	var notsuitcomment  = "notsuitcomment_" + rowid;
	document.getElementById(notsuitcomment).style.display = "none";
}


notsuitableapp = function() {
	document.getElementById("popupnonsuit").style.display = "block";
}

notsuitableappo = function() {
	document.getElementById("popupnonsuit").style.display = "none";
}

he = function(){
	var e =  document.getElementById("suitableadmin");
	var selectedoptionsns = e.options[e.selectedIndex].value;
	if(selectedoptionsns == "not-suitable"){
		document.getElementById("popupnonsuit_comment").style.display = "block";
	}else{
		document.getElementById("popupnonsuit_comment").style.display = "none";
	}
}
