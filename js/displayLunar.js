function displayLunar() {
    const today = new Date();
    const month = today.getMonth() + 1; // 月份从 0 开始计所以+1
    const day = today.getDate();

    if (month === 1 && day === 9) {
        document.getElementById("displayLunar").innerHTML = "农历腊月十八";
    } else if (month === 1 && day === 10) {
        document.getElementById("displayLunar").innerHTML = "农历腊月十九";
    }else if (month === 1 && day === 11) {
        document.getElementById("displayLunar").innerHTML = "农历腊月二十";
    } else if (month === 1 && day === 12) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿一";
    } else if (month === 1 && day === 13) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿二";
    } else if (month === 1 && day === 14) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿三 北小年";
    } else if (month === 1 && day === 15) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿四 南小年";
    }else if (month === 1 && day === 16) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿五";
    }else if (month === 1 && day === 17) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿六";
    }else if (month === 1 && day === 18) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿七";
    }else if (month === 1 && day === 19) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿八";
    }else if (month === 1 && day === 20) {
        document.getElementById("displayLunar").innerHTML = "农历腊月廿九 大寒";
    }else if (month === 1 && day === 21) {
        document.getElementById("displayLunar").innerHTML = "农历腊月三十 除夕";
    }else if (month === 1 && day === 22) {
        document.getElementById("displayLunar").innerHTML = "农历正月初一 春节";
    }else if (month === 1 && day === 23) {
        document.getElementById("displayLunar").innerHTML = "农历正月初二";
    }else if (month === 1 && day === 24) {
        document.getElementById("displayLunar").innerHTML = "农历正月初三";
    }else if (month === 1 && day === 25) {
        document.getElementById("displayLunar").innerHTML = "农历正月初四";
    }else if (month === 1 && day === 26) {
        document.getElementById("displayLunar").innerHTML = "农历正月初五";
    }else if (month === 1 && day === 27) {
        document.getElementById("displayLunar").innerHTML = "农历正月初六";
    }else if (month === 1 && day === 28) {
        document.getElementById("displayLunar").innerHTML = "农历正月初七";
    }else if (month === 1 && day === 29) {
        document.getElementById("displayLunar").innerHTML = "农历正月初八";
    }else if (month === 1 && day === 30) {
        document.getElementById("displayLunar").innerHTML = "农历正月初九";
    }else if (month === 1 && day === 31) {
        document.getElementById("displayLunar").innerHTML = "农历正月初十";
    }else if (month === 2 && day === 1) {
        document.getElementById("displayLunar").innerHTML = "农历正月十一";
    }else if (month === 2 && day === 2) {
        document.getElementById("displayLunar").innerHTML = "农历正月十二";
    }else if (month === 2 && day === 3) {
        document.getElementById("displayLunar").innerHTML = "农历正月十三";
    }else if (month === 2 && day === 4) {
        document.getElementById("displayLunar").innerHTML = "农历正月十四";
    }else if (month === 2 && day === 5) {
        document.getElementById("displayLunar").innerHTML = "农历正月十五 元宵节";
    }

}

displayLunar();
