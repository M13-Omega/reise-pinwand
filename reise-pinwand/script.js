document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
    const message = document.getElementById('message').value;

    const response = await fetch('/api/submit-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, destination, message })
    });

    const result = await response.text();
    document.getElementById('response').innerText = result;
});
