document.getElementById('loginBtn').onclick = function() {
    const name = document.getElementById('username').value.trim();
    const code = document.getElementById('seminarCode').value.trim();

    if(!name || !code){
        alert("Please fill all fields!");
        return;
    }

    if(code !== "BCA2025"){ // seminar code
        alert("Incorrect seminar code!");
        return;
    }

    localStorage.setItem('participantName', name);
    location.href = "quiz.html";
}
