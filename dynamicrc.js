//
// QA Test 2.0
// ***********
//
// Created by Kevin M. Thomas & James Pollack & Chris Collins 05/14/16.
// Copyright 2016 High Fidelity, Inc.
//
// JavaScript for the High Fidelity QA Testers to automate data collection, report real-time testing results including HMD testing and generate a formatted report for GitHub.
//
// Distributed under the Apache License, Version 2.0.
// See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
//Chris Collins added some additions to allow for dynamic RC testing


// Create const values
const createTestBlocksScript = "https://raw.githubusercontent.com/highfidelity/hifi/5042561e80367ee2ebefa7d56728246e2d037e9d/unpublishedScripts/DomainContent/Toybox/blockers/createTestBlocks.js";
const harmonicOscillatorScript = "http://s3.amazonaws.com/hifi-public/scripts/harmonicOscillator.js";
const reverbTestScript = "http://s3.amazonaws.com/hifi-public/scripts/utilities/tools/reverbTest.js";
const playaPerformanceTestScript = "https://raw.githubusercontent.com/highfidelity/hifi/master/scripts/developer/tests/playaPerformanceTest.js";

// Create global variables.
var additionalTestResultsObservations;
var result_rc1;
var result_rc2;
var result_rc3;
var result_rc4;
var result_rc5;
var result_rc6;
var result_rc7;
var result_rc8;
var result_rc9;
var result_rc10;
var result_rc11;
var result_rc12;
var result_rc13;
var result_rc14;
var result_rc15;
var result_rc16;
var result_rc17;
var result_rc18;
var result_rc19;
var result_rc20;

var rctest1;




// Function to set up menu params.
function menuParameters(menuNameSelection, menuItemNameSelection) {
  Menu.addMenuItem({
    menuName: menuNameSelection,
    menuItemName: menuItemNameSelection,
    isCheckable: true,
    isChecked: false
  });
}






var url = "https://script.google.com/macros/s/AKfycbwIo4lmF-qUwX1Z-9eA_P-g2gse9oFhNcjVyyksGukyDDEFXgU/exec?action=listOwners&domain=rc11";
print("Loading street data from " + url);

var req = new XMLHttpRequest();

req.responseType = 'json';

req.onreadystatechange = function() {
  if (req.readyState == req.DONE) {
    if (req.status == 200) {
      for (var domain in req.response) {
        print("DOMAIN: " + domain);
        var locations = req.response[domain];
        var userAreas = [];
        Menu.addMenu("QA Test > RC Test");
        for (var i = 0; i < locations.length; i++) {
          var loc = locations[i];

          if (loc[1] != "") {
            menuParameters("QA Test > RC Test", loc[0]);
          }
          userAreas.push({
            qatest: loc[0],
            qadetails: loc[1],


          });

        }


menuParameters("QA Test > RC Test","Generate RC Results [CUT + PASTE RESULT]");
        result_rc1 = userAreas[0].qadetails;
        result_rc2 = userAreas[1].qadetails;
        result_rc3 = userAreas[2].qadetails;
        result_rc4 = userAreas[3].qadetails;
        result_rc5 = userAreas[4].qadetails;
        result_rc6 = userAreas[5].qadetails;
        result_rc7 = userAreas[6].qadetails;
        result_rc8 = userAreas[7].qadetails;
        result_rc9 = userAreas[8].qadetails;
        result_rc10 = userAreas[9].qadetails;
        result_rc11 = userAreas[10].qadetails;
        result_rc12 = userAreas[11].qadetails;
        result_rc13 = userAreas[12].qadetails;
        result_rc14 = userAreas[13].qadetails;
        result_rc15 = userAreas[14].qadetails;
        result_rc16 = userAreas[15].qadetails;
        result_rc17 = userAreas[16].qadetails;
        result_rc18 = userAreas[17].qadetails;
        result_rc19 = userAreas[18].qadetails;
        result_rc20 = userAreas[19].qadetails;
      }
    } else {
      print("Error loading data: " + req.status + " " + req.statusText + ", " + req.errorCode);
    }
  }
}

req.open("GET", url);
req.send();










// Function to setup QA Test menu.
function setupMenus() {
  if (!Menu.menuExists("QA Test")) {
    Menu.addMenu("QA Test");
    Menu.addMenu("QA Test > Non-Smoke Test");
    menuParameters("QA Test > Non-Smoke Test", "Non-Smoke Test QA Pass - SUCCESS");
    menuParameters("QA Test > Non-Smoke Test", "Generate Non-Smoke Test [CUT + PASTE RESULT]");
    Menu.addMenu("QA Test > Smoke Test");
    menuParameters("QA Test > Smoke Test", "LOAD 'createTestBlocks.js'");
    menuParameters("QA Test > Smoke Test", "UNLOAD 'createTestBlocks.js'");
    menuParameters("QA Test > Smoke Test", "localhost 'createTestBlocks.js' + Move Around + Delete - SUCCESS");
    menuParameters("QA Test > Smoke Test", "OPEN ATP Upload [Press CTRL+SHIFT+A]");
    menuParameters("QA Test > Smoke Test", "localhost ATP Upload + Add To World + Move Around + Delete - SUCCESS");
    menuParameters("QA Test > Smoke Test", "ENABLE Echo Server Audio [Un-Mute Microphone + Manually Select DEVELOPER - AUDIO - ECHO SERVER AUDIO]");
    menuParameters("QA Test > Smoke Test", "Echo Server Audio - SUCCESS");
    menuParameters("QA Test > Smoke Test", "LOAD 'harmonicOscillator.js'");
    menuParameters("QA Test > Smoke Test", "UNLOAD 'harmonicOscillator.js'");
    menuParameters("QA Test > Smoke Test", "localhost 'harmonicOscillator.js' - SUCCESS");
    menuParameters("QA Test > Smoke Test", "LOAD 'reverbTest.js'");
    menuParameters("QA Test > Smoke Test", "UNLOAD 'reverbTest.js'");
    menuParameters("QA Test > Smoke Test", "localhost 'reverbTest.js' + Adjust Wet And Dry Levels - SUCCESS");
    menuParameters("QA Test > Smoke Test", "LOAD 'playaPerformanceTest.js'");
    menuParameters("QA Test > Smoke Test", "UNLOAD 'playaPerformanceTest.js'");
    menuParameters("QA Test > Smoke Test", "localhost 'playaPerformanceTest.js' + Type 'localhost' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS");
    menuParameters("QA Test > Smoke Test", "playa 'playaPerformanceTest.js' + Type 'playa' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS");
    menuParameters("QA Test > Smoke Test", "cellscience 'playaPerformanceTest.js' + Type 'cellscience' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS");
    menuParameters("QA Test > Smoke Test", "Smoke Test QA Pass - SUCCESS");
    menuParameters("QA Test > Smoke Test", "Generate Smoke Test [CUT + PASTE RESULT]");
    menuParameters("QA Test > Smoke Test", "Generate Domain Stats Report [CUT + PASTE RESULT]");
    Menu.addMenu("QA Test > HMD RC Test");
    menuParameters("QA Test > HMD RC Test", "HMD RC Test Instructions");
    menuParameters("QA Test > HMD RC Test", "EYE-01 Test - SUCCESS");
    menuParameters("QA Test > HMD RC Test", "EYE-02 Test - SUCCESS");
    menuParameters("QA Test > HMD RC Test", "EYE-03 Test - SUCCESS");
    menuParameters("QA Test > HMD RC Test", "EYE-04 Test - SUCCESS");
    menuParameters("QA Test > HMD RC Test", "EYE-05 Test - SUCCESS");
    menuParameters("QA Test > HMD RC Test", "EYE-06 Test - SUCCESS");
    menuParameters("QA Test > HMD RC Test", "EYE-07 Test - SUCCESS");
    menuParameters("QA Test > HMD RC Test", "Generate HMD RC Testing Report [CUT + PASTE RESULT]");
    menuParameters("QA Test", "Help");
  }
}

// Function to setup menuItemEvent.
function menuItemEvent(menuItem) {
  if (menuItem == "LOAD 'createTestBlocks.js'") {
    null;
  }
  if (Menu.isOptionChecked("LOAD 'createTestBlocks.js'")) {
    Script.loadScript(createTestBlocksScript, true);
    Menu.setIsOptionChecked("LOAD 'createTestBlocks.js'", false);
  }
  if (menuItem == "UNLOAD 'createTestBlocks.js'") {
    null;
  }
  if (Menu.isOptionChecked("UNLOAD 'createTestBlocks.js'")) {
    ScriptDiscoveryService.stopScript(createTestBlocksScript);
    Menu.setIsOptionChecked("UNLOAD 'createTestBlocks.js'", false);
  }
  if (menuItem == "OPEN ATP Upload [Press CTRL+SHIFT+A]") {
    null;
  }
  if (Menu.isOptionChecked("OPEN ATP Upload [Press CTRL+SHIFT+A]")) {
    Menu.setIsOptionChecked("OPEN ATP Upload [Press CTRL+SHIFT+A]", false);
  }
  if (menuItem == "ENABLE Echo Server Audio [Un-Mute Microphone + Manually Select DEVELOPER - AUDIO - ECHO SERVER AUDIO]") {
    null;
  }
  if (Menu.isOptionChecked("ENABLE Echo Server Audio [Un-Mute Microphone + Manually Select DEVELOPER - AUDIO - ECHO SERVER AUDIO]")) {
    Menu.setIsOptionChecked("ENABLE Echo Server Audio [Un-Mute Microphone + Manually Select DEVELOPER - AUDIO - ECHO SERVER AUDIO]", false);
  }
  if (menuItem == "LOAD 'harmonicOscillator.js'") {
    null;
  }
  if (Menu.isOptionChecked("LOAD 'harmonicOscillator.js'")) {
    Script.loadScript(harmonicOscillatorScript, true);
    Menu.setIsOptionChecked("LOAD 'harmonicOscillator.js'", false);
  }
  if (menuItem == "UNLOAD 'harmonicOscillator.js'") {
    null;
  }
  if (Menu.isOptionChecked("UNLOAD 'harmonicOscillator.js'")) {
    ScriptDiscoveryService.stopScript(harmonicOscillatorScript);
    Menu.setIsOptionChecked("UNLOAD 'harmonicOscillator.js'", false);
  }
  if (menuItem == "LOAD 'reverbTest.js'") {
    null;
  }
  if (Menu.isOptionChecked("LOAD 'reverbTest.js'")) {
    Script.loadScript(reverbTestScript, true);
    Menu.setIsOptionChecked("LOAD 'reverbTest.js'", false);
  }
  if (menuItem == "UNLOAD 'reverbTest.js'") {
    null;
  }
  if (Menu.isOptionChecked("UNLOAD 'reverbTest.js'")) {
    ScriptDiscoveryService.stopScript(reverbTestScript);
    Menu.setIsOptionChecked("UNLOAD 'reverbTest.js'", false);
  }
  if (menuItem == "LOAD 'playaPerformanceTest.js'") {
    null;
  }
  if (Menu.isOptionChecked("LOAD 'playaPerformanceTest.js'")) {
    Script.loadScript(playaPerformanceTestScript, true);
    Menu.setIsOptionChecked("LOAD 'playaPerformanceTest.js'", false);
  }
  if (menuItem == "UNLOAD 'playaPerformanceTest.js'") {
    null;
  }
  if (Menu.isOptionChecked("UNLOAD 'playaPerformanceTest.js'")) {
    ScriptDiscoveryService.stopScript(playaPerformanceTestScript);
    Menu.setIsOptionChecked("UNLOAD 'playaPerformanceTest.js'", false);
  }
  if (menuItem == "Generate Non-Smoke Test [CUT + PASTE RESULT]") {
    null;
  }
  if (Menu.isOptionChecked("Generate Non-Smoke Test [CUT + PASTE RESULT]")) {
    generateNonSmokeTestManualTestingReport();
    Menu.setIsOptionChecked("Generate Non-Smoke Test [CUT + PASTE RESULT]", false);
  }
  if (menuItem == "Generate Smoke Test Manual Testing Report") {
    null;
  }
  if (Menu.isOptionChecked("Generate Smoke Test [CUT + PASTE RESULT]")) {
    generateSmokeTestManualTestingReport();
    Menu.setIsOptionChecked("Generate Smoke Test [CUT + PASTE RESULT]", false);
  }

 if (Menu.isOptionChecked("Generate RC Results [CUT + PASTE RESULT]")) {
   
    rcresults();
    Menu.setIsOptionChecked("Generate RC Results [CUT + PASTE RESULT]", false);
  }

  if (Menu.isOptionChecked("Test 1")) {
    rctest1();
    Menu.setIsOptionChecked("Test 1", false);
  }
  if (Menu.isOptionChecked("Test 2")) {
    rctest2();
    Menu.setIsOptionChecked("Test 2", false);
  }
  if (Menu.isOptionChecked("Test 3")) {
    rctest3();
    Menu.setIsOptionChecked("Test 3", false);
  }
  if (Menu.isOptionChecked("Test 4")) {
    rctest4();
    Menu.setIsOptionChecked("Test 4", false);
  }
  if (Menu.isOptionChecked("Test 5")) {
    rctest5();
    Menu.setIsOptionChecked("Test 5", false);
  }
  if (Menu.isOptionChecked("Test 6")) {
    rctest6();
    Menu.setIsOptionChecked("Test 6", false);
  }
  if (Menu.isOptionChecked("Test 7")) {
    rctest7();
    Menu.setIsOptionChecked("Test 7", false);
  }
  if (Menu.isOptionChecked("Test 8")) {
    rctest8();
    Menu.setIsOptionChecked("Test 8", false);
  }
  if (Menu.isOptionChecked("Test 9")) {
    rctest9();
    Menu.setIsOptionChecked("Test 9", false);
  }
  if (Menu.isOptionChecked("Test 10")) {
    rctest10();
    Menu.setIsOptionChecked("Test 10", false);
  }
  if (Menu.isOptionChecked("Test 11")) {
    rctest11();
    Menu.setIsOptionChecked("Test 11", false);
  }
  if (Menu.isOptionChecked("Test 12")) {
    rctest12();
    Menu.setIsOptionChecked("Test 12", false);
  }
  if (Menu.isOptionChecked("Test 13")) {
    rctest13();
    Menu.setIsOptionChecked("Test 13", false);
  }
  if (Menu.isOptionChecked("Test 14")) {
    rctest14();
    Menu.setIsOptionChecked("Test 14", false);
  }
  if (Menu.isOptionChecked("Test 15")) {
    rctest15();
    Menu.setIsOptionChecked("Test 15", false);
  }
  if (Menu.isOptionChecked("Test 16")) {
    rctest16();
    Menu.setIsOptionChecked("Test 16", false);
  }
  if (Menu.isOptionChecked("Test 17")) {
    rctest17();
    Menu.setIsOptionChecked("Test 17", false);
  }
  if (Menu.isOptionChecked("Test 18")) {
    rctest18();
    Menu.setIsOptionChecked("Test 18", false);
  }
  if (Menu.isOptionChecked("Test 19")) {
    rctest19();
    Menu.setIsOptionChecked("Test 19", false);
  }
  if (Menu.isOptionChecked("Test 20")) {
    rctest20();
    Menu.setIsOptionChecked("Test 20", false);
  }






  if (menuItem == "Generate Domain Stats Report [CUT + PASTE RESULT]") {
    null;
  }
  if (Menu.isOptionChecked("Generate Domain Stats Report [CUT + PASTE RESULT]")) {
    generateDomainStatsReport();
    Menu.setIsOptionChecked("Generate Domain Stats Report [CUT + PASTE RESULT]", false);
  }
  if (menuItem == "HMD RC Test Instructions") {
    null;
  }
  if (Menu.isOptionChecked("HMD RC Test Instructions")) {
    hmdRCHelp();
    Menu.setIsOptionChecked("HMD RC Test Instructions", false);
  }
  if (menuItem == "Generate HMD RC Testing Report [CUT + PASTE RESULT]") {
    null;
  }
  if (Menu.isOptionChecked("Generate HMD RC Testing Report [CUT + PASTE RESULT]")) {
    generateHMDRCManualTestingReport();
    Menu.setIsOptionChecked("Generate HMD RC Testing Report [CUT + PASTE RESULT]", false);
  }
  if (menuItem == "Help") {
    null;
  }
  if (Menu.isOptionChecked("Help")) {
    help();
    Menu.setIsOptionChecked("Help", false);
  }
}

// Function to generate Non-Smoke Test Manual Testing report.
function generateNonSmokeTestManualTestingReport() {
  additionalTestResultsObservations = Window.prompt("Enter Additional Test Results + Observations");

  print("Launching Web Window...");

  var htmlUrl = Script.resolvePath("qaTest20nstmtr.html")
  webWindow = new OverlayWebWindow('Non-Smoke Test Manual Testing Report', htmlUrl, 800, 700, false);
  webWindow.webEventReceived.connect(function(data) {
    print("JS Side Event Received: " + data);
  });

  Script.setInterval(function() {
    MyStats.getUsername = Account.getUsername();
    if (Menu.isOptionChecked("Non-Smoke Test QA Pass - SUCCESS")) {
      MyStats.nonSmokeTestQAPass = "**QA Pass** SUCCESS";
    } else {
      MyStats.nonSmokeTestQAPass = "**QA Pass** FAILURE";
    }

    MyStats.additionalTestResultsObservations = additionalTestResultsObservations;
    var message = JSON.stringify(MyStats);
    print("JS Side sending: " + message);
    webWindow.emitScriptEvent(message);
  }, 1 * 1000);

  var MyStats = {};
  Script.scriptEnding.connect(function() {
    webWindow.close();
    webWindow.deleteLater();
  });
}









// RC Results web window.
function rcresults() {

  var htmlUrl = Script.resolvePath("rcteststmtr.html")
  webWindow = new OverlayWebWindow('RC testing results', htmlUrl, 800, 700, false);
  webWindow.webEventReceived.connect(function(data) {
    print("JS Side Event Received: " + data);
  });

  Script.setInterval(function() {
    MyStats.getUsername = Account.getUsername();
    if (Menu.isOptionChecked("Test 1")) {
      MyStats.createTestBlocks = "**" + result_rc1 + "**" + rctest1;
    } else {
      MyStats.createTestBlocks = "**localhost 'createTestBlocks.js'** FAILURE";
    }
    if (Menu.isOptionChecked("localhost ATP Upload + Add To World + Move Around + Delete - SUCCESS")) {
      MyStats.atpUploadEdit = "**localhost ATP** SUCCESS";
    } else {
      MyStats.atpUploadEdit = "**localhost ATP** FAILURE";
    }
    if (Menu.isOptionChecked("Echo Server Audio - SUCCESS")) {
      MyStats.echoServerAudio = "**Echo Server Audio** SUCCESS";
    } else {
      MyStats.echoServerAudio = "**Echo Server Audio** FAILURE";
    }
    if (Menu.isOptionChecked("localhost 'harmonicOscillator.js' - SUCCESS")) {
      MyStats.harmonicOscillator = "**localhost 'harmonicOscillator.js'** SUCCESS";
    } else {
      MyStats.harmonicOscillator = "**localhost 'harmonicOscillator.js'** FAILURE";
    }
    if (Menu.isOptionChecked("localhost 'reverbTest.js' + Adjust Wet And Dry Levels - SUCCESS")) {
      MyStats.reverbTest = "**localhost 'reverbTest.js'** SUCCESS";
    } else {
      MyStats.reverbTest = "**localhost 'reverbTest.js'** FAILURE";
    }
    if (Menu.isOptionChecked("localhost 'playaPerformanceTest.js' + Type 'localhost' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS")) {
      MyStats.localhostPlayaPerformanceTest = "**localhost 'playaPerformanceTest.js'** SUCCESS";
    } else {
      MyStats.localhostPlayaPerformanceTest = "**localhost 'playaPerformanceTest.js'** FAILURE";
    }
    if (Menu.isOptionChecked("playa 'playaPerformanceTest.js' + Type 'playa' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS")) {
      MyStats.playaPlayaPerformanceTest = "**playa 'playaPerformanceTest.js'** SUCCESS";
    } else {
      MyStats.playaPlayaPerformanceTest = "**playa 'playaPerformanceTest.js'** FAILURE";
    }
    if (Menu.isOptionChecked("cellscience 'playaPerformanceTest.js' + Type 'cellscience' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS")) {
      MyStats.cellsciencePlayaPerformanceTest = "**cellscience 'playaPerformanceTest.js'** SUCCESS";
    } else {
      MyStats.cellsciencePlayaPerformanceTest = "**cellscience 'playaPerformanceTest.js'** FAILURE";
    }
    if (Menu.isOptionChecked("Smoke Test QA Pass - SUCCESS")) {
      MyStats.smokeTestQAPass = "**QA Pass** SUCCESS";
    } else {
      MyStats.smokeTestQAPass = "**QA Pass** FAILURE";
    }

    MyStats.additionalTestResultsObservations = additionalTestResultsObservations;
    var message = JSON.stringify(MyStats);
    print("JS Side sending: " + message);
    webWindow.emitScriptEvent(message);
  }, 1 * 1000);

  var MyStats = {};
  Script.scriptEnding.connect(function() {
    webWindow.close();
    webWindow.deleteLater();
  });
}













// Function to generate Manual Testing report.
function generateSmokeTestManualTestingReport() {
  additionalTestResultsObservations = Window.prompt("Enter Additional Test Results + Observations");

  print("Launching Web Window...");

  var htmlUrl = Script.resolvePath("qaTest20stmtr.html")
  webWindow = new OverlayWebWindow('Smoke Test Manual Testing Report', htmlUrl, 800, 700, false);
  webWindow.webEventReceived.connect(function(data) {
    print("JS Side Event Received: " + data);
  });

  Script.setInterval(function() {
    MyStats.getUsername = Account.getUsername();
    if (Menu.isOptionChecked("localhost 'createTestBlocks.js' + Move Around + Delete - SUCCESS")) {
      MyStats.createTestBlocks = "**localhost 'createTestBlocks.js'** SUCCESS";
    } else {
      MyStats.createTestBlocks = "**localhost 'createTestBlocks.js'** FAILURE";
    }
    if (Menu.isOptionChecked("localhost ATP Upload + Add To World + Move Around + Delete - SUCCESS")) {
      MyStats.atpUploadEdit = "**localhost ATP** SUCCESS";
    } else {
      MyStats.atpUploadEdit = "**localhost ATP** FAILURE";
    }
    if (Menu.isOptionChecked("Echo Server Audio - SUCCESS")) {
      MyStats.echoServerAudio = "**Echo Server Audio** SUCCESS";
    } else {
      MyStats.echoServerAudio = "**Echo Server Audio** FAILURE";
    }
    if (Menu.isOptionChecked("localhost 'harmonicOscillator.js' - SUCCESS")) {
      MyStats.harmonicOscillator = "**localhost 'harmonicOscillator.js'** SUCCESS";
    } else {
      MyStats.harmonicOscillator = "**localhost 'harmonicOscillator.js'** FAILURE";
    }
    if (Menu.isOptionChecked("localhost 'reverbTest.js' + Adjust Wet And Dry Levels - SUCCESS")) {
      MyStats.reverbTest = "**localhost 'reverbTest.js'** SUCCESS";
    } else {
      MyStats.reverbTest = "**localhost 'reverbTest.js'** FAILURE";
    }
    if (Menu.isOptionChecked("localhost 'playaPerformanceTest.js' + Type 'localhost' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS")) {
      MyStats.localhostPlayaPerformanceTest = "**localhost 'playaPerformanceTest.js'** SUCCESS";
    } else {
      MyStats.localhostPlayaPerformanceTest = "**localhost 'playaPerformanceTest.js'** FAILURE";
    }
    if (Menu.isOptionChecked("playa 'playaPerformanceTest.js' + Type 'playa' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS")) {
      MyStats.playaPlayaPerformanceTest = "**playa 'playaPerformanceTest.js'** SUCCESS";
    } else {
      MyStats.playaPlayaPerformanceTest = "**playa 'playaPerformanceTest.js'** FAILURE";
    }
    if (Menu.isOptionChecked("cellscience 'playaPerformanceTest.js' + Type 'cellscience' In Box + Click RUN Until DISCONNECT Then Click STOP + If Graph Results Under RED Line - SUCCESS")) {
      MyStats.cellsciencePlayaPerformanceTest = "**cellscience 'playaPerformanceTest.js'** SUCCESS";
    } else {
      MyStats.cellsciencePlayaPerformanceTest = "**cellscience 'playaPerformanceTest.js'** FAILURE";
    }
    if (Menu.isOptionChecked("Smoke Test QA Pass - SUCCESS")) {
      MyStats.smokeTestQAPass = "**QA Pass** SUCCESS";
    } else {
      MyStats.smokeTestQAPass = "**QA Pass** FAILURE";
    }

    MyStats.additionalTestResultsObservations = additionalTestResultsObservations;
    var message = JSON.stringify(MyStats);
    print("JS Side sending: " + message);
    webWindow.emitScriptEvent(message);
  }, 1 * 1000);

  var MyStats = {};
  Script.scriptEnding.connect(function() {
    webWindow.close();
    webWindow.deleteLater();
  });
}

// Function to generate domain stats report.
function generateDomainStatsReport() {
  print("Launching Web Window...");

  var htmlUrl = Script.resolvePath("qaTest20dsr.html")
  webWindow = new OverlayWebWindow('Domain Stats Report', htmlUrl, 550, 560, false);
  webWindow.webEventReceived.connect(function(data) {
    print("JS Side Event Received: " + data);
  });

  Script.setInterval(function() {
    if (Window.location.hostname == "localhost") {
      MyStats.domainInfo = Window.location.hostname;
      MyStats.renderRate = Math.round(Stats.renderrate);
      MyStats.presentRate = Math.round(Stats.presentrate);
      MyStats.presentNewRate = Math.round(Stats.presentnewrate);
      MyStats.bufferCPUCount = Render.getConfig("Stats").bufferCPUCount;
      MyStats.bufferGPUCount = Render.getConfig("Stats").bufferGPUCount;
      MyStats.bufferCPUMemoryUsage = Render.getConfig("Stats").bufferCPUMemoryUsage;
      MyStats.bufferGPUMemoryUsage = Render.getConfig("Stats").bufferGPUMemoryUsage;
      MyStats.textureCPUCount = Render.getConfig("Stats").textureCPUCount;
      MyStats.textureGPUCount = Render.getConfig("Stats").textureGPUCount;
      MyStats.textureGPUTransferCount = Render.getConfig("Stats").textureGPUTransferCount;
      MyStats.textureCPUMemoryUsage = Render.getConfig("Stats").textureCPUMemoryUsage;
      MyStats.textureGPUMemoryUsage = Render.getConfig("Stats").textureGPUMemoryUsage;
      MyStats.textureGPUVirtualMemoryUsage = Render.getConfig("Stats").textureGPUVirtualMemoryUsage;
      MyStats.frameTriangleCount = Render.getConfig("Stats").frameTriangleCount;
      MyStats.frameTriangleRate = Render.getConfig("Stats").frameTriangleRate;
      MyStats.frameAPIDrawcallCount = Render.getConfig("Stats").frameAPIDrawcallCount;
      MyStats.frameDrawcallCount = Render.getConfig("Stats").frameDrawcallCount;
      MyStats.frameDrawcallRate = Render.getConfig("Stats").frameDrawcallRate;
      MyStats.frameTextureCount = Render.getConfig("Stats").frameTextureCount;
      MyStats.frameSetPipelineCount = Render.getConfig("Stats").frameSetPipelineCount;
      MyStats.itemOpaques = Render.getConfig("DrawOpaqueDeferred").numDrawn;
      MyStats.itemTranslucents = Render.getConfig("DrawTransparentDeferred").numDrawn;
      MyStats.itemLights = Render.getConfig("DrawLight").numDrawn;
      MyStats.timingOpaques = Render.getConfig("DrawOpaqueDeferred").cpuRunTime;
      MyStats.timingTranslucents = Render.getConfig("DrawTransparentDeferred").cpuRunTime;
      MyStats.timingLighting = Render.getConfig("RenderDeferred").cpuRunTime;
      MyStats.renderFrame = Render.getConfig("RenderDeferredTask").cpuRunTime;
    } else if (Window.location.hostname == "Playa") {
      MyStats.domainInfo_playa = Window.location.hostname;
      MyStats.renderRate_playa = Math.round(Stats.renderrate);
      MyStats.presentRate_playa = Math.round(Stats.presentrate);
      MyStats.presentNewRate_playa = Math.round(Stats.presentnewrate);
      MyStats.bufferCPUCount_playa = Render.getConfig("Stats").bufferCPUCount;
      MyStats.bufferGPUCount_playa = Render.getConfig("Stats").bufferGPUCount;
      MyStats.bufferCPUMemoryUsage_playa = Render.getConfig("Stats").bufferCPUMemoryUsage;
      MyStats.bufferGPUMemoryUsage_playa = Render.getConfig("Stats").bufferGPUMemoryUsage;
      MyStats.textureCPUCount_playa = Render.getConfig("Stats").textureCPUCount;
      MyStats.textureGPUCount_playa = Render.getConfig("Stats").textureGPUCount;
      MyStats.textureGPUTransferCount_playa = Render.getConfig("Stats").textureGPUTransferCount;
      MyStats.textureCPUMemoryUsage_playa = Render.getConfig("Stats").textureCPUMemoryUsage;
      MyStats.textureGPUMemoryUsage_playa = Render.getConfig("Stats").textureGPUMemoryUsage;
      MyStats.textureGPUVirtualMemoryUsage_playa = Render.getConfig("Stats").textureGPUVirtualMemoryUsage;
      MyStats.frameTriangleCount_playa = Render.getConfig("Stats").frameTriangleCount;
      MyStats.frameTriangleRate_playa = Render.getConfig("Stats").frameTriangleRate;
      MyStats.frameAPIDrawcallCount_playa = Render.getConfig("Stats").frameAPIDrawcallCount;
      MyStats.frameDrawcallCount_playa = Render.getConfig("Stats").frameDrawcallCount;
      MyStats.frameDrawcallRate_playa = Render.getConfig("Stats").frameDrawcallRate;
      MyStats.frameTextureCount_playa = Render.getConfig("Stats").frameTextureCount;
      MyStats.frameSetPipelineCount_playa = Render.getConfig("Stats").frameSetPipelineCount;
      MyStats.itemOpaques_playa = Render.getConfig("DrawOpaqueDeferred").numDrawn;
      MyStats.itemTranslucents_playa = Render.getConfig("DrawTransparentDeferred").numDrawn;
      MyStats.itemLights_playa = Render.getConfig("DrawLight").numDrawn;
      MyStats.timingOpaques_playa = Render.getConfig("DrawOpaqueDeferred").cpuRunTime;
      MyStats.timingTranslucents_playa = Render.getConfig("DrawTransparentDeferred").cpuRunTime;
      MyStats.timingLighting_playa = Render.getConfig("RenderDeferred").cpuRunTime;
      MyStats.renderFrame_playa = Render.getConfig("RenderDeferredTask").cpuRunTime;
    } else if (Window.location.hostname == "cellscience") {
      MyStats.domainInfo_cellscience = Window.location.hostname;
      MyStats.renderRate_cellscience = Math.round(Stats.renderrate);
      MyStats.presentRate_cellscience = Math.round(Stats.presentrate);
      MyStats.presentNewRate_cellscience = Math.round(Stats.presentnewrate);
      MyStats.bufferCPUCount_cellscience = Render.getConfig("Stats").bufferCPUCount;
      MyStats.bufferGPUCount_cellscience = Render.getConfig("Stats").bufferGPUCount;
      MyStats.bufferCPUMemoryUsage_cellscience = Render.getConfig("Stats").bufferCPUMemoryUsage;
      MyStats.bufferGPUMemoryUsage_cellscience = Render.getConfig("Stats").bufferGPUMemoryUsage;
      MyStats.textureCPUCount_cellscience = Render.getConfig("Stats").textureCPUCount;
      MyStats.textureGPUCount_cellscience = Render.getConfig("Stats").textureGPUCount;
      MyStats.textureGPUTransferCount_cellscience = Render.getConfig("Stats").textureGPUTransferCount;
      MyStats.textureCPUMemoryUsage_cellscience = Render.getConfig("Stats").textureCPUMemoryUsage;
      MyStats.textureGPUMemoryUsage_cellscience = Render.getConfig("Stats").textureGPUMemoryUsage;
      MyStats.textureGPUVirtualMemoryUsage_cellscience = Render.getConfig("Stats").textureGPUVirtualMemoryUsage;
      MyStats.frameTriangleCount_cellscience = Render.getConfig("Stats").frameTriangleCount;
      MyStats.frameTriangleRate_cellscience = Render.getConfig("Stats").frameTriangleRate;
      MyStats.frameAPIDrawcallCount_cellscience = Render.getConfig("Stats").frameAPIDrawcallCount;
      MyStats.frameDrawcallCount_cellscience = Render.getConfig("Stats").frameDrawcallCount;
      MyStats.frameDrawcallRate_cellscience = Render.getConfig("Stats").frameDrawcallRate;
      MyStats.frameTextureCount_cellscience = Render.getConfig("Stats").frameTextureCount;
      MyStats.frameSetPipelineCount_cellscience = Render.getConfig("Stats").frameSetPipelineCount;
      MyStats.itemOpaques_cellscience = Render.getConfig("DrawOpaqueDeferred").numDrawn;
      MyStats.itemTranslucents_cellscience = Render.getConfig("DrawTransparentDeferred").numDrawn;
      MyStats.itemLights_cellscience = Render.getConfig("DrawLight").numDrawn;
      MyStats.timingOpaques_cellscience = Render.getConfig("DrawOpaqueDeferred").cpuRunTime;
      MyStats.timingTranslucents_cellscience = Render.getConfig("DrawTransparentDeferred").cpuRunTime;
      MyStats.timingLighting_cellscience = Render.getConfig("RenderDeferred").cpuRunTime;
      MyStats.renderFrame_cellscience = Render.getConfig("RenderDeferredTask").cpuRunTime;
    }
    var message = JSON.stringify(MyStats);
    print("JS Side sending: " + message);
    webWindow.emitScriptEvent(message);
  }, 1 * 1000);

  var MyStats = {};
  Script.scriptEnding.connect(function() {
    webWindow.close();
    webWindow.deleteLater();
  });
}

function rctest1() {

  rctest1 = Window.prompt(result_rc1);
  print(rctest1);

}

function rctest2() {

  rctest2 = Window.prompt(result_rc2);


}

function rctest3() {

  rctest3 = Window.prompt(result_rc3);


}

function rctest4() {

  rctest4 = Window.prompt(result_rc4);


}

function rctest5() {

  rctest5 = Window.prompt(result_rc5);


}

function rctest6() {

  rctest6 = Window.prompt(result_rc6);


}

function rctest7() {

  rctest7 = Window.prompt(result_rc7);


}

function rctest8() {

  rctest8 = Window.prompt(result_rc8);


}

function rctest9() {

  rctest9 = Window.prompt(result_rc9);


}

function rctest10() {

  rctest10 = Window.prompt(result_rc0);


}

function rctest11() {

  rctest11 = Window.prompt(result_rc11);


}

function rctest12() {

  rctest12 = Window.prompt(result_rc12);


}

function rctest13() {

  rctest13 = Window.prompt(result_rc13);


}

function rctest14() {

  rctest14 = Window.prompt(result_rc14);


}

function rctest15() {

  rctest15 = Window.prompt(result_rc15);


}

function rctest16() {

  rctest16 = Window.prompt(result_rc16);


}

function rctest17() {

  rctest17 = Window.prompt(result_rc17);


}

function rctest18() {

  rctest18 = Window.prompt(result_rc18);


}

function rctest19() {

  rctest19 = Window.prompt(result_rc19);


}

function rctest20() {

  rctest20 = Window.prompt(result_rc20);


}








// Function to generate HMD RC Manual Testing report.
function generateHMDRCManualTestingReport() {
  additionalTestResultsObservations = Window.prompt("Enter Additional Test Results + Observations");

  print("Launching Web Window...");

  var htmlUrl = Script.resolvePath("qaTest20HMDRCmtr.html")
  webWindow = new OverlayWebWindow('HMD RC Manual Testing Report', htmlUrl, 400, 500, false);
  webWindow.webEventReceived.connect(function(data) {
    print("JS Side Event Received: " + data);
  });

  Script.setInterval(function() {
    if (Menu.isOptionChecked("EYE-01 Test - SUCCESS")) {
      MyStats.eye01Test = "**EYE-01 Test** SUCCESS";
    } else {
      MyStats.eye01Test = "**EYE-01 Test** FAILURE";
    }
    if (Menu.isOptionChecked("EYE-02 Test - SUCCESS")) {
      MyStats.eye02Test = "**EYE-02 Test** SUCCESS";
    } else {
      MyStats.eye02Test = "**EYE-02 Test** FAILURE";
    }
    if (Menu.isOptionChecked("EYE-03 Test - SUCCESS")) {
      MyStats.eye03Test = "**EYE-03 Test** SUCCESS";
    } else {
      MyStats.eye03Test = "**EYE-03 Test** FAILURE";
    }
    if (Menu.isOptionChecked("EYE-04 Test - SUCCESS")) {
      MyStats.eye04Test = "**EYE-04 Test** SUCCESS";
    } else {
      MyStats.eye04Test = "**EYE-04 Test** FAILURE";
    }
    if (Menu.isOptionChecked("EYE-05 Test - SUCCESS")) {
      MyStats.eye05Test = "**EYE-05 Test** SUCCESS";
    } else {
      MyStats.eye05Test = "**EYE-05 Test** FAILURE";
    }
    if (Menu.isOptionChecked("EYE-06 Test - SUCCESS")) {
      MyStats.eye06Test = "**EYE-06 Test** SUCCESS";
    } else {
      MyStats.eye06Test = "**EYE-06 Test** FAILURE";
    }
    if (Menu.isOptionChecked("EYE-07 Test - SUCCESS")) {
      MyStats.eye07Test = "**EYE-07 Test** SUCCESS";
    } else {
      MyStats.eye07Test = "**EYE-07 Test** FAILURE";
    }

    MyStats.additionalTestResultsObservations = additionalTestResultsObservations;
    var message = JSON.stringify(MyStats);
    print("JS Side sending: " + message);
    webWindow.emitScriptEvent(message);
  }, 1 * 1000);

  var MyStats = {};
  Script.scriptEnding.connect(function() {
    webWindow.close();
    webWindow.deleteLater();
  });
}

// Function to provide HMD RC help instructions for the application.
function hmdRCHelp() {
  print("Launching Web Window...");

  var htmlUrl = Script.resolvePath("qaTest20HMDRChelp.html")
  webWindow = new OverlayWebWindow('QA Test 2.0 HMD RC Test Instructions', htmlUrl, 900, 700, false);
}

// Function to provide help instructions for the application.
function help() {
  print("Launching Web Window...");

  var htmlUrl = Script.resolvePath("qaTest20help.html")
  webWindow = new OverlayWebWindow('QA Test 2.0 Help', htmlUrl, 800, 700, false);
}

// Function to delete overlays upon exit.
function onScriptEnding() {
  Menu.removeMenu("QA Test");
}

// Call setupMenu function.
setupMenus();

// Connect menuItemEvent.
Menu.menuItemEvent.connect(menuItemEvent);

// Call function upon ending script.
Script.scriptEnding.connect(onScriptEnding);
