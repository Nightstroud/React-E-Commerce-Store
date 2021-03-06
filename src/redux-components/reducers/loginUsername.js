const username = (state = setUse(), action) => {
    switch (action.type) {
        case 'setUsername': {
            if (window.document.getElementById('username').value === '' || window.document.getElementById('username').value === null || window.document.getElementById('username').value === undefined) {
                localStorage.setItem('USERNAME', JSON.stringify('User'));
                return 'User';
            }
            localStorage.setItem('USERNAME', JSON.stringify(window.document.getElementById('username').value));
            return window.document.getElementById('username').value;
        }
        default:
            if (!localStorage.getItem('USERNAME')) {
                return state = 'User';
            }
            else return state;
    }
};

function setUse() {
    if (localStorage.getItem('USERNAME') === null || undefined) {
        localStorage.setItem('USERNAME', JSON.stringify('User'));
    }
    return JSON.parse(localStorage.getItem('USERNAME'));
}

export default username;