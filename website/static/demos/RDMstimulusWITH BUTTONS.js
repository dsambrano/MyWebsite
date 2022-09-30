var startTime = 0;

var BeginDemo = function() {
  $("#StartDemo").html("Ready!");
  RDM();
}
var trial_num = [0];

var RDM = function(){
  $(".warningReady").hide();
  $("#Correct").hide();
  $("#Incorrect").hide();
  $(".parameters").hide();
  //Gathers the start time of the trial for Reaction time data
  startTime = (new Date()).getTime();
  //Show the ready button if it is not already shown
  $("#ready").show();

  nextTrial();
  console.log(RL);
  console.log(coherence);
  paper.install(window);
  if (trial_num > 0) {
  console.log(paper.project);
  console.log(paper.project.layers);}
  trial_num += 1
  //When you click the ready button perform the following events
  $(document).on('click', '#ready', function stimuli() {
    //hide the ready button
    $("#ready").hide();
    //hide any warnings or responses that may be showing 
    $(".warningReady").hide();
    //Creats and array with the same number of elements as count
      var nums = [];
        for (var i = 0; i < count; i++) {
           nums.push(i);
        }
        //Shuffles that array
        shuffling(nums);

        // Spilts the array into three sections to be used later
        var First = nums.slice(0, 50);
        var Second = nums.slice(50, 100);
        var Third = nums.slice(100, 151);
        //Makes the large multi-demensional array
        var full = [First,Second,Third];
  
    //creates the canvas and activates the scope to start drawing
    paper.setup('myCanvas');

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
      var even = 0;
      //onFrame gets called 60 times per sec; creates the animation/motion
      view.onFrame = function(event) {
        even ++;
        if(even%2 === 0){
        // Loop to take each dot 1 at a time for the animation/motion
            for (var i = 0; i < full.length; i++) {
              for (var j = 0; j < full[i].length; j++){
                shuffling(full[i]);
                var current = full[i][j];
                console.log(current);
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
      paper.view.draw();
  })};


  $(document).on('click', '#right_button', function(){
    if ($("#ready").is(':visible')) {
      $(".warningReady").show();
    } else {
      //Removes the previously created project to clear the layers
      // for the next trial
      paper.project.remove();
      //resets the even to be 0 which prevents the computer from
      // making large calculations, especially when there
      // are many trials
      even = 0;


      // If they press the first key then choice is 2 and if the cat 
      // is less than 6 which is prob just lets say face then you got it
      // so you get 3 cents, if not you got it wrong so no bonus
      if (RL == "1"){
        $("#Correct").show();
      } else {
          $("#Incorrect").show();
      }
      $(".parameters").show();
      $("#coherence").html(coherence);
      var RLword = "Left";
      console.log(RLword);
      if (RL == -1) {RLword = "Left"} else {RLword = "Left"};
      console.log(RLword);
      $("#RightL").html(RLword)

    var endTime = (new Date()).getTime();
    var RT = endTime - startTime;
    $("#RT").html(RT);
    setTimeout(RDM,5000);
  }});

  $(document).on('click', '#left_button', function(){
    // If you have not clicked the ready button show the warning
    if ($("#ready").is(':visible')) {
      $(".warningReady").show();
    } else {
      //Removes the previously created project to clear the layers
      // for the next trial
      paper.project.remove();
      //resets the even to be 0 which prevents the computer from
      // making large calculations, especially when there
      // are many trials
      even = 0;


      // If they press the first key then choice is 2 and if the cat 
      // is less than 6 which is prob just lets say face then you got it
      // so you get 3 cents, if not you got it wrong so no bonus
      if (RL == "-1"){
        $("#Correct").show();
      } else {
        $("#Incorrect").show();
      }
      $(".parameters").show();
      $("#coherence").html(coherence);
      var RLword = "Left";
      console.log(RLword);
      if (RL == -1) {RLword = "Left"} else {RLword = "Left"};
      console.log(RLword);
      $("#RightL").html(RLword)
    //Capture time clicked the button
    var endTime = (new Date()).getTime();
    //Calculates the reaction time of the trial.
    var RT = endTime - startTime;
    $("#RT").html(RT);
    setTimeout(RDM,5000);
  }});
