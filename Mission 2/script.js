const randomPeopleData = [
    { 
    name: "Person 1", 
    photo: "person.jpg" 
    },
    { 
    name: "Person 2", 
    photo: "person.jpg" 
    },
    { 
    name: "Person 3", 
    photo: "person.jpg" 
    },

];

const randomPeopleList = document.getElementById("randomPeopleList");
const friendList = document.getElementById("friendList");
const friendCountElement = document.getElementById("friendCount");

let friendCount = 0;

function createPersonListItem(person) {
    const listItem = document.createElement("li");
    listItem.className = "random-person list-group-item d-flex align-items-center";

    const photo = document.createElement("img");
    photo.className = "photo";
    photo.src = person.photo;
    photo.width = 30;
    photo.height = 40;
    listItem.appendChild(photo);

    const nameSpan = document.createElement("span");
    nameSpan.textContent = person.name;
    listItem.appendChild(nameSpan);

    const followButton = document.createElement("button");
    followButton.textContent = "Follow";
    followButton.className = "btn btn-primary ms-auto mt-2";
    followButton.addEventListener("click", toggleFollow);
    listItem.appendChild(followButton);

    return listItem;
}

function updateFriendCount() {
    friendCountElement.textContent = friendCount;
}

function toggleFollow(event) {
    const button = event.target;    
    const listItem = button.parentElement;
    const isFriend = listItem.classList.contains("friend");

    if (!isFriend) {
        listItem.classList.remove("random-person");
        listItem.classList.add("friend");
        button.textContent = "Unfollow";
        button.className = "btn btn-danger ms-auto mt-2";
        friendList.appendChild(listItem);
        friendCount++;
    } else {
        listItem.classList.remove("friend");
        listItem.classList.add("random-person");
        button.textContent = "Follow";
        button.className = "btn btn-primary ms-auto mt-2";
        randomPeopleList.appendChild(listItem);
        friendCount--;
    }
    updateFriendCount();
}

randomPeopleData.forEach(person => {
    const listItem = createPersonListItem(person);
    randomPeopleList.appendChild(listItem);
});
