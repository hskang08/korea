let searchIcon = document.querySelector('.search-icon')

const openNav = () => {
    document.querySelector('#mySidenav').style.width = '100%';
    searchIcon.style.display = 'none';
};

const closeNav = () => {
    document.querySelector('#mySidenav').style.width = '0';
    searchIcon.style.display = 'block';
}
