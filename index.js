//Create date variable
var date = new Date();
var displayDate = 'date: '+ date.toLocaleDateString();
//Load HTML DOM
$(document).ready(function(){
  $('#display_date').html(displayDate)  
})
//Define variable to store predicted emotion
var predicted_emotion;

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML


//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call
        var inputData = {
            'text': $('#text').val()
        }

        $.ajax({
            type:'POST',
            url:'/predict-emotion',
            data:JSON.stringify(inputData),
            dataType:'json',
            contentType:'application/json',
            success:function(result){
                // Result Received From Flask ----->JavaScript
                predicted_emotion=result.data.predicted_emotion
                emotion_url = data.predicted_emotion_img_url
                // Display Result Using JavaScript----->HTML
                $('#prediction').html(predicted_emotion)
                $('#prediction').css('display','block')
            },
            error:function(result){
                alert(result.responseJSON.message)
                
            }

            
              
                
                
                
            
            //Error function
            
        });
    });
})

