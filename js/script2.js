// mailto:<MAIL>?subject=<subiect>&body=<mesaj>

const name = document.getElementById("name")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", sendMsg)

const emailLink = "mailto:ceva@gmail.com"

function sendMsg(event){
    event.preventDefault()
    const url = emailLink + "?subject=" + subject.value + "&body=" + "New message from " + name.value + " " + message.value;
    
    window.location.href = url

    subject.value = ""
    name.value = ""
    message.value = ""
}