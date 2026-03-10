const sharedContent = `
    <footer>
        <div class="container" style="display: flex; justify-content: space-between; align-items: center; ">
            <p style="margin: 0;font-size: 0.9rem; color: #bbbbbb;">Bc. Šárka Radová Blažejová, Palkovice 742, 73 941 &nbsp;Palkovice, &nbsp; tel.+420 777 727 536 &nbsp;&bull; <a href="/gdpr/" style="color: var(--accent); text-decoration: none;">Ochrana údajů</a> &nbsp;&bull; <a href="#" onclick="showCookieBar(); return false;" style="color: var(--accent); text-decoration: none;">Cookies</a></p>
            <p style="margin: 0; color: #bbbbbb;">
        </div>
    </footer>

    <div id="cookie-bar" class="cookie-bar">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
            <p style="margin: 0; font-size: 0.9rem;">Tento web používá cookies k analýze návštěvnosti.</p>
            <button onclick="acceptCookies()" style="background: var(--accent); color: white; border: none; padding: 8px 20px; border-radius: 4px; cursor: pointer;">Rozumím</button>
        </div>
    </div>
`;
window.decodeEmail = function(el) {
    const user = "sarka";
    const domain = "odhady-fm.cz";
    const email = user + "@" + domain;
    
    el.href = "mailto:" + email;
    el.innerText = email;
    el.onclick = null; // Změní se na běžný odkaz
};
document.body.insertAdjacentHTML('beforeend', sharedContent);

window.acceptCookies = function() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-bar').style.display = 'none';
}

window.showCookieBar = function() {
    document.getElementById('cookie-bar').style.display = 'block';
}

window.addEventListener('load', function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-bar').style.display = 'block';
    }
});