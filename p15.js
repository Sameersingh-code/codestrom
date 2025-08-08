// Get elements
const inputField = document.getElementById('p1');
const submitBtn = document.getElementById('submit');
const chatSection = document.querySelector('.chatsection');

// Event listeners
submitBtn.addEventListener('click', sendMessage);
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    let userMessage = inputField.value.trim();
    if (!userMessage) return;

    // Display user message
    appendMessage(userMessage, 'userchat', 'https://cdn-icons-png.flaticon.com/512/1487/1487169.png');

    // Generate bot reply
    let botReply = getBotResponse(userMessage);

    // Display bot message after short delay
    setTimeout(() => {
        appendMessage(botReply, 'aichat', 'https://cdn.iconscout.com/icon/premium/png-256-thumb/chatbot-1579751-1335677.png');
    }, 500);

    // Clear input
    inputField.value = '';
}

function appendMessage(text, className, imgUrl) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(className);

    const textDiv = document.createElement('div');
    textDiv.classList.add(className === 'userchat' ? 'usertext' : 'aitext');
    textDiv.textContent = text;

    const img = document.createElement('img');
    img.src = imgUrl;

    if (className === 'aichat') {
        messageContainer.appendChild(img);
        messageContainer.appendChild(textDiv);
    } else {
        messageContainer.appendChild(img);
        messageContainer.appendChild(textDiv);
    }

    chatSection.appendChild(messageContainer);
    chatSection.scrollTop = chatSection.scrollHeight; // Auto scroll
}

function getBotResponse(input) {
    const msg = input.toLowerCase();

    // Example responses — replace or expand with your own
    if (msg.includes('want') || msg.includes('want to')) {
        return 'I’m here to help. Can you describe your issue in detail?';
    } 
    else if (msg.includes('saw')) {
        return 'Thank you for sharing. Please answer a few questions so we can process your report better.';
    } 
    else if (msg.includes('ask me')) {
        return 'What type of corruption are you reporting?';
    } 
      else if (msg.includes('ry')) {
        return 'Where did this happen? (Department, Location)';
    } 
      else if (msg.includes('/,')) {
        return 'Please describe the incident in detail.';
    } 
      else if (msg.includes('2000')) {
        return 'Do you have any evidence (images/audio)?';
    } 
     else if (msg.includes('recording')) {
        return 'When did this happen?';
    } 
     else if (msg.includes('2025')) {
        return 'Would you like to stay anonymous?';
    } 

    else {
        return "Thank you. Your report has been submitted successfully.🔐 Your Case ID is: CRP-AGRI-5792 You can follow up later using this ID.";
    }
}
