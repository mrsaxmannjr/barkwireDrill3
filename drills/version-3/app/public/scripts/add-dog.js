console.log("It worked!");
document.querySelector("form").addEventListener("submit", addDogFunction);

function addDogFunction(event) {
  event.preventDefault();
  fetch("/api/dogs", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(getFormData(event.target)),
  })
    .then(() => {
redirectToDogList();
    });
}

function getFormData(form) {
  let data = new FormData(form);
  return {
    name: data.get("name"),
    profilePicture: data.get("profile-picture"),
    bio: data.get("bio"),
  };
}

function redirectToDogList() {
  window.location.assign("/dogs");
}
