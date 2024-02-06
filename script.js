const toggleDarkMode = () => {
    //toggle dark mode class
    const body = document.body;
    body.classList.toggle("dark-mode");

    //toggle light and dark icons
    const isDarkMode = body.classList.contains("dark-mode");
    document.getElementById("modeToggler").className = `fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`;

    //save current theme to localstorage
    var theme = `${isDarkMode ? 'Dark' : 'Light'}`;
    localStorage.setItem('CurrentTheme', JSON.stringify(theme));

};

let GetTheme = JSON.parse(localStorage.getItem('CurrentTheme'));

if(GetTheme === 'Dark') {
    document.body.classList = "dark-mode";
}