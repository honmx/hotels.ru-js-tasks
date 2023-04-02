async function loadJson(url) {
  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error(response.status);
  }

  const result = await response.json();
  return result;
}

try {
  loadJson('no-such-user.json')
} catch(err) {
  console.error(err);
}
