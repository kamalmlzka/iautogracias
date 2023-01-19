const options = ['Puas', 'Ya', 'Setuju'];
[...document.querySelectorAll('.answerlist1')].forEach((answer) => {
  if (options.includes(answer.innerText)) {
    answer.parentElement
      .getElementsByClassName('answerlist2')[0]
      .children[0].click();
  }
	$('[name="button"]').click();
});
