# onlineTestForColorVision
This is a self contained script that will run a test for color blindness.

In your direcory you will need to have the files colorBlindnessTest.js and colorBlindness.css as well as the folder "IshiharaPlates" which contains the images used for the test. An answer key for these images can be found in the file "IshiharaAnswerKey.txt" located in the folder. These images were taken from: https://www.challengetb.org/publications/tools/country/Ishihara_Tests.pdf 

You will need to include the following in your html document:

    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src = "colorBlindnessTestScript.js"></script>
    <link rel="stylesheet" type="text/css" href="colorBlindness.css"/>
    </head>

    <body>
      <div id = "colorBlindnessTestinstruc"></div>
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
    
    
To include the test in your experiment you will need to call the "ShowColorBlindnessTestInstruc()" function.
To exit the test you should add code specific to your exoeriment in the "ToMainExperiment()" function.
