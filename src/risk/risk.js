// Risk rules

function scoreRisk({ features, user, knownDevice }) {
    let score = 0;

    // typing speed: lower = more suspicious (bot/paste)
    // cpm - charaters per min
    if(features.typingCpm && features.typingCpm < 120) {
        score += 20;
    }

    // Paste used in password
    if(features.pasteUse) {
        score += 20;
    }

    // New Device
    if(!knownDevice) {
        score += 20
    }

    return Math.max(0, Math.min(100, score));
}

function decision(score) {
    if (score < 40) {
        return {action : "allow"}
    }
    if (score < 70) {
        return {action : "stepup"}  // For OTP
    }
    return {action : "block"}
}

module.exports = { scoreRisk, decision };