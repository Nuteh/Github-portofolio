
async function fetchAndDisplayRepositories(username) {
    const repositoriesContainer = document.querySelector('.repositories');

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repositories = await response.json();

        repositories.forEach((repo) => {
            const repositoryBox = document.createElement('div');
            repositoryBox.classList.add('repository-box');

            const repositoryName = document.createElement('div');
            repositoryName.classList.add('repository-name');
            repositoryName.textContent = repo.name.replace(/-/g, ' ');

            const repositoryDescription = document.createElement('div');
            repositoryDescription.classList.add('repository-description');
            repositoryDescription.textContent = repo.description || '   ';

            const repositoryLink = document.createElement('a');
            repositoryLink.classList.add('repository-link');
            repositoryLink.textContent = 'View on GitHub';
            repositoryLink.href = repo.html_url;
            repositoryLink.target = '_blank';

            repositoryBox.appendChild(repositoryName);
            repositoryBox.appendChild(repositoryDescription);
            repositoryBox.appendChild(repositoryLink);

            repositoriesContainer.appendChild(repositoryBox);
        });
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
    }
}

const githubUsername = 'nuteh'; // Replace with your GitHub username

fetchAndDisplayRepositories(githubUsername);