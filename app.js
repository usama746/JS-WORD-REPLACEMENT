let text =
   "There was no ring on his finger. That was a good sign although far from proof that he was available. Still, it was much better than if he had been wearing a wedding ring on his hand. She glanced at his hand a bit more intently to see if there were any tan lines where a ring may have been, and he's simply taken it off. She couldn't detect any which was also a good sign and a relief. The next step would be to get access to his wallet to see if there were any family photos in it. They had made it to Las Vegas, wide-eyed and with so much hope and energy. They had planned the trip for more than a year and both were so excited they could barely control themselves.";

document.write(text);

let word = prompt("Enter the word to Find");

let replaceWord = prompt("Enter the word to Repalce");

for (var i = 0; i < text.length; i++) {
   if (text.slice(i, i + word.length) === word) {
      text = text.slice(0, i) + replaceWord + text.slice(i + word.length);
   }
}

document.write("<br> <br> <br>");

document.write(text);
