function displayDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();

    document.getElementById("displayDate").innerHTML = "今天是" + year + "年" + month + "月" + date + "日";
}

displayDate();