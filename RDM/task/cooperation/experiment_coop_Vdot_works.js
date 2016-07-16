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
var speed = 10;
var RL = [];
var coherence = [];

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
  stim_set: stim_set,
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

},
descriptionRight: function() {
  showSlide("descriptionRight");

  if (turk.previewMode) {
    alert ( "Please accept the HIT before continuing." );
  }
  
},

description1: function() {
  showSlide("description1");
  cat = _.sample([3,9]);
  pracImage = "../images/" + experiment.stim_set + '/' + cat + "_" + 1 + ".jpg";

  $("img.img_prac").attr("src", pracImage);

  $(document).keydown(function(event) {
    var keyCode = event.which;
    if (keyCode == 90) {
      $(document).unbind("keydown");
      $(".right").hide();
      setTimeout(experiment.description2, 500);
    }
    else if (keyCode == 77){
      $(document).unbind("keydown");
      $(".left").hide();
      setTimeout(experiment.description2, 500);
    }
  })
  $(document).keydown(function(event) {
    var keyCode = event.which;
    if (keyCode == 90) {
      $(document).unbind("keydown");
      $(".right").hide();
      setTimeout(experiment.description2, 500);
    }
  })
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
  experiment.choice_screen()
},

choice_screen: function() {
  $(".warning1").hide();

  var startTime = (new Date()).getTime();
  var outcome = 0;

  showSlide("choice_screen")
  $(".left").show();
  //$(".right").show();
  $("#left_button").show();
  $("#right_button").show();
  $("#ready").show();
  experiment.trial_num = experiment.trial_num + 1;
  $(".trial_no").html(experiment.trial_num);
//This image is based on the random ordering of the images
// created in helper script
  var this_trial = experiment.order.shift() 
   //console.log(this_img);

//If you have gone through every image then start next section
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

  console.log(coherence);
  console.log(RL);

//Grabbing the image to be used next
//  ImagePath = "../images/" + experiment.stim_set + '/' + cat + "_" + img + ".jpg";
//  $("img.StimElement").attr("src", ImagePath);
  
  //canvas.clearRect(0, 0, 250, 250);
  //if(experiment.tally_c == 0) {
  //console.log(paper.project);
  //console.log(paper.project.layers);
  //console.log(paper.project.activeLayer);
  //paper.project.remove();
  //console.log(paper.project);
  //project.layers.remove();
  paper.install(window);
  console.log(paper.project);
  console.log(paper.project.layers);

   //var FirstLayer = paper.project.activeLayer;
  //}
  //paper.project.activeLayer.removeChildren();

  //var count = 150;
  //var coherence = .5;
  //var RL = 1;
  //var speed = 5;
  //window.onload = function RDM() {
  $(document).on('click', '#ready', function RDM() {
  //$(document).keydown(function RDM() {
    $("#ready").hide();
    //creates the canvas and activates the scope to start drawing
    //if (experiment.tally_c == 0) {
    paper.setup('nonMotive');

    //}
    //paper.project.clear();

    //Creates a circle with radius 1 and places it at 0,0
      var path = new Path.Circle([0, 0], 1);
      //makes the circle white with a white outline
      //path.strokeColor = 'white';
      path.fillColor = 'white';

      //creates a symbol in order to make multiple dots
      var symbol = new Symbol(path);

      //Loop that creats all the dots (# = count) and randomly 
      // place them on the canvas
      for (var i = 0; i < count; i++) {
        // The center position is a random point in the view:
        var center = [view.size.width*Math.random(),view.size.width*Math.random()];
        symbol.place(center);
      }
      //onFrame gets called 60 times per sec; creates the animation/motion
      view.onFrame = function(event) {
        //console.log(event.count);
        //console.log(event.delta);
          // Loop to take each dot 1 at a time for the animation/motion
          for (var i = 0; i < count; i++) {
              if(typeof project.activeLayer.children[i] == "undefined"){return;};
              var item = project.activeLayer.children[i];

              // Take coherence and make that proportion of the dots move 
            // right or left depending on RL: -1 is left, 1 is right
              if(i < coherence*count){
                  item.position.x += (speed/4)*RL;
              }
            // Randomly choose to move the item some distance to the left or right
            item.position.x += (Math.random()*speed)-(Math.random()*speed);
            // Randomly choose to move the item some distance to the up or down
            item.position.y += (Math.random()*speed)-(Math.random()*speed);
            
            // If the item has left the view on the right, move it back
            // to the left: and the others are if its left, top, and bottom.
            if (item.bounds.left > view.size.width) {
                item.position.x = +item.bounds.width;
              }
            if (item.bounds.right < 0) {
                item.position.x = +view.size.width;
              }
            if (item.bounds.bottom < 0) {
                item.position.y = +view.size.height;
              }
            if (item.bounds.top > view.size.height) {
                item.position.y = -item.bounds.height;
              }
          }
      }
      paper.view.draw();
  });
  var choice = [];
  $(document).on('click', '#right_button', function(){
//  $(document).keydown(function(event) {
//    var keyCode = event.which;
//    if (keyCode == 90) {
//      var keypress = "left";
//      $(document).unbind("keydown");
      //$("#left_button").hide();
      //paper.project.activeLayer.opacity = 0;
      //paper.project.clear();
      //paper.clear();
      console.log(paper.project);
      console.log(paper.project.layers);
      paper.project.remove();
      //console.log(paper.project);
      //console.log(paper.project.layers);


      // If they press the first key then choice is 2 and if the cat 
      // is less than 6 which is prob just lets say face then you got it
      // so you get 3 cents, if not you got it wrong so no bonus
      if (experiment.keypos == "1"){
        choice = 1;
        if (RL == 1) {outcome = 3} else {outcome = 0};
      } 
    experiment.tally_c = experiment.tally_c + outcome;
    var endTime = (new Date()).getTime();
    var data = {
      trial_num: experiment.trial_num, 
      cat: cat,
      img: img,
      //keypress: keypress,
      choice: choice,
      outcome: outcome,
      rt: endTime - startTime,
      tally_c: experiment.tally_c
    }
    experiment.dataPhase1.push(data)
    setTimeout(function(){showSlide("confidence_screen")},experiment.OutcomeTime);
  });

  $(document).on('click', '#left_button', function(){
//  else if (keyCode == 77){
//    var keypress = "right";
//    $(document).unbind("keydown");
    //$(".right").hide();
      //paper.project.activeLayer.removeChildren();
      console.log(paper.project);
      console.log(paper.project.layers);
      //project.clear();
      paper.project.remove();
      console.log(paper.project);
      console.log(paper.project.layers);
      //paper.project.removeChildren();
      //paper.project.clear();
      //paper.clear(nonMotive);

    // Just opposite of above.
    // if they press the first key then choice is 2 and if the cat 
    // is less than 6 which is prob just lets say face then you got it
    // so you get 3 cents, if not you got it wrong so no bonus   
    if (experiment.keypos =="1"){
      choice = 2;
      if (RL == -1) {outcome = 3} else {outcome = 0};
    // Else 
    } else{
      choice = 1;
      if (cat < 6) {outcome = 3} else {outcome = 0};
    }
    experiment.tally_c = experiment.tally_c + outcome;
    var endTime = (new Date()).getTime();
    var data = {
      trial_num: experiment.trial_num, 
      cat: cat,
      img: img,
      //keypress: keypress,
      choice: choice,
      outcome: outcome,
      rt: endTime - startTime,
      tally_c: experiment.tally_c
    }
    console.log(data)
    experiment.dataPhase1.push(data)
    setTimeout(function(){showSlide("confidence_screen")},experiment.OutcomeTime);
  })
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
      $("img.phase2_gif").attr("src", '../images/coopP2_1.gif');
    } else {
      $("img.phase2_gif").attr("src", '../images/coopP2_2.gif');
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
  showSlide("predict_screen")
  var outcome = 0;
  experiment.trial_num = experiment.trial_num + 1;
  $(".trial_no").html(experiment.trial_num + 80);

  var this_img = experiment.order.shift() 
  if (typeof this_img == "undefined") {
    return experiment.attention_check3();
  }

  cat = this_img[0];
  img = this_img[1];

  temp_img = new Image()
  temp_img.src = "../images/" + experiment.stim_set + '/' + this_img[0] + "_" + this_img[1] + ".jpg";

  var choice_p = experiment.predict_order[cat].shift()

  if (choice_p == 1){
    if (cat < 6) {outcome = 7} else if (cat == 6) {outcome = 0} else {outcome = -7};
    var predict_text = "Left"
  } else if (choice_p == 2){
    if (cat > 6) {outcome = 7} else if (cat == 6) {outcome = 0} else {outcome = -7};
    var predict_text = "Right"
  }

  experiment.tally_p = experiment.tally_p + outcome;

  var rt_p = jStat.lognormal.sample(6.7,0.6)
  if (rt_p < 200) {rt_p = 200};
  if (rt_p > 5000) {rt_p = 5000};

  setTimeout(function(){
    $("#prediction_text").html(predict_text);
    $("#prediction").show()
    ;}, rt_p);

  var data = {
        trial_num: experiment.trial_num, 
        cat: cat,
        img: img,
        keypress_c: [],
        choice_c: [],
        outcome_c: [],
        rt_c: [],
        tally_c: [],
        choice_p: choice_p,
        outcome_p: outcome,
        rt_p: rt_p,
        tally_p: experiment.tally_p
      }

  setTimeout(function(){experiment.choice_screen_p2(data,cat,img)},rt_p + 2000); 

},

choice_screen_p2: function(data,cat,img){
  $(".warning1").hide();
  $("#prediction").hide();
  showSlide("choice_screen_p2")
  
  var startTime = (new Date()).getTime();
  var outcome = 0;
  $(".left").show();
  $(".right").show();
  
  ImagePath = "../images/" + experiment.stim_set + '/' + cat + "_" + img + ".jpg";
  $("img.StimElement").attr("src", ImagePath);

  //console.log(experiment.trial_num)
  //console.log(cat)

  $(document).keydown(function(event) {
    var keyCode = event.which;
    if (keyCode == 90) {
      var keypress = "left";
      $(document).unbind("keydown");
      $(".right").hide();

      if (experiment.keypos == "1"){
        choice = 1;
        if (cat < 6) {outcome = 3} else {outcome = 0};
      } else {
        choice = 2;
        if (cat > 6) {outcome = 3} else {outcome = 0};
      }
      experiment.tally_c = experiment.tally_c + outcome;
      var endTime = (new Date()).getTime();

      data.keypress_c = keypress;
      data.choice_c = choice;
      data.outcome_c = outcome;
      data.rt_c = endTime - startTime;
      data.tally_c = experiment.tally_c;

      experiment.dataPhase2.push(data)

      setTimeout(function(){showSlide("confidence_screen_p2")},experiment.OutcomeTime);
    }

    else if (keyCode == 77){
      var keypress = "right";
      $(document).unbind("keydown");
      $(".left").hide();

      if (experiment.keypos =="1"){
        choice = 2;
        if (cat > 6) {outcome = 3} else {outcome = 0};
      } else{
        choice = 1;
        if (cat < 6) {outcome = 3} else {outcome = 0};
      }
      experiment.tally_c = experiment.tally_c + outcome;
      var endTime = (new Date()).getTime();

      data.keypress_c = keypress;
      data.choice_c = choice;
      data.outcome_c = outcome;
      data.rt_c = endTime - startTime;
      data.tally_c = experiment.tally_c;

      experiment.dataPhase2.push(data)

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