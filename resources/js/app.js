require('./bootstrap');

function changeNotifIcon() {
    let notifButton = document.querySelector(".notif-button");
    notifButton.addEventListener('click', () => {
        if(notifButton.children[0].getAttribute("name") == "notifications-outline"){
            notifButton.innerHTML = '<ion-icon class="text-2xl" name="notifications"></ion-icon>';
        }
        else {
            notifButton.innerHTML = '<ion-icon class="text-2xl" name="notifications-outline"></ion-icon>';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changeNotifIcon();
});