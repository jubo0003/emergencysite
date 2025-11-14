const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

function handleSubmit(event) {
  console.log("handleSubmit");
  // 1. undgå refresh
  event.preventDefault();
  // 2. samle data op
  const formData = new FormData(form);
  const firstName = formData.get("fornavn");
  const lastName = formData.get("efternavn");
  const telephone = formData.get("telefonnummer");
  const email = formData.get("email");
  const date = formData.get("dato");
  const city = formData.get("vaelg-by");
  const region = formData.get("vaelg-region");
  const owner = formData.get("hundeejer");
  const dogName = formData.get("hundensnavn");
  const incident = formData.get("haendelse");
  const accept = formData.get("gdpr");
  const agree = formData.get("kontaktMig");

  // 3. vise data
  document.querySelector(".firstName").textContent = firstName;
  document.querySelector(".firstName").textContent = firstName;
  document.querySelector(".lastName").textContent = lastName;
  document.querySelector(".telephone").textContent = telephone;
  document.querySelector(".email").textContent = email;
  document.querySelector(".date").textContent = date;
  document.querySelector(".city").textContent = city;
  document.querySelector(".region").textContent = region;
  document.querySelector(".owner").textContent = owner;
  document.querySelector(".dogName").textContent = dogName;
  document.querySelector(".incident").textContent = incident;
  document.querySelector(".accept").textContent = accept;
  document.querySelector(".agree").textContent = agree;

  // 4. evt. nustil formular

  form.reset();
}

form.addEventListener("submit", handleSubmit);
