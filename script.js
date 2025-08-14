const container = document.getElementById("user-container");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
    container.innerHTML = "<p>Loading data...</p>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then(users => {
            container.innerHTML = "";
            users.forEach(user => {
                const card = document.createElement("div");
                card.classList.add("user-card");
                card.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>City:</strong> ${user.address.city}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
}

// Load data initially
fetchUsers();

// Reload button
reloadBtn.addEventListener("click", fetchUsers);
