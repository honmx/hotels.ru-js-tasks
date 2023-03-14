const names = ['iliakan', 'remy', 'no.such.users'];

const getUsers = async (names) => {
  const baseURL = "https://api.github.com/users";
  const response = await Promise.all(names.map(async name => {
    const userResponse = await fetch(`${baseURL}/${name}`);

    return userResponse.ok ? userResponse.json() : null;
  }));
  
  return response;
}

getUsers(names).then(res => console.log(res));