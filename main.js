// example API KEY(not working)
const API_KEY = "sk-epFAjx3VBySPNc1CPl9YT4BlbkJODMjVum8e5wpSPEAPaV7";

const button_submit = document.querySelector("#button-submit");
const search = document.querySelector("input");
const images_section = document.querySelector(".images-section");

const getImages = async () => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      prompt: search.value,
      n: 4,
      size: "1024x1024",
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );
    const data = await response.json();
    console.log(data);

    data?.data.forEach((img) => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("image-container");
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", img.url);
      imageDiv.append(imageElement);
      images_section.append(imageDiv);
    });
  } catch (error) {
    console.error(error);
  }
};

button_submit.addEventListener("click", getImages);
