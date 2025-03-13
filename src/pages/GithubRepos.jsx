import React, { useEffect, useState } from "react";

function GithubRepos() {
  const githubUserName = import.meta.env.VITE_GITHUB_USERNAME;
  const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;
  const githubBaseURL = import.meta.env.VITE_GITHUB_BASE_URL;

  const [reposData, setReposData] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const reposURL = `${githubBaseURL}/${githubUserName}/repos`;
      try {
        const response = await fetch(reposURL, {
          headers: {
            Authorization: `token${githubApiKey}`,
          },
        });
        // console.log(response.status);

        if (!response.ok) {
          console.log("Failed to fetch data!");
        }
        const reposData = await response.json();
        setReposData(reposData);
        console.log(reposData);
      } catch (error) {
        console.error("Failed to fetch GitHib repos Data!: ", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h3>GithubRepos</h3>

      {reposData ? (
        <div>
          <ul>
            {reposData.map((repo) => (
              <li key={repo.id} >
                <span className="pr-2">{repo.name}</span>
                <span className="pr-2" >URL: {repo.url}</span>
                <span >Created At: {repo.created_at}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}

export default GithubRepos;
