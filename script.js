function showThisPC() {
    document.getElementById('this-pc-details').style.display = 'block';
    document.getElementById('home-screen').style.display = 'none';
}

function showAppCreator() {
    document.getElementById('app-creator-form').style.display = 'block';
    document.getElementById('home-screen').style.display = 'none';
}

function goBack() {
    document.getElementById('this-pc-details').style.display = 'none';
    document.getElementById('app-creator-form').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}

function displayTime() {
    const timeElement = document.getElementById('current-time');
    setInterval(() => {
        const now = new Date();
        timeElement.textContent = now.toLocaleString();
    }, 1000);
}

function createApp() {
    const appName = document.getElementById('app-name').value;
    const appUrl = document.getElementById('app-url').value;
    if (appName && appUrl) {
        alert('App Created: ' + appName + '\nURL: ' + appUrl);
    } else {
        alert('Please fill out both fields.');
    }
}

displayTime();
