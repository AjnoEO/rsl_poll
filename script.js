const prob_first = 5; // out of 10
var date = new Date();
var milliseconds = date.getMilliseconds();
poll_number = milliseconds % 10 < prob_first ? 1 : 2;

const form_id = "68c546de90fa7b60e2338c49"; 
const choice_id = 9008957735634384
const params = {
    1: 9008957735634394,
    2: 1758480912996
};
window.location.replace("https://forms.yandex.ru/cloud/" + form_id + "?answer_choices_" + choice_id + "=" + params[poll_number]);
