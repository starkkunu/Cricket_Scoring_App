let teamAScore = 0;
let teamAWickets = 0;
let teamAOvers = 0;

let teamBScore = 0;
let teamBWickets = 0;
let teamBOvers = 0;

let currentTeam = 'A';
let totalOvers = 20;

function setOvers() {
    totalOvers = document.getElementById('overs').value;
}

function addRuns(runs) {
    if (currentTeam === 'A') {
        teamAScore += runs;
        document.getElementById('teamAScore').innerText = teamAScore;
    } else {
        teamBScore += runs;
        document.getElementById('teamBScore').innerText = teamBScore;
    }
    updateOvers();
}

function recordDotBall() {
    updateOvers();
}

function recordWicket() {
    if (currentTeam === 'A') {
        teamAWickets += 1;
        document.getElementById('teamAWickets').innerText = teamAWickets;
    } else {
        teamBWickets += 1;
        document.getElementById('teamBWickets').innerText = teamBWickets;
    }
    updateOvers();
}

function recordWideBall() {
    if (currentTeam === 'A') {
        teamAScore += 1;
        document.getElementById('teamAScore').innerText = teamAScore;
    } else {
        teamBScore += 1;
        document.getElementById('teamBScore').innerText = teamBScore;
    }
}

function recordNoBall() {
    if (currentTeam === 'A') {
        teamAScore += 1;
        document.getElementById('teamAScore').innerText = teamAScore;
    } else {
        teamBScore += 1;
        document.getElementById('teamBScore').innerText = teamBScore;
    }
}

function updateOvers() {
    if (currentTeam === 'A') {
        teamAOvers += 1 / 6;
        document.getElementById('teamAOvers').innerText = Math.floor(teamAOvers) + '.' + Math.floor((teamAOvers % 1) * 6);
        if (teamAOvers >= totalOvers) {
            currentTeam = 'B';
            alert('Innings over! Switch to Team B.');
        }
    } else {
        teamBOvers += 1 / 6;
        document.getElementById('teamBOvers').innerText = Math.floor(teamBOvers) + '.' + Math.floor((teamBOvers % 1) * 6);
        if (teamBOvers >= totalOvers) {
            alert('Match over!');
        }
    }
}
