// JavaScript Document

//var isOrange = true;
//var mydialog = $('#dialog').parent().find('jsavsettings-dialog');
//var buttons = mydialog.dialog("option", "buttons"); // getter
//$.extend(buttons, { Sound: function () {
//    if(isOrange) {
//    button.style.background = "orange";
//}else {
//    button.style.background = "none";
//}
//isOrange = !isOrange;
//
//if (voice == true)
//		voice = false;
//	else
//		voice = true;
//	var synth = window.speechSynthesis;
//	var amISpeaking = synth.speaking;
//		if(amISpeaking==true)
//			synth.cancel(); 
	//	else
//		   	textToSpeech();
//		
//	this.return;
//
//}});
//mydialog.dialog("option", "buttons", buttons); // setter

//newButton.button().click(function () );
//buttonSet.append(newButton);

//var button = document.createElement("button");
//button.innerHTML = "Speech";
//createSelectComponent.prototype.on_offVoice = function() {

//var body = document.getElementsByTagName("body")[0];
//body.appendChild(button);

//body.appendChild(button);


//var sound = button.addEventListener("click", function() {
//});

 
//////////////////////////////////////////////////////
//////////////Text to Speech Function
var voice = false;
var SpeechId;
function textToSpeech() {
	var synth = window.speechSynthesis;
	var amISpeaking = synth.speaking;
	var u = new SpeechSynthesisUtterance();
	
//	var x = event.clientX, y = event.clientY;
////  elementMouseIsOver = document.elementFromPoint(x, y);
//	var z = document.getElementsByClassName("jsavoutput jsavline");
//	var a=z[0];
//	alert(z[0]);
//	var rect0 = a.getBoundingClientRect();
//	var rect;
//	for (var i=1; i< z.length; i++)
//	{
//		rect = z[i].getBoundingClientRect();
//		if((rect.top - y) < (rect0.top-y))
//			a = z[i];
//	}
//		u.text = document.getElementsByClassName(a).innerHTML;        
//'[class="jsavoutput jsavline"]'
	   u.text = document.getElementById(SpeechId).getElementsByClassName("jsavoutput jsavline")[0].innerHTML;    
       u.lang = 'en-US';
       u.rate = 1.0;
    if(amISpeaking==true)
	{
		synth.cancel(); 
	}
	synth.speak(u);
	synth.resume();	
}
//////////////////////////////////////////////////////
//////////////End of Text to Speech Function


$(document).ready(function() {
  "use strict";

//window.onload = textToSpeech(); 
////////////////////////////////////////////////////////////
////////Invoking sound with forward and backword click
      $('.jsavforward').click(function() {
		  if(voice == true)
		   	textToSpeech(); 
     });
    $('.jsavbackward').click(function() {
		if(voice == true)
			textToSpeech();
	});
    $('.jsavbegin').click(function() {
		if(voice == true)
			textToSpeech();
    });
    $('.jsavend').click(function() {
		if(voice == true)
			textToSpeech();
    });
	
});

 ///////////////////////////////////////////////////////////
////////End of Invoking sound with forward and backword click



////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///create on/off sound button

//Settings.prototype.AddsoundButton = function(){
//var initialHTML = this.container.clone().wrap("<p/>").parent().html();
  //  this._initialHTML = this.container.html();

    //this.container.addClass("jsavcontainer");
	
    //var button = document.createElement("button");
//    button.appendChild(document.createTextNode('Speech'));
//    document.getElementByClassName("ssAV jsavcontainer")[0].appendChild(button);

//var btn = document.createElement("button");
//btn.innerHTML = "Speech";
//button.push(create);
//var body = document.getElementsByClassName("jsavcontrols")[0];//.parentNode;
//alert("" + body);
//var body = document.getElementByClassName("section")[0].parentNode;          
//var body = document.getElementsByTagName("body")[0];
//alert(body);

//var body = document.getElements;//.getElementsByTagName("a")[0];//.parentNode;
//alert(body);
//body.appendChild(btn);
//var loc = document.getElementsByClassName("jsavsettings")[0];
//var $cont = $("<div id='garbageDisposalCON'></div>");
//      $cont.append(button);
//
//loc.appendChild(button);
//var isOrange = true;
//
//button.addEventListener("click", function() {
//if(isOrange) {
//    button.style.background = "orange";
//}else {
//    button.style.background = "none";
//}
//isOrange = !isOrange;
//
//if (voice == true)
//		voice = false;
//	else
//		voice = true;
//	var synth = window.speechSynthesis;
//	var amISpeaking = synth.speaking;
//		if(amISpeaking==true)
//		synth.cancel(); 
//	else
//	   	textToSpeech();
//});
// }
 

 
 
 ///////////////////////////////
///End of oode of creatiing on/off sound button