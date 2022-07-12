function start_button(){

    navigator.mediaDevices.getUserMedia({audio :true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PW-Yz4ctw/model.json", model_loaded);
    
}


function model_loaded(){

    console.log("model is loaded");
    classifier.classify(gotResults);
}

function gotResults(error, results){

    if(error){

        console.error(error);

    }
    else{

        console.log(results);
        document.getElementById("result_sound").innerHTML = "I can Hear - "+results[0].label;
        document.getElementById("accuracy_result").innerHTML = "Accuracy - "+(results[0].confidence *100).toFixed(2)+"%";

   

        if (results[0].label == "moooo"){

            document.getElementById("animal").src = "200w.gif";
        }
        else if (results[0].label == "roar"){
        
            document.getElementById("animal").src = "lion-roar-44.gif";
        
        }
        else if (results[0].label == "Barking"){
        
            document.getElementById("animal").src = "bark.gif";
        
        }
        else if (results[0].label == "Meowing"){
        
            document.getElementById("animal").src = "meow.gif";
        
        }
        else {
        
            document.getElementById("animal").src = "ear.png";
        
        }


    }
}
