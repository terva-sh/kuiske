const stage = document.querySelector('#mark-stage');
const mark = document.querySelector('#study-mark');
const wordmark = document.querySelector('#study-wordmark');
const buttons = document.querySelectorAll('[data-tone]');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const dark = button.dataset.tone === 'dark';
    stage.classList.toggle('dark', dark);
    mark.src = dark ? 'assets/mark.svg' : 'assets/mark-ink.svg';
    wordmark.src = dark ? 'assets/wordmark-birch.svg' : 'assets/wordmark.svg';
    for (const control of buttons) {
      control.setAttribute('aria-pressed', String(control === button));
    }
  });
}
