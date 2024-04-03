// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{ 
                type: "radiogroup",
                name: "question1",
                title: "What is a PFD",
                choices: [
                    "Personal Flotation Device", "Portable Flotation Device", "Phone Finder Device", "People Finding Divers"
                ],
                correctAnswer: "Personal Flotation Device"
            }, 
            {
                type: "radiogroup",
                name: "question2",
                title: "If there are 4 people on a boat how many life jackets should you have aboard?",
                choices: [
                    "1", "2", "4", "5"
                ],
                correctAnswer: "4"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "True or false: Boat lights are required when traveling at night?",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "Which items should be located on a boat at all times?",
                choices: [
                    "Lifejacket", "Fire Extinguishers", "Wistle ", "All of the above"
                ],
                correctAnswer: "All of the above"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "At what age are you allowed to operate a boat with 40hp?",
                choices: [
                    "12", "14", "16", "18"
                ],
                correctAnswer: "12"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "True or False: Pets (like dogs and cats) are allowed on boats?",
                choices: [
                    "True", "False"
                ],
                correctAnswer: "True"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "Do you need a boaters licence to drive a boat?",
                choices: [
                    "No", "Yes", "Only need one if its a large boat"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "Children under what age are required to wear a life jacket?",
                choices: [
                    "5", "8", "12", "They dont need one if they can swim"
                ],
                correctAnswer: "12"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "What is the most common cause of boating injuries?",
                choices: [
                    "Boat fires", "Wind", "Sunburns", "Falling overboard"
                ],
                correctAnswer: "Falling overboard"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "What is the number one contributing factor to boating deaths in Canada?",
                choices: [
                    "Capsized boat", "Failure to wear PFD", "Severe weather", "Sharks"
                ],
                correctAnswer: "Failure to wear PFD"
            }];
            const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Boating Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Boating Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}