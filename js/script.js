let repoData = [];

async function getRepoData() {
    const refUrl = "https://api.github.com/users/Chr-Dennis/repos";
    try {
        const response = await fetch(refUrl);
        repoData = await response.json();
        console.log("Repo Data fetched");
        console.log(repoData);
    } catch (error) {
        console.error(error);
    }

    return repoData;
}

getRepoData().then(() => {
    let proj1Name = document.getElementById("proj1H3");
    let proj1Desc = document.getElementById("proj1Desc");
    let proj1Index = repoData.findIndex(repo => repo.name === "TheHollerHookbook");
    let proj1URL = repoData[proj1Index].html_url;
    let proj1Anch = document.createElement("a");
    let proj1DescText = repoData[proj1Index].description;
    proj1Anch.href = `${proj1URL}`;
    proj1Anch.target = "_";
    proj1Name.append(proj1Anch);
    proj1Anch.innerText = `${repoData[proj1Index].name}`;
    proj1Desc.append(proj1DescText);
})
    .then(() => {
        let proj2Name = document.getElementById("proj2H3");
        let proj2Desc = document.getElementById("proj2Desc");
        let proj2Index = repoData.findIndex(repo => repo.name === "basic-fetch-practice");
        let proj2URL = repoData[proj2Index].html_url;
        let proj2Anch = document.createElement("a");
        let proj2DescText = repoData[proj2Index].description;
        proj2Anch.href = `${proj2URL}`;
        proj2Anch.target = "_";
        proj2Name.append(proj2Anch);
        proj2Anch.innerText = `${repoData[proj2Index].name}`;
        proj2Desc.append(proj2DescText);
    })
    .then(() => {
        let proj3Name = document.getElementById("proj3H3");
        let proj3Desc = document.getElementById("proj3Desc");
        let proj3Index = repoData.findIndex(repo => repo.name === "poke-fetch-practice");
        let proj3URL = repoData[proj3Index].html_url;
        let proj3Anch = document.createElement("a");
        let proj3DescText = repoData[proj3Index].description;
        proj3Anch.href = `${proj3URL}`;
        proj3Anch.target = "_";
        proj3Name.append(proj3Anch);
        proj3Anch.innerText = `${repoData[proj3Index].name}`;
        proj3Desc.append(proj3DescText);
    })

