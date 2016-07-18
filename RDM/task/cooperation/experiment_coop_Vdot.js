/*
Show the instructions slide — this is what we want subjects to see first.
*/
 
showSlide("load_image");
//randomly select a number between 1 and 10
var stim_set = random(1,10)
 
cc = 0;
all_stim = gen_order();
var images = new Array();
var count = 150;
var speed = 2;
var RL = [];
var coherence = [];
var size = 1.5;
var even = 0;
 
//This was loading all images before
//for (i = 0; i < all_stim.length; i++) {
//  images[cc] = new Image()
//  images[cc].src = "../images/" + stim_set + '/' + all_stim[i][0] + "_" + all_stim[i][1] + ".jpg";
//  cc++ 
//}
 
 
showSlide("instructions");
 
var experiment = {
  nTrials: 80,
  keypos: _.sample(["1","2"]),
  //stim_set: stim_set,
  trial_num: 0,
  order: gen_order(),
  predict_order: gen_predictions(),
  tally_c: 0,
  tally_p: 0,
  bonus: 0,
  browser: BrowserDetect.browser,
  mobile: "",
  OutcomeTime: 1000,
  MaxResponseTime: 4000,
   
  // Demographics
  AC3a:"",
  AC3b:"",
  AC3c:"",
  AC3:"Failed",
  understand:"",
  gender: "",
  age:"",
  comments:"",
  race:"",
  enjoyment:"",
 
  dataPhase1: [],
  dataPhase2: [],
  confPhase1: [],
  confPhase2: [],
 
// Goes to description slide
descriptionLeft: function() {
  showSlide("descriptionLeft");
 
  if (turk.previewMode) {
    alert ( "Please accept the HIT before continuing." );
  }
          var nums = [];
        for (var i = 0; i < count; i++) {
           nums.push(i);
        }

        paper.install(window);
        //console.log(nums);
        shuffling(nums);

 
        var First = nums.slice(0, 50);
        var Second = nums.slice(50, 100);
        var Third = nums.slice(100, 151);

        var full = [First,Second,Third];
        //console.log(full);
        var i = 0;
        var j = 0;      
 
    paper.setup('InstructLeft');
      
      var Prac_RL = -1;
      var Prac_coherence = .5; 
    //}
    //paper.project.clear();
 
    //Creates a circle with radius 1 and places it at 0,0
      var path = new Path.Circle([view.size.width*Math.random(),view.size.height*Math.random()], size);
      //makes the circle white with a white outline
      //path.strokeColor = 'white';
      path.fillColor = 'white';
 
      //creates a symbol in order to make multiple dots
      var symbol = new Symbol(path);
 
      //Loop that creats all the dots (# = count) and randomly 
      // place them on the canvas
      for (var i = 0; i < count; i++) {
        // The center position is a random point in the view:
        var center = [view.size.width*Math.random(),view.size.height*Math.random()];
        symbol.place(center);
      }
      //onFrame gets called 60 times per sec; creates the animation/motion
      view.onFrame = function(event) {
        even ++;
        if(even%2 === 0){
        // Loop to take each dot 1 at a time for the animation/motion
            for (var i = 0; i < full.length; i++) {
              for (var j = 0; j < full[i].length; j++){
                shuffling(full[i]);
                var current = full[i][j];
                var item = project.activeLayer.children[current];
                    //console.log(item);
                    //console.log([i,j]);
                    //console.log(current);
                if (j < (count/3)*Prac_coherence) {
                  item.position.x += (.5)*Prac_RL;
                } else {
                  //var center = [view.size.width*Math.random(),view.size.height*Math.random()];
                  //console.log(center);
                  item.position.x = view.size.width*Math.random();
                  item.position.y = view.size.height*Math.random();
                }
                    // If the item has left the view on the right, move it back
                    // to the left: and the others are if its left, top, and bottom
                    if (item.bounds.left > view.size.width*1.1) {
                        item.position.x = +item.bounds.width;
                    }
                    if (item.bounds.right < 0) {
                        item.position.x = +view.size.width;
                    }
              }
            }
        }
    }
      paper.view.draw();
 
},
descriptionRight: function() {
  showSlide("descriptionRight");
 
  if (turk.previewMode) {
    alert ( "Please accept the HIT before continuing." );
  }

   var nums = [];
        for (var i = 0; i < count; i++) {
           nums.push(i);
        }

  paper.install(window);
        //console.log(nums);
        shuffling(nums);
        //console.log(nums);
        //console.log(nums);
 
        var First = nums.slice(0, 50);
        var Second = nums.slice(50, 100);
        var Third = nums.slice(100, 151);

        var full = [First,Second,Third];
        //console.log(full);
        var i = 0;
        var j = 0;      
 
    paper.setup('InstructRight');
      
      var Prac_RL = 1;
      var Prac_coherence = .7; 
    //}
    //paper.project.clear();
 
    //Creates a circle with radius 1 and places it at 0,0
      var path = new Path.Circle([view.size.width*Math.random(),view.size.height*Math.random()], size);
      //makes the circle white with a white outline
      //path.strokeColor = 'white';
      path.fillColor = 'white';
 
      //creates a symbol in order to make multiple dots
      var symbol = new Symbol(path);
 
      //Loop that creats all the dots (# = count) and randomly 
      // place them on the canvas
      for (var i = 0; i < count; i++) {
        // The center position is a random point in the view:
        var center = [view.size.width*Math.random(),view.size.height*Math.random()];
        symbol.place(center);
      }
      //onFrame gets called 60 times per sec; creates the animation/motion
      view.onFrame = function(event) {
        even ++;
        if(even%2 === 0){
        // Loop to take each dot 1 at a time for the animation/motion
            for (var i = 0; i < full.length; i++) {
              for (var j = 0; j < full[i].length; j++){
                shuffling(full[i]);
                var current = full[i][j];
                var item = project.activeLayer.children[current];
 
                if (j < (count/3)*Prac_coherence) {
                  item.position.x += (.5)*Prac_RL;
                } else {
                  //var center = [view.size.width*Math.random(),view.size.height*Math.random()];
                  //console.log(center);
                  item.position.x = view.size.width*Math.random();
                  item.position.y = view.size.height*Math.random();
                }
                    // If the item has left the view on the right, move it back
                    // to the left: and the others are if its left, top, and bottom
                    if (item.bounds.left > view.size.width*1.1) {
                        item.position.x = +item.bounds.width;
                    }
                    if (item.bounds.right < 0) {
                        item.position.x = +view.size.width;
                    }
              }
            }
        }
    }
      paper.view.draw();
   
},
 
description1: function() {
  showSlide("description1");
   paper.install(window);
 

  $(document).on('click', '#PractButton', function RDM() {
  //$(document).keydown(function RDM() {
    $("#PractButton").hide();
    $(".FirstInstructions").hide();

        var nums = [];
        for (var i = 0; i < count; i++) {
           nums.push(i);
        }
        //console.log(nums);
        shuffling(nums);
 
        var First = nums.slice(0, 50);
        var Second = nums.slice(50, 100);
        var Third = nums.slice(100, 151);
        var full = [First,Second,Third];
        //console.log(full);
        var i = 0;
        var j = 0;      
 
    paper.setup('PracticeTrial');
      
      var Prac_RL = shuffling([1,-1]).shift();
      console.log("PRACTICE DIRECTION")
      console.log(Prac_RL);
      var Prac_coherence = .4; 
    //}
    //paper.project.clear();
 
    //Creates a circle with radius 1 and places it at 0,0
      var path = new Path.Circle([view.size.width*Math.random(),view.size.height*Math.random()], size);
      //makes the circle white with a white outline
      //path.strokeColor = 'white';
      path.fillColor = 'white';
 
      //creates a symbol in order to make multiple dots
      var symbol = new Symbol(path);
 
      //Loop that creats all the dots (# = count) and randomly 
      // place them on the canvas
      for (var i = 0; i < count; i++) {
        // The center position is a random point in the view:
        var center = [view.size.width*Math.random(),view.size.height*Math.random()];
        symbol.place(center);
      }
      //onFrame gets called 60 times per sec; creates the animation/motion
      view.onFrame = function(event) {
        even ++;
        if(even%2 === 0){
        // Loop to take each dot 1 at a time for the animation/motion
            for (var i = 0; i < full.length; i++) {
              for (var j = 0; j < full[i].length; j++){
                shuffling(full[i]);
                var current = full[i][j];
                var item = project.activeLayer.children[current];
                    //console.log(item);
                    //console.log([i,j]);
                    //console.log(current);
                if (j < (count/3)*Prac_coherence) {
                  item.position.x += (.5)*Prac_RL;
                } else {
                  //var center = [view.size.width*Math.random(),view.size.height*Math.random()];
                  //console.log(center);
                  item.position.x = view.size.width*Math.random();
                  item.position.y = view.size.height*Math.random();
                }
                    // If the item has left the view on the right, move it back
                    // to the left: and the others are if its left, top, and bottom
                    if (item.bounds.left > view.size.width*1.1) {
                        item.position.x = +item.bounds.width;
                    }
                    if (item.bounds.right < 0) {
                        item.position.x = +view.size.width;
                    }
              }
            }
        }
    }
      paper.view.draw();
  });
  var choice = [];
  $(document).on('click', '#Pract_right_button', function(){
    if ($("#ready").is(':visible')) {
      $(".warningReady").show();
    } else {

      paper.project.remove();

    setTimeout(function(){showSlide("description2")},experiment.OutcomeTime);
  }});
 
  $(document).on('click', '#Pract_left_button', function(){
    if ($("#ready").is(':visible')) {
      $(".warningReady").show();
    } else {

      paper.project.remove();
    setTimeout(function(){showSlide("description2")},experiment.OutcomeTime);
  }})
},
 
description2: function() {
  showSlide("description2");
  $(".warning1").hide();
},
 
description3: function() {
  showSlide("description3");
 
  $(document).keydown(function(event) {
    var keyCode = event.which;
 
    if (keyCode == 71) {
      $(document).unbind("keydown");
      setTimeout(experiment.startPhase1, 500);
    }
  })
},
 
attention_check1:function(){
   $(".warning1").hide();
   $(".wrongans").hide();
  showSlide("attchk1");
},
 
attention_check3:function(){
   $(".warning1").hide();
   $(".wrongans").hide();
  showSlide("attchk3");
},
 
conf_q1:function(){
  ans = $('input[name="likert"]:checked').val();
 
  if (ans == undefined){
    $(".warning1").show();
  } else {
    experiment.attention_check1();
    $("input[type='radio'][name='likert']:checked").prop('checked', false)
  }
},
 
attnchk_resp1:function(){
  ans = $('input[name="AC1"]:checked').val();
 
  if (ans == undefined){
    $(".warning1").show();
  } else if (ans =="3"){
    experiment.description3();
  } else {
    $(".wrongans").show();
  }
},
 
startPhase1: function(){
  //experiment.choice_screen_p2()
  experiment.choice_screen();
},
 
choice_screen: function() {
  $(".warning1").hide();
  $(".warningReady").hide();
 
  var startTime = 0;
  var outcome = 0;
 
  showSlide("choice_screen")
  //$(".left").show();
  $("#left_button").show();
  $("#right_button").show();
  $("#ready").show();
  experiment.trial_num = experiment.trial_num + 1;
  $(".trial_no").html(experiment.trial_num);

  var this_trial = experiment.order.shift() 
  console.log("TRIAL NUMBER");
  console.log(experiment.trial_num);
 
//If you have gone through every image then start next section
  //if ( experiment.trial_num > 3) {
  if (typeof this_trial == "undefined") {
    return experiment.part2_page1();
  }
 
//First number in the array tells you what category they are in F or S
  // For new version it will be direction
  cat = this_trial[0];
  RL = this_trial[0];
//Second number tells you what image number in that category
  //For new version this will be coherence
  img = this_trial[1];
  coherence = this_trial[1];
 
  console.log("COHERENCE AND DIRECTION; TRIAL 2 LAYERS")
  console.log(coherence);
  console.log(RL);
 
  paper.install(window);
  if (experiment.trial_num != 1) {
    console.log(paper.project);
    console.log(paper.project.layers);
  }

    var mouseData = [];
    var coor = [];

  $(document).on('click', '#ready', function RDM() {
    startTime = (new Date()).getTime();
  //$(document).keydown(function RDM() {
    //console.log(onmousemove);
    if (experiment.trial_num !=1){console.log(mouseData[mouseData.length -1]);}
    $("#choice_screen").mousemove( function mouse(){
          var x = event.pageX;
          var y = event.pageY;
          coor = "Coordinates: (" + x + "," + y + ")";
          mouseData.push(coor);
          console.log(coor);
    });
    
    $("#ready").hide();
    $(".warningReady").hide();
    //creates the canvas and activates the scope to start drawing
    //if (experiment.tally_c == 0) {
        var nums = [];
        for (var i = 0; i < count; i++) {
           nums.push(i);
        }

        shuffling(nums);

 
        var First = nums.slice(0, 50);
        var Second = nums.slice(50, 100);
        var Third = nums.slice(100, 151);
        var full = [First,Second,Third];
        var i = 0;
        var j = 0;      
 
    paper.setup('nonMotive');
 
    //}
    //paper.project.clear();
 
    //Creates a circle with radius 1 and places it at 0,0
      var path = new Path.Circle([view.size.width*Math.random(),view.size.height*Math.random()], size);
      //makes the circle white with a white outline
      //path.strokeColor = 'white';
      path.fillColor = 'white';
 
      //creates a symbol in order to make multiple dots
      var symbol = new Symbol(path);
 
      //Loop that creats all the dots (# = count) and randomly 
      // place them on the canvas
      for (var i = 0; i < count; i++) {
        // The center position is a random point in the view:
        var center = [view.size.width*Math.random(),view.size.height*Math.random()];
        symbol.place(center);
      }
      //onFrame gets called 60 times per sec; creates the animation/motion
      view.onFrame = function(event) {
        even ++;
        if(even%2 ===0){
        // Loop to take each dot 1 at a time for the animation/motion
            for (var i = 0; i < full.length; i++) {
              for (var j = 0; j < full[i].length; j++){
                shuffling(full[i]);
                var current = full[i][j];
                var item = project.activeLayer.children[current];
                    //console.log(item);
                    //console.log([i,j]);
                    //console.log(current);
                if (j < (count/3)*coherence) {
                  item.position.x += (.5)*RL;
                } else {
                  //var center = [view.size.width*Math.random(),view.size.height*Math.random()];
                  //console.log(center);
                  item.position.x = view.size.width*Math.random();
                  item.position.y = view.size.height*Math.random();
                }
                    // If the item has left the view on the right, move it back
                    // to the left: and the others are if its left, top, and bottom
                    if (item.bounds.left > view.size.width*1.1) {
                        item.position.x = +item.bounds.width;
                    }
                    if (item.bounds.right < 0) {
                        item.position.x = +view.size.width;
                    }
              }
            }
        }
    }
      paper.view.draw();
  });
  var choice = [];
  $(document).on('click', '#right_button', function(){
    if ($("#ready").is(':visible')) {
      $(".warningReady").show();
    } else {
      $("#choice_screen").off("mousemove");
      paper.project.remove();
      even = 0;

      //if (experiment.keypos == "1"){
        choice = 1;
        if (coherence == 0) {outcome = 0} else {if (RL == 1) {outcome = 3} else {outcome = 0}};
      //} 
    experiment.tally_c = experiment.tally_c + outcome;
    var endTime = (new Date()).getTime();
    var data = {
      trial_num: experiment.trial_num, 
      direction: RL,
      coherence: coherence,
      //keypress: keypress,
      choice: choice,
      outcome: outcome,
      rt: endTime - startTime,
      tally_c: experiment.tally_c
    }
    console.log("DATA");
    console.log(data);
    experiment.dataPhase1.push(data)
    setTimeout(function(){showSlide("confidence_screen")},experiment.OutcomeTime);
  }});
 
  $(document).on('click', '#left_button', function(){
    if ($("#ready").is(':visible')) {
      $(".warningReady").show();
    } else {

      $("#choice_screen").off("mousemove");
      paper.project.remove();

      even = 0;
  
    //if (experiment.keypos =="1"){
      choice = -1;
      if (coherence == 0) {outcome = 0} else {if (RL == -1) {outcome = 3} else {outcome = 0}};

    experiment.tally_c = experiment.tally_c + outcome;
    var endTime = (new Date()).getTime();
    var data = {
      trial_num: experiment.trial_num, 
      direction: RL,
      coherence: coherence,
      //keypress: keypress,
      choice: choice,
      outcome: outcome,
      rt: endTime - startTime,
      tally_c: experiment.tally_c
    }

    console.log("DATA");
    console.log(data);
    experiment.dataPhase1.push(data);
    setTimeout(function(){showSlide("confidence_screen")},experiment.OutcomeTime);
  }})
},
 
confidence_response: function(){
  ans = $('input[name="likert"]:checked').val();
  if (ans == undefined){
    $(".warning1").show();
  } else {
    var data = {
      trial_num: experiment.trial_num,
      confidence: ans,
    }
    console.log("CONFIDENCE");
    console.log(data);
    experiment.confPhase1.push(data)
    $("input[type='radio'][name='likert']:checked").prop('checked', false)
    experiment.choice_screen();
  }
},
 
 
// PART 1 ENDS
 
part2_page1: function(){
    showSlide("part2_page1")
 
    if (experiment.keypos == "1")
    {
      $("img.phase2_gif").attr("src", '../images/coopP2.gif');
    } else {
      $("img.phase2_gif").attr("src", '../images/coopP2.gif');
    }
 
    $(document).keydown(function(event) {
      var keyCode = event.which;
 
      if (keyCode == 71){
        $(document).unbind("keydown");
        showSlide("attchk2")
        $(".warning1").hide();
        $(".wrongans").hide();
      }
    });
 
},
 
attnchk_resp2:function(){
  ans_a = $('input[name="AC2a"]:checked').val();
  ans_b = $('input[name="AC2b"]:checked').val();
  ans_c = $('input[name="AC2c"]:checked').val();
 
  if (ans_a == undefined || ans_b == undefined || ans_c == undefined){
    $(".warning1").show();
  } else if (ans_a =="7" && ans_b == "7" && ans_c == "10" ){
    experiment.startPhase2();
  } else {
    $(".wrongans").show();
  }
},
 
attnchk_resp3:function(){
  ans_a = $('input[name="AC3a"]:checked').val();
  ans_b = $('input[name="AC3b"]:checked').val();
  ans_c = $('input[name="AC3c"]:checked').val();
 
  experiment.AC3a = ans_a;
  experiment.AC3b = ans_b;
  experiment.AC3c = ans_c;
 
  if (ans_a == undefined || ans_b == undefined || ans_c == undefined){
    $(".warning1").show();
  } else if (ans_a =="7" && ans_b == "7" && ans_c == "10" ){
    experiment.AC3 = "Passed";
    experiment.part2_end();
  } else {
    experiment.part2_end();
  }
},
 
startPhase2: function(){
  showSlide("description4");
  experiment.trial_num = 0;
  experiment.order = gen_order();
  $("#prediction").hide();
 
 
  $("#countdown").html("4");
  setTimeout(function(){$("#countdown").html("3");}, 1000);
  setTimeout(function(){$("#countdown").html("2");}, 2000);
  setTimeout(function(){$("#countdown").html("1");}, 3000);
  setTimeout(function(){experiment.phase2_predict();}, 4000);
},
 
phase2_predict: function(){
  $(".warning1").hide();
  showSlide("predict_screen");
  //$("#prediction_text").hide();
  $("#prediction").hide();
   
  var outcome = 0;
  experiment.trial_num = experiment.trial_num + 1;
  $(".trial_no").html(experiment.trial_num + 80);
 
  var this_trial = experiment.order.shift() 
  if (typeof this_trial == "undefined") {
    return experiment.attention_check3();
  }
 
  cat = this_trial[0]; // RL 
  RL = this_trial[0];
  img = this_trial[1]; // coherence
  coherence = this_trial[1];
  console.log(cat);
 
  //temp_img = new Image()
  //temp_img.src = "../images/" + experiment.stim_set + '/' + this_img[0] + "_" + this_img[1] + ".jpg";
  console.log("TRIAL NUMBER")
  console.log(this_trial);
  var choice_p = experiment.predict_order[2].shift();
  console.log("Choice_p is below!!");
  console.log(choice_p);
  //var predict_text = "TEST";
 
  if (choice_p == -1){
    if (coherence == 0) {outcome = 0} else {if (RL == -1) {outcome = 7} else {outcome = 0}};
    //if (cat < 6) {outcome = 7} else if (cat == 6) {outcome = 0} else {outcome = -7};
    var predict_text = "Left";
  } else if (choice_p == 1){
    if (coherence == 0) {outcome = 0} else {if (RL == 1) {outcome = 7} else {outcome = 0}};
    var predict_text = "Right";
  };
 
  console.log("PREDICTION");
  console.log(predict_text);
 
  experiment.tally_p = experiment.tally_p + outcome;
 
  var rt_p = jStat.lognormal.sample(6.7,0.6);
  if (rt_p < 200) {rt_p = 200};
  if (rt_p > 5000) {rt_p = 5000};
 
  setTimeout(function(){
    $("#prediction_text").html(predict_text);
    $("#prediction").show();
    }, rt_p);
 
 
  var data = {
        trial_num: experiment.trial_num, 
        direction: RL,
        coherence: coherence,
        //keypress_c: [],
        choice_c: [],
        outcome_c: [],
        rt_c: [],
        tally_c: [],
        choice_p: choice_p,
        outcome_p: outcome,
        rt_p: rt_p,
        tally_p: experiment.tally_p
      };
      console.log("DATA")
      console.log(data);
  setTimeout(function(){experiment.choice_screen_p2(data,cat,img)},rt_p + 2000); 
 
},
 
choice_screen_p2: function(data,RL,coherence){
  $(".warning1").hide();
  $(".warningReady").hide();
  $("#prediction").hide();
 
  var startTime = 0;
  var outcome = 0;
 
  showSlide("choice_screen_p2")
  $("#left_button_p2").show();
  $("#right_button_p2").show();
  $("#ready_p2").show();

  console.log("Coherence and direction")
  console.log(coherence);
  console.log(RL);
 

  
  if (data.trial_num != 1) {
    console.log(paper.project.layers);
  }

  var coor = [];
  var mouseData = [];

  $(document).on('click', '#ready_p2', function RDM() {
  //$(document).keydown(function RDM() {
    startTime = (new Date()).getTime();

    $("#choice_screen_p2").mousemove( function mouse(){
          var x = event.pageX;
          var y = event.pageY;
          coor = "Coordinates: (" + x + "," + y + ")";
          mouseData.push(coor);
          console.log(coor);
    });
    console.log(mouseData);    

    $("#ready_p2").hide();
    $(".warningReady").hide();
    console.log($("#ready_p2").is(':visible'));

        var nums = [];
        for (var i = 0; i < count; i++) {
           nums.push(i);
        }
        shuffling(nums);

 
        var First = nums.slice(0, 50);
        var Second = nums.slice(50, 100);
        var Third = nums.slice(100, 151);
        var full = [First,Second,Third];
        var i = 0;
        var j = 0;      
     
    paper.setup('Motive');
    //paper.project.activate('Motive');
    //console.log("paper Set up MOTIVE!");
    //console.log(paper.setup('Motive'));
    //console.log("paper Set up NONMOTIVE!");
    //console.log(paper.setup('nonMotive'));    //}
    //paper.project.clear();
 
    //Creates a circle with radius 1 and places it at 0,0
      var path = new Path.Circle([view.size.width*Math.random(),view.size.height*Math.random()], size);
      //makes the circle white with a white outline
      //path.strokeColor = 'white';
      path.fillColor = 'white';
 
      //creates a symbol in order to make multiple dots
      var symbol = new Symbol(path);
 
      //Loop that creats all the dots (# = count) and randomly 
      // place them on the canvas
      for (var i = 0; i < count; i++) {
        // The center position is a random point in the view:
        var center = [view.size.width*Math.random(),view.size.height*Math.random()];
        symbol.place(center);
      }
      //onFrame gets called 60 times per sec; creates the animation/motion
      view.onFrame = function(event) {
        even ++;
        if(even%2 ===0){
        // Loop to take each dot 1 at a time for the animation/motion
            for (var i = 0; i < full.length; i++) {
              for (var j = 0; j < full[i].length; j++){
                shuffling(full[i]);
                var current = full[i][j];
                var item = paper.project.activeLayer.children[current];
                    //console.log(item);
                    //console.log([i,j]);
                    //console.log(current);
                if (j < (count/3)*coherence) {
                  item.position.x += (.5)*RL;
                } else {
                  //var center = [view.size.width*Math.random(),view.size.height*Math.random()];
                  //console.log(center);
                  item.position.x = view.size.width*Math.random();
                  item.position.y = view.size.height*Math.random();
                }
                    // If the item has left the view on the right, move it back
                    // to the left: and the others are if its left, top, and bottom
                    if (item.bounds.left > view.size.width*1.1) {
                        item.position.x = +item.bounds.width;
                    }
                    if (item.bounds.right < 0) {
                        item.position.x = +view.size.width;
                    }
                    //if (item.bounds.bottom < 0) {
                    //    item.position.y = +view.size.height;
                    //}
                    //if (item.bounds.top > view.size.height) {
                    //    item.position.y = -item.bounds.height;
                    //}
              }
            }
        }
    }
      
  });  

  var choice = [];
  $(document).on('click', '#right_button_p2', function() {
    if ($("#ready_p2").is(':visible')) {
      $(".warningReady").show();
    } else {
     
     
      $("#choice_screen_p2").off("mousemove");
      paper.project.remove();
 
      even = 0;
        
        var choice = 1;
        if (coherence == 0) {outcome = 0} else {if (RL == 1) {outcome = 3} else {outcome = 0}};
       //else {}
 
 
      experiment.tally_c = experiment.tally_c + outcome;
      var endTime = (new Date()).getTime();
 
      //data.keypress_c = keypress;
      data.choice_c = choice;
      data.outcome_c = outcome;
      data.rt_c = endTime - startTime;
      data.tally_c = experiment.tally_c;
 
      console.log("DATA")
      console.log(data);
      experiment.dataPhase2.push(data);
 
 
      setTimeout(function(){showSlide("confidence_screen_p2")},experiment.OutcomeTime);
    }});
 
  $(document).on('click', '#left_button_p2', function() {
    if ($("#ready_p2").is(':visible')) {
      $(".warningReady").show();
    } else {

      $("#choice_screen_p2").off("mousemove");
      paper.project.remove();
 
      even = 0;
 
        var choice = -1;
        if (coherence == 0) {outcome = 0} else {if (RL == -1) {outcome = 3} else {outcome = 0}};
 
 
      experiment.tally_c = experiment.tally_c + outcome;
      var endTime = (new Date()).getTime();
 
      //data.keypress_c = keypress;
      data.choice_c = choice;
      data.outcome_c = outcome;
      data.rt_c = endTime - startTime;
      data.tally_c = experiment.tally_c;
 
      console.log("DATA")
      console.log(data);
      experiment.dataPhase2.push(data);
 
 
      setTimeout(function(){showSlide("confidence_screen_p2")},experiment.OutcomeTime);
    }})
},
 
confidence_response_p2: function(){
  ans = $('input[name="likert"]:checked').val();
  if (ans == undefined){
    $(".warning1").show();
  } else {
    var data = {
      trial_num: experiment.trial_num,
      confidence: ans,
    }
    experiment.confPhase2.push(data)
    $("input[type='radio'][name='likert']:checked").prop('checked', false)
    experiment.phase2_predict();
  }
},
 
part2_end: function(){
  showSlide("end_screen");
  experiment.bonus = experiment.tally_c + experiment.tally_p;
  experiment.bonus = experiment.bonus - 30;
 
  if (experiment.bonus > 300){
    experiment.bonus = 300;
  }
 
  $(".bonus").html(experiment.bonus/100);
},
 
check: function(){
  code =  $("input[name = 'code']").val();
  if (_(forbiddenIds).contains(code)) {
    alert ( "You have done a version of this HIT before, please DO NOT accept this HIT." );
  } else {
    alert ( "You are eligible for this HIT. Please accept the hit and continue.")
  }
},
 
end: function() {
  experiment.understand = $('input[name="assess"]:checked').val();
  experiment.gender = $("#gender").val();
   
  experiment.age = $("input[name = 'age']").val();
  experiment.comments = $('textarea[name="commentsTextArea"]').val();
  experiment.mobile = $('input[name="mobileButton"]:checked').val();
  var checkboxValues = []
  $('input[type="checkbox"]:checked').each(function(index, elem) {
    checkboxValues.push($(elem).val());
  });
  experiment.race = checkboxValues;
  experiment.enjoyment = $("#enjoyment").val();
  experiment.comments = $("#comments").val();
 
  showSlide("final_screen")
 
  /*
  Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we’re just submitting properties [i.e. data])
  */
  setTimeout(function() {turk.submit(experiment);}, 1200);
},
};