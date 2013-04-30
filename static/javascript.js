	function streamGenerator (a){
		var streamObjectOne = '<object type="application/x-shockwave-flash" height="478" width="800" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=';
		var streamObjectTwo = '" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=';
		var streamObjectThree = '&auto_play=true&start_volume=25" /></object>';
		var streamOneObject = (streamObjectOne + a + streamObjectTwo + a + streamObjectThree);
		return streamOneObject;
	}

	var checkForm1 = document.forms["mainForm"]["streamOneFunc"].value;
	var checkForm2 = document.forms["mainForm"]["streamTwoFunc"].value;
	var checkForm3 = document.forms["mainForm"]["streamThreeFunc"].value;
	var checkForm4 = document.forms["mainForm"]["streamFourFunc"].value;

function getStreamName(a){
	var name = a.substring(21);
	return name;
}

function required()  
	{

	var form1 = document.forms["mainForm"]["streamOneFunc"].value;
	var form2 = document.forms["mainForm"]["streamTwoFunc"].value;
	var form3 = document.forms["mainForm"]["streamThreeFunc"].value;
	var form4 = document.forms["mainForm"]["streamFourFunc"].value;

	if (form1 == "" && form2 == "" && form3 == "" && form4 == "")  
	{  
	alert("All four fields are empty");  
	return false;  
	}  
	else if (form1 != "" && form2 == "" && form3 == "" && form4 == "")  
		{  
		var stateOne = (streamGenerator(getStreamName(form1)));
		document.getElementById('streamOneEmbedded').innerHTML=(stateOne); 
		return false;   
		}
		else if (form1 == "" && form2 != "" && form3 == "" && form4 == "")  
			{  
			var stateTwo = (streamGenerator(getStreamName(form2)));
			document.getElementById('streamTwoEmbedded').innerHTML=(stateTwo); 
			return false;   
			}   
			else if (form1 == "" && form2 == "" && form3 != "" && form4 == "")  
				{  
				var stateThree = (streamGenerator(getStreamName(form3)));
				document.getElementById('streamThreeEmbedded').innerHTML=(stateThree); 
				return false;   
				} 
				else if (form1 == "" && form2 == "" && form3 == "" && form4 != "")  
					{  
					var stateFour = (streamGenerator(getStreamName(form4)));
					document.getElementById('streamFourEmbedded').innerHTML=(stateFour); 
					return false;   
					}
				else if (form1 != "" && form2 != "" && form3 == "" && form4 == "")  
					{  
					var stateOne = (streamGenerator(getStreamName(form1)));
					document.getElementById('streamOneEmbedded').innerHTML=(stateOne);
					var stateTwo = (streamGenerator(getStreamName(form2)));
					document.getElementById('streamTwoEmbedded').innerHTML=(stateTwo);  
					return false; 
					}
				else if (form1 != "" && form2 == "" && form3 != "" && form4 == "")  
					{  
					var stateOne = (streamGenerator(getStreamName(form1)));
					document.getElementById('streamOneEmbedded').innerHTML=(stateOne);
					var stateThree = (streamGenerator(getStreamName(form3)));
					document.getElementById('streamThreeEmbedded').innerHTML=(stateThree);  
					return false; 
					}
				else if (form1 != "" && form2 == "" && form3 == "" && form4 != "")  
					{  
					var stateOne = (streamGenerator(getStreamName(form1)));
					document.getElementById('streamOneEmbedded').innerHTML=(stateOne);
					var stateFour = (streamGenerator(getStreamName(form4)));
					document.getElementById('streamFourEmbedded').innerHTML=(stateFour);  
					return false; 
					}
				else if (form1 == "" && form2 != "" && form3 != "" && form4 == "")  
					{  
					var stateTwo = (streamGenerator(getStreamName(form2)));
					document.getElementById('streamTwoEmbedded').innerHTML=(stateTwo);
					var stateThree = (streamGenerator(getStreamName(form3)));
					document.getElementById('streamThreeEmbedded').innerHTML=(stateThree);  
					return false;   
					}
				else if (form1 == "" && form2 != "" && form3 == "" && form4 != "")  
					{  
					var stateTwo = (streamGenerator(getStreamName(form2)));
					document.getElementById('streamTwoEmbedded').innerHTML=(stateTwo);
					var stateFour = (streamGenerator(getStreamName(form4)));
					document.getElementById('streamFourEmbedded').innerHTML=(stateFour);  
					return false;  
					}
				else if (form1 == "" && form2 == "" && form3 != "" && form4 != "")  
					{  
					var stateThree = (streamGenerator(getStreamName(form3)));
					document.getElementById('streamThreeEmbedded').innerHTML=(stateThree);
					var stateFour = (streamGenerator(getStreamName(form4)));
					document.getElementById('streamFourEmbedded').innerHTML=(stateFour);  
					return false; 
					}  
				else if (form1 != "" && form2 != "" && form3 != "" && form4 == "")  
					{  
					var stateOne = (streamGenerator(getStreamName(form1)));
					document.getElementById('streamOneEmbedded').innerHTML=(stateOne);
					var stateTwo = (streamGenerator(getStreamName(form2)));
					document.getElementById('streamTwoEmbedded').innerHTML=(stateTwo);  
					var stateThree = (streamGenerator(getStreamName(form3)));
					document.getElementById('streamThreeEmbedded').innerHTML=(stateThree); 
				    return false;  
					}  
				else if (form1 != "" && form2 != "" && form3 == "" && form4 != "")  
					{  
					var stateOne = (streamGenerator(getStreamName(form1)));
					document.getElementById('streamOneEmbedded').innerHTML=(stateOne);
					var stateTwo = (streamGenerator(getStreamName(form2)));
					document.getElementById('streamTwoEmbedded').innerHTML=(stateTwo);  
					var stateFour = (streamGenerator(getStreamName(form4)));
					document.getElementById('streamFourEmbedded').innerHTML=(stateFour); 
				    return false;  
					}  
				else if (form1 != "" && form2 == "" && form3 != "" && form4 != "")  
					{  
					var stateOne = (streamGenerator(getStreamName(form1)));
					document.getElementById('streamOneEmbedded').innerHTML=(stateOne);
					var stateThree = (streamGenerator(getStreamName(form3)));
					document.getElementById('streamThreeEmbedded').innerHTML=(stateThree);  
					var stateFour = (streamGenerator(getStreamName(form4)));
					document.getElementById('streamFourEmbedded').innerHTML=(stateFour); 
				    return false;     
					}  
				else if (form1 == "" && form2 != "" && form3 != "" && form4 != "")  
					{  
					var stateTwo = (streamGenerator(getStreamName(form2)));
					document.getElementById('streamTwoEmbedded').innerHTML=(stateTwo);
					var stateThree = (streamGenerator(getStreamName(form3)));
					document.getElementById('streamThreeEmbedded').innerHTML=(stateThree);  
					var stateFour = (streamGenerator(getStreamName(form4)));
					document.getElementById('streamFourEmbedded').innerHTML=(stateFour); 
				    return false;    
					}  
				else if (form1 != "" && form2 != "" && form3 != "" && form4 != "")  
					{  
					var stateOne = (streamGenerator(getStreamName(form1)));
					document.getElementById('streamOneEmbedded').innerHTML=(stateOne);
					var stateTwo = (streamGenerator(getStreamName(form2)));
					document.getElementById('streamTwoEmbedded').innerHTML=(stateTwo);  
					var stateThree = (streamGenerator(getStreamName(form3)));
					document.getElementById('streamThreeEmbedded').innerHTML=(stateThree);
					var stateFour = (streamGenerator(getStreamName(form4)));
					document.getElementById('streamFourEmbedded').innerHTML=(stateFour); 
				    return false;  
					}         
}  

