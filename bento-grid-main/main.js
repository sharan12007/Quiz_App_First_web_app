const questions = [
    {
      question: "Which is the largest animal in the world?",
      options: ["Shark", "Blue Whale", "Elephant", "Giraffe"],
      answer: "Blue Whale"
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  let question_container=document.querySelector(".question-container-1");
  let options_container=document.querySelector(".options-container");
  let btn_container=document.querySelector(".btn-container");
  let thankyou=document.querySelector(".thank_resopnse");
  let btn=document.querySelector(".btn");


  function generate_question(currentIndex){
    question_container.innerHTML="";
    options_container.innerHTML="";
    let question=questions[currentIndex];
    let options=question.options;
    let newelement=document.createElement("p");
    newelement.textContent=question.question;
    newelement.style="color: darkblue;font-size: 18px;font-weight: bold;cursor: default ;";
    question_container.appendChild(newelement);
    options.forEach(option=>{
        let newelement=document.createElement("div");
        newelement.textContent=option;
        newelement.classList.add("child");
        options_container.appendChild(newelement);     
    });
    let new_options=document.querySelectorAll(".child");
    new_options.forEach(option=>{
        option.addEventListener("click",()=>{
            const allOptions = document.querySelectorAll(".child");
            allOptions.forEach(opt => opt.style.pointerEvents = "none");
            if(option.innerHTML==question.answer){
                option.style.backgroundColor="green";
                score++;
            }else{
                option.style.backgroundColor="red";
                options.forEach(opt=>{
                    if(opt.innerHTML==question.answer){
                        opt.style.backgroundColor="green";
                    }
                });

            }

        });
    });
    btn.style.display="block";

      
}
btn.addEventListener("click",()=>{
        currentIndex++;
        if(currentIndex<questions.length){
            generate_question(currentIndex);
        }else{
            question_container.innerHTML="";
            options_container.innerHTML="";
            btn.style.display="none";

            let newelement=document.createElement("p");
            newelement.textContent="Quiz completed !! :)";
            newelement.style="color: darkblue;font-size: 18px;font-weight: bold;cursor: default ;margin-top: 10px;";
            thankyou.appendChild(newelement);
            let newelement2=document.createElement("p");
            newelement2.textContent="Your score is "+score;
            newelement2.style="color: darkblue;font-size: 18px;font-weight: bold;cursor: default ;margin-top: 10px;";
            thankyou.appendChild(newelement2);
            let reset=document.createElement("button");
            reset.textContent="Reset";
            reset.classList.add("btn-reset");
            thankyou.appendChild(reset);
            reset.style.marginTop="10px";
            reset.addEventListener("click",()=>{
                thankyou.innerHTML="";
                currentIndex=0;
                score=0;
                btn.style.display="block";
                generate_question(currentIndex);

            });
          

            
        }
    });

    
  window.onload=()=>{
    generate_question(currentIndex);
  }


  
  
  