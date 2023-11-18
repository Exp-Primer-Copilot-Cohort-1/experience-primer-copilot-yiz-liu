function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    if (memberValue == "0") {
        document.getElementById("memver").innerHTML = "Please select a member";
    } else {
        document.getElementById("memver").innerHTML = "You selected " + memberText;
    }
}
    