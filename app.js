const unreadNotifications = document.querySelector('.unread-notifications');
const readAllBtn = document.querySelector('.read-notifications-btn');
const notifications = document.querySelectorAll('.notification');
const redDots = document.querySelectorAll('.red-dot');
let totalUnreadNotifications = 0;

readAllBtn.addEventListener('click', () => {
    for (let i = 0; i < notifications.length; i++) {
        notifications[i].classList.remove('unread');
        unreadNotifications.innerHTML = '';
        unreadNotifications.classList.add('hidden');
        redDots.forEach(redDot => { redDot.classList.add('hidden'); });
    }
});

notifications.forEach((notification, index) => {
    if (notification.classList.contains('unread')) {
        totalUnreadNotifications++;
        unreadNotifications.innerHTML = totalUnreadNotifications;
    }
});
