
  const chatContainer = document.querySelector('.chat-container');
  const inputContainers = document.querySelectorAll('.input-container div');
  const buttons = document.querySelectorAll('.input-container button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const input = inputContainers[index].querySelector('input');
      const message = input.value.trim();
      if (message !== '') {
        const messageHTML = `
          <div class="message ${index === 0 ? 'user1' : 'user2'}">
            ${message}
          </div>
        `;
        chatContainer.innerHTML += messageHTML;
        input.value = '';
      }
    });
  });