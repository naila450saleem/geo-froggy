// Hide Landing Animation after 2 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('landing-overlay').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('landing-overlay').style.display = 'none';
        }, 1000);
    }, 2000);
});

// Tab Switching logic
function showTab(tabName) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
    // Actual tab content switch logic would go here
}

// Country Capsule Logic
function openCapsule(country) {
    document.getElementById('country-name').innerText = country;
    document.getElementById('country-capsule').style.display = "block";
    
    // Set flag based on country
    const flag = document.getElementById('country-flag');
    if(country === 'Brazil') flag.src = "https://flagcdn.com/w160/br.png";
    else flag.src = "https://flagcdn.com/w160/au.png";
}

function closeCapsule() {
    document.getElementById('country-capsule').style.display = "none";
}

// Timeline Slider Logic
const slider = document.getElementById('timeline');
const yearLabel = document.getElementById('year-label');
const popVal = document.getElementById('pop-val');

slider.oninput = function() {
    let year = this.value;
    yearLabel.innerText = year;
    
    // Simple math for kids (Mock data)
    let basePop = 19;
    let growth = (year - 2000) * 0.3;
    popVal.innerText = `About ${Math.round(basePop + growth)} Million`;
    
    // Add "Boop" sound effect or vibration logic here
}