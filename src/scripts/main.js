'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.tree li');

  for (const item of listItems) {
    const subtitles = item.querySelector('ul');

    if (subtitles) {
      const titleNode = item.childNodes[0];

      const span = document.createElement('span');

      span.textContent = titleNode.textContent;

      span.style.cursor = 'pointer';

      span.style.userSelect = 'none';

      item.replaceChild(span, titleNode);

      span.addEventListener('click', (ev) => {
        ev.stopPropagation();

        const hidden = subtitles.style.display === 'none';

        subtitles.style.display = hidden ? '' : 'none';
      });
    }
  }
});
