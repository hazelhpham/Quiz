const topicFiles = [
  "math",
  "geography",
  "music",
  "films",
  "sports",
  "general knowledge",
];
let userSearch = document.getElementById("search-input");

const searchTopic = () => {
  const val = document.getElementById("search-input").value.toLowerCase();
  console.log(val);
  let checkVal = topicFiles.includes(val);
  if (checkVal === true) {
    homeContainer.setAttribute("hidden", true);
    const searchPage = document.getElementById("search-file");
    searchPage.insertAdjacentHTML(
      "beforeend",
      ` <h3> Found! </h3>
      <div class="row">
      <div class="col-sm-3 quiz_card search_card"> <input
    type="checkbox"
    id=""
    name="topicChoice"
    value="${val}"
    class="checkbox-inline topicChoice"
  />
  ${val.toUpperCase()} </div>
    </div>
    <div class="topic-submit">
    <button
      class="submit-btn"
      id="submitChoosingQuiz"
      type="submit"
      onclick="submitTestQuiz()"
    >
      Start quiz!
    </button>
    </div> `
    );
    userSearch.value = "";
  } else {
      alert("Quiz does not exist!");
      userSearch.value = "";
  }
};


userSearch.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    searchTopic();
  }
});
