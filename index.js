/// to speech recognition method
var jokes = ['Why should you worry about the math teacher holding graph paper ? She’s definitely plotting something ',
    'Why is it sad that parallel lines have so much in common ? Because they’ll never meet.',
    'Are monsters good at math ?Not unless you Count Dracula.',
    ' Why are obtuse angles so depressed ? Because they’re never right.',
    ' What’s the best way to woo a math teacher ? Use acute angle.',
    ' How do you stay warm in any room ? Sit in the corner, where it’s always 90 degrees.',
    'Why should the number 288 never be mentioned ? It’s two gross.',
    ' Why was the math book sad ? Because it had so many problems.',
    ' Why was six scared of seven ? Because seven “ate” nine.']
const mic = document.querySelector('#mic');
const chatareamain = document.querySelector('.chatarea-main');
const chatareaouter = document.querySelector('.chatarea-outer')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onresult = function (e) {
    let speech = e.resultIndex;
    let transcript = e.results[speech][0].transcript;
    showusermsg(transcript);
    chatbotvoice(transcript);
}
const showusermsg = (usermsg) => {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
const showchatbotmsg = (chatbotmsg) => {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
mic.addEventListener("click", () => {

    recognition.start();
    
})
const chatbotvoice = (message) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = ` Oops! Sorry, I didn't understand your question. `;
    if (message.includes('Who are you?')||message.includes('Who are you') || message.includes('What is your name?')|| message.includes('What is your name')) {
        speech.text = 'I am Robo';
    }

    else if (message.includes('Tell me a joke.')||message.includes('Tell me a joke') || message.includes('Do you know a joke?')|| message.includes('Do you know a joke')) {
        let joke = Math.floor(Math.random() * jokes.length);
        speech.text = jokes[joke];
    }
    else if (message.includes('Who made you?')||message.includes('Who made you')) {
        speech.text = 'Saurabh Singh Tomar Made me'
    }
    else if (message.includes('Are you a robot?')||message.includes('Are you a robot')) {
        speech.text = 'Yes I am a robot, but I’m a good one. Let me prove it. How can I help you?';
    }
    else if (message.includes('Hello.') || message.includes('Hi.')|| message.includes('Hi')) {
        speech.text = 'Hello. How can I help You';
    }

 
    window.speechSynthesis.speak(speech);
    showchatbotmsg(speech.text);
}
