// List of present tense verbs with their correct past forms
const verbs = [
  ["go", "went"], ["see", "saw"], ["eat", "ate"], ["run", "ran"], ["write", "wrote"],
  ["make", "made"], ["have", "had"], ["do", "did"], ["say", "said"], ["come", "came"],
  ["get", "got"], ["think", "thought"], ["know", "knew"], ["find", "found"], ["take", "took"],
  ["bring", "brought"], ["begin", "began"], ["buy", "bought"], ["feel", "felt"], ["hear", "heard"],
  ["keep", "kept"], ["leave", "left"], ["meet", "met"], ["read", "read"], ["sleep", "slept"],
  ["speak", "spoke"], ["sit", "sat"], ["stand", "stood"], ["teach", "taught"], ["understand", "understood"]
];

// Generate questions dynamically
window.onload = function() {
  const list = document.getElementById("questionList");
  verbs.forEach((pair, i) => {
    const li = document.createElement("li");
    li.innerHTML = `Past tense of "<b>${pair[0]}</b>": <input type="text" name="q${i+1}" placeholder="Type here...">`;
    list.appendChild(li);
  });
};

// Grade the test
function gradeTest() {
  let score = 0;
  verbs.forEach((pair, i) => {
    const answer = document.querySelector(`input[name="q${i+1}"]`).value.trim().toLowerCase();
    const correct = pair[1].toLowerCase();
    if (answer === correct) score++;
  });

  const finalText = `✅ You got ${score} out of ${verbs.length} correct (${Math.round((score/verbs.length)*100)}%)`;
  document.getElementById("finalScore").textContent = finalText;

  // Optional: Add color feedback
  document.getElementById("finalScore").style.color = score > 20 ? "#28a745" : "#dc3545";
}
