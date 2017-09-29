// JavaScript Document

 
//////////////////////////////////////////////////////
//////////////Text to Speech Function
var voice = false;
var SpeechId;
function textToSpeech() {
	var synth = window.speechSynthesis;
	var amISpeaking = synth.speaking;
	var u = new SpeechSynthesisUtterance();
	
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



