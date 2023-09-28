const newYears = '30 Oct 2025'

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentData = new Date()

    const totalSeconds = Math.trunc((newYearsDate - currentData) / 1000 );

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24
    const minutes = (Math.floor (totalSeconds / 60) % 24) % 60
    const seconds = totalSeconds % 60

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = formatTime(hours)

    document.getElementById('minutes').innerHTML = formatTime(minutes)

    document.getElementById('seconds').innerHTML = formatTime(seconds)
}

function formatTime (time){
    return time < 10 ? `0${time}` : time
}

countdown()
setInterval(countdown, 1000)
