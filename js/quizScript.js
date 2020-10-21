
/*--------Countdown timer-----------*/
var questionNo = 0;
var correctCount = 0;
//timer set to 60sec
var sec = 60
var timer = setInterval(function() { 
    console.log();
   $('#hideMsg span').text(sec--);
   if (sec == -1) {
        
      $('#hideMsg').fadeOut('fast');
      clearInterval(timer);

        setTimeout(function(){
            $('#quiz').fadeOut();
            finishQuiz();
        }, 1000);
   } 
}, 1000);

/*--------Quiz-----------*/

    var loading = $('#loadbar').hide();
    $(document).ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
        loading.hide();
    });
    
    //list of questions
    var q = [
        {'Q':'Normal adult dogs have how many teeth?', 'A':3,'C':['24','38','42']},
        {'Q':'What is the most common training command taught to dogs?', 'A':3,'C':['Stay','Beg','Sit']},
        {'Q':'What is a dogs most highly developed sense?', 'A':2,'C':['Taste','Smell','Sight']},
        {'Q':'Puppies are delivered how many weeks after conception?', 'A':1,'C':['9','22','16']},
        {'Q':'Through what part of the body do dogs sweat?', 'A':1,'C':['Paws','Ears','Nose']},
        {'Q':'Which TV series had a dog named K9 who was also a robot?', 'A':3,'C':['Full House','Star Trek','Doctor Who']},
        {'Q':'Which dog breed is the smallest of them all?', 'A':2,'C':['Dachshund','Chihuahua','Pomeranian']},
        {'Q':'Which dog breed has a black tongue?', 'A':3,'C':['Husky','Labrador','Chow chow']},
        {'Q':'What breed of dog is the smallest used in hunting?', 'A':2,'C':['Chihuahua','Miniature Dachshund','Toy poodle']},
        {'Q':'What is the most popular breed of dog, according to the American Kennel Club’s registrations?', 'A':2,'C':['Golden retriever','Labrador','German Shepherd']},
        {'Q':'What is the most dangerous dog breed in the world?', 'A':2,'C':['American Pit Bull Terrier','Rottweiler','German Shepherd']},
        {'Q':'What is the dog breed with the longest life-span?', 'A':1,'C':['Chihuahua','Jack Russell Terrier','Toy poodle']},
    ];
 
    $(document.body).on('click',"label.element-animation",function (e) {


        var choice = $(this).parent().find('input:radio').val();

        var anscheck =  $(this).checking(questionNo, choice);      
        q[questionNo].UC = choice;
        if(anscheck){
            correctCount++;
            q[questionNo].result = "Correct";
        } else {
            q[questionNo].result = "Incorrect";        
        }

        setTimeout(function(){
            $('#quiz').fadeOut();
            $('#loadbar').show();
            
            
            if(questionNo === q.length-1){
                alert("Quiz completed, Now click ok to get your answer");
                $('label.element-animation').unbind('click');
                finishQuiz()
                //finish the quiz
            } else {
                questionNo++;
                loadQuestion();
            }
        }, 1000);
    });

    $( document ).ready(function() {
        loadQuestion();
    });

    function loadQuestion(){
       
        $('#qid').html(questionNo+1);
        $('input:radio').prop('checked', false);
        setTimeout(function(){
            $('#quiz').show();
            $('#loadbar').fadeOut();
         }, 1500);

        //Display question
        $('#question').html(q[questionNo].Q);
        $($('#f-option').parent().find('label')).html(q[questionNo].C[0]);
        $($('#s-option').parent().find('label')).html(q[questionNo].C[1]);
        $($('#t-option').parent().find('label')).html(q[questionNo].C[2]);
    }

     function finishQuiz(){
        setTimeout(function(){
            var toAppend = '';
            $.each(q, function(i, a){
                toAppend += '<tr>'
                toAppend += '<td>'+(i+1)+'</td>';
                toAppend += '<td>'+a.A+'</td>';
                toAppend += '<td>'+a.UC+'</td>';
                toAppend += '<td>'+a.result+'</td>';
                toAppend += '</tr>'
            });

            var marks = (correctCount*2)-(10-correctCount); //calculating marks

            //display results
            $('#quizResult').html(toAppend);
            $('#totalCorrect').html("Marks: " + marks);
            $('#quizResult').show();
            $('#loadbar').fadeOut();
            $('#result-of-question').show();

            //change background colours
            if(marks > 15){
                $('#result-of-question').css('background-color', 'green');
            } else if(marks > 10){
                $('#result-of-question').css('background-color', 'blue');
            } else if(marks > 5){
                $('#result-of-question').css('background-color', 'yellow');
            }else{
                $('#result-of-question').css('background-color', 'red');
            }

        }, 1000);
     }

    
    $.fn.checking = function(qstn, ck) {
        var ans = q[questionNo].A;
        if (ck != ans)
            return false;
        else 
            return true;
    }; 

