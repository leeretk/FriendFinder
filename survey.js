Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@leeretk 
rrbrink
/
FriendFinder
0
12
 Code
 Issues 0
 Pull requests 0 Actions
 Projects 0
 Wiki
 Security 0
 Insights
FriendFinder/app/public/survey.html
@rrbrink rrbrink update
32376db on Feb 7, 2018
Executable File  232 lines (218 sloc)  10.1 KB
  
<!DOCTYPE html>
<html lang="en">
<html>

<head>
    <meta charset="UTF-8">
    <!-- materialize -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
    <!-- materialize icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
    <title>Friend Finder - Survey</title>
</head>

<body>
    <div class='container'>
        <div class='card-panel yellow darken-1 col s12 center-align'>
            <h4><strong>Survey Questions</strong></h4>
            <div class='card-panel left-align white'>
                <h5><strong>About You</strong></h5>
                <br>
                <input id="name" type="text" class="validate" required>
                <label class='active' for="name">Name (required)</label>
                <input id="photo" type="text" class="validate" required>
                <label class='active' for="name">Link to Photo Image (required)</label>
                <h5><strong>Question 1</strong></h5>
                <p>I see myself as extroverted, enthusiastic.</p>
                <select data-placeholder="" class="browser-default" id="q1">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 2</strong></h5>
                <p>I see myself as critical, quarrelsome.</p>
                <select data-placeholder="" class="browser-default" id="q2">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 3</strong></h5>
                <p>I see myself as dependable, self-disciplined.</p>
                <select data-placeholder="" class="browser-default" id="q3">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 4</strong></h5>
                <p>I see myself as anxious, easily upset.</p>
                <select data-placeholder="" class="browser-default" id="q4">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 5</strong></h5>
                <p>I see myself as open to new experiences.</p>
                <select data-placeholder="" class="browser-default" id="q5">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 6</strong></h5>
                <p>I see myself as reserved, quiet</p>
                <select data-placeholder="" class="browser-default" id="q6">
                    <option value="">Choose an Option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 7</strong></h5>
                <p>I see myself as sympathetic.</p>
                <select data-placeholder="" class="browser-default" id="q7">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 8</strong></h5>
                <p>I see myself as disorganized.</p>
                <select data-placeholder="" class="browser-default" id="q8">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 9</strong></h5>
                <p>I see myself as calm, emotionally stable.</p>
                <select data-placeholder="" class="browser-default" id="q9">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <h5><strong>Question 10</strong></h5>
                <p>I see myself as practical, conventional.</p>
                <select data-placeholder="" class="browser-default" id="q10">
                    <option value="">Choose an option</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
                <br>
                <!-- Materialize Modal Trigger/Submit Button -->
                <button type ="submit" data-target="modal1" class="waves-effect waves-light btn modal-trigger cyan lighten-1" id="submitBtn">Submit</button>
            </div>
        </div>
        <div class='col s4'>
            <p><a href='/api/friends'>API Friends List</a> | <a href='https://github.com/rrbrink/FriendFinder' target='_blank'>GitHub Repo</a></p>
        </div>

        <!-- Materialize Modal Structure -->
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Meet Your New BFF</h4>
            <h5 id="matchName"></h5>
            <img id="matchPic" src="" alt="No Image" width = 250px>
          </div>
        <div class="modal-footer">
          <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Done</a>
        </div>
      </div>

    </div>




<!-- Grabs information and sends it to server -->
<script type="text/javascript">
$(document).ready(function() {
    $("#submitBtn").on("click", function() {
        //form validation
        function validateForm() {
            var isValid = true;
            $('.validate').each(function() {
                if ($(this).val() === ''){
                    isValid = false;
                }
            });

            $('.browser-default').each(function() {
                if ($(this).val() === ""){
                    isValid = false;
                }
            });

            return isValid;
        }

        //if everything is filled
        if (validateForm() == true) {
            //creates a new friend from the values submitted
            var newFriend = {
                name: $('#name').val().trim(),
                profilePic: $('#photo').val().trim(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val(),
                ]
            };

            //Grabs current URL of website
            var currentURL = window.location.origin;

            //AJAX posts the data to friends API.
            $.post(currentURL + "/api/friends", newFriend, function(data) {
                //Grab the result from the AJAX post so that the best match's name and photo are displayed.
                $("#matchName").text(data.name);
                $("#matchPic").attr("src", data.profilePic);

            });
            // Show the modal with the best match
                $('.modal').modal();

            //clear form after submission
            $('#name').val("");
            $('#photo').val("");
            $('#q1').val("");
            $('#q2').val("");
            $('#q3').val("");
            $('#q4').val("");
            $('#q5').val("");
            $('#q6').val("");
            $('#q7').val("");
            $('#q8').val("");
            $('#q9').val("");
            $('#q10').val("");
        } else {
            alert("Please fill out ALL fields before submitting survey!")
        }

        // return false;
    });
});
</script>
</body>

</html>



<!-- Match Modal -->
      <div id="resultsModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

          <!-- Modal Content-->
          <div class="modal-content">

            <!-- "X" Button to close the modal -->
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h2 class="modal-title"><strong>Meet Your New Friend!</strong></h2>
            </div>

            <!-- Modal Body (For Match Info) -->
            <div class="modal-body">
              <h2 id="matchName"></h2>
              <img id="matchImg" src="" alt="Image Not Found" style="max-width: 350px;">
            </div>

            <!-- Modal Footer (Close Button) -->
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>

          </div>

        </div>
      </div>


    </div>


    <!-- Link in jQuery -->
    <script src="https://code.jquery.com/jquery.js"></script>


    <!-- Latest compiled and minified JavaScript (USED FOR THE MODAL) -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


    <!-- JavaScript for Submission Logic -->
    <script>

      // Global Variable Declaration (scoping fix)
      var allFieldsCompleted;

      $(document).ready(function() {

        // Event Listener for Submission
        $('#submitButton').on('click', function() {
          
          // Check if all the user fields are completed
          checkIfComplete(function(){

            // Proceed with AJAX call if all questions are answered
            if(allFieldsCompleted){
              collectInputs();
            }
            else{
              alert('Please complete all fields before submitting!');
            }

          }); // end checkIfComplete() callback

        }); // end submit listener

      }); // document ready


      // Function to valid user input
      function checkIfComplete(callback){

        // Check through all the questions (i.e. iterate through all of class "chosen-select")
        var questionsCompleted;
        $('.chosen-select').each(function(){
          if ( $(this).val() == "" ){
            questionsCompleted = false;
          }
        })

        // This counters the async behavior of $.each()
        .promise().done(function(){

          // Check if any questions are incomplete
          if(questionsCompleted == false){
            allFieldsCompleted = false;
          }

          // Determine if Name is entered
          else if( $('#formName').val().trim() == "" ){
            allFieldsCompleted = false;
          }

          // Determine if Link is entered
          else if( $('#formImage').val().trim() == "" ){
            allFieldsCompleted = false;
          }

          // Otherwise, the all fields are completed
          else{
            allFieldsCompleted = true;
          }

          // Fire Off Callback (to counter async behavior of $.each)
          callback();       

        });
      }


      function collectInputs(){

        // Make new friend object
        var newFriend = {
          name: $('#formName').val().trim(),
          photo: $('#formImage').val().trim(),
          scores: []
        };

        // Loop through Questions to get scores
        var scoresArray = [];
        $('.chosen-select').each(function(){
          scoresArray.push( parseInt( $(this).val() ) ); // Parse Input Value as integer
        })
         // This counters the async behavior of $.each()
        .promise().done(function(){
          
          // Push the array of scores to the new friend object
          newFriend.scores = scoresArray;

          // POST the newFriend to the friends.js file and get back the best match
          var currentURL = window.location.origin;
          $.post(currentURL + "/api/friends", newFriend, function(data){

            // Add Best Match attributes to Modal
            $('#matchName').text(data.name);
            $('#matchImg').attr('src', data.photo);

            // Show the modal with the best match 
            $("#resultsModal").modal('toggle');

          }); // end AJAX POST

        });

      }
