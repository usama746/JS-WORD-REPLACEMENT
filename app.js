function countWord1() {
   let postArea = document.getElementById("main1");
   postArea.classList.toggle("postAreaHidden");
}

function findWord1() {
   let postArea = document.getElementById("main2");
   postArea.classList.toggle("postAreaHidden");
}

function countWord2() {
   let text = document.getElementById("mainText").value;
   let word = document.getElementById("countWordText").value;

   let wordCount = 0;

   for (var i = 0; i < text.length; i++) {
      if (text.slice(i, i + word.length) === word) {
         wordCount++;
      }
   }

   document.getElementById("textCount").innerText =
      "There are " + wordCount + " occurrences of '" + word + "' in the text";
}

function findWord2() {
   let text = document.getElementById("mainText").value;
   let word = document.getElementById("findWordText").value;
   let replaceWord = document.getElementById("replaceWordText").value;

   for (var i = 0; i < text.length; i++) {
      if (text.slice(i, i + word.length) === word) {
         text = text.slice(0, i) + replaceWord + text.slice(i + word.length);
      }
   }

   document.getElementById("replaceText").innerText = text;
}
