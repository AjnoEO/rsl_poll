const prob_first = 5; // out of 10
var date = new Date();
var milliseconds = date.getMilliseconds();
poll_number = milliseconds % 10 < prob_first ? 1 : 2;

const params = new URLSearchParams(window.location.search)
const id = params.get("id")
if (id === null) {
    history.back()
    const p = document.getElementById("text")
    p.textContent = "Невалидная ссылка! Переходите по ссылке, полученной по почте"
} else {
    const formname = "test-forma"
    const field_id = "68d265c8b32c53aae3fc50b7"
    const answer_id = params.get("id") + poll_number
    const url = `https://n7sz0w9a.forms.app/${formname}#${field_id}=${answer_id}`
    window.location.replace(url);
}
