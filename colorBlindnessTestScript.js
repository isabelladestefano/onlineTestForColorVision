/* This is a self contained script that will run a test for color blindness.
To include the test in your experiment you will need to call the "ShowColorBlindnessTestInstruc()" function.
To exit the test you should add code specific to your exoeriment in the "ToMainExperiment()" function.

In your direcory you will need the colorBlindness.css file as well as the folder "IshiharaPlates" which contains the images used for the test. An answer key for these images can be found in the file "IshiharaAnswerKey.txt" located in the folder.
You will need to include the following in your html document:

    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src = "colorBlindnessTestScript.js"></script>
    <link rel="stylesheet" type="text/css" href="colorBlindness.css"/>
    </head>

    <body>
      <div id = "colorBlindnessTest">
        <div id = "colorBlindnessTestText">
        </div>
        <div id = "colorBlindnessResponse" >
        <textarea name="response" id="response" autofocus ></textarea><br><br>
        <div id = "submitText">Press 'Enter' to continue.</div><br><br><br>
        <div id = 'enterNumberError'></div>
        </div>
      </div>
    </body>

*/


function ToMainExperiment(){
  //add code to start your experiment
}
var testIndex = 0;
var testNumbers = [1,2,4,6,8,9,11,13,14,15,16,17,18,20,22,23];
var testResponses = new Array;

function ShowColorBlindnessTestInstruc(){
    $("#startscreen").hide();
    $("#colorBlindnessTestinstruc").html("<p>The following is a test for color blindness. You will be asked to view some images of number and enter the number that you see. Some of the images will have no descernible number visible -- in this case you should enter the number 0.<br><br> Press the Enter key to continue.");
    $("#colorBlindnessTestinstruc").show();
    $(document).bind('keypress.enter', function(e) {
        if(e.keyCode == 13){
          e.preventDefault();
              $(document).unbind('keypress.enter');
              $("#colorBlindnessTestinstruc").hide();
              ShowColorBlindnessTest();
        }
    });
}

function ShowColorBlindnessTest(){
  $("#colorBlindnessTestText").html( "<p>Please enter the number that you see in the picture. <br> If you do not see a number in the picture type the number 0.</p><p align='center'><img src='IshiharaPlates/IshiharaPlate"+testNumbers[testIndex]+".png' width='400'></p>");
  $("#colorBlindnessTest").show();
  EnterResponse();
}

function EnterResponse(){
  $('#response').focus();
  $(document).bind('keypress.enter', function(e) {
      if(e.keyCode == 13){
        e.preventDefault();
        if(CheckNumber($('#response').val())){
          if($('#response').val()!= ""){
            console.log(testResponses);
            testResponses.push($('#response').val());
            testIndex++;
            document.getElementById("response").value = "";
            $(document).unbind('keypress.enter');
            if(testIndex >= testNumbers.length){
              $("#colorBlindnessTest").children().hide();
              ToMainExperiment();
              return;
            }
            $("#colorBlindnessTest").hide();
            ShowColorBlindnessTest();
          }
        }
      }
  });
}


function CheckNumber(){
  var textEntered = $('#response').val();
  if(textEntered.length == 0){
    return false;
  }
  if(!isNaN(textEntered)){
    if(/\s/.test(textEntered)){
      $('#enterNumberError').html('Please remove all non-numbers from your response (including spaces!)');
      $('#enterNumberError').show();
      textEntered = "";
      document.getElementById("response").value = "";
      return false;
    }
    if(!/\s/.test(textEntered)){
        textEntered = "";
        return true;
    }
    else{
      $('#enterNumberError').html('The value you have entered is invalid. Please try again.');
      $('#enterNumberError').show();
      document.getElementById("response").value = "";
      return false;
    }
  }
  else{
    $('#enterNumberError').html('The value you have entered is invalid. Please try again.');
    $('#enterNumberError').show();
    document.getElementById("response").value = "";
    return false;
  }
}
