// An example implementation.
// You can implemnet in your own way.

// Credit: https://blog.logrocket.com/data-fetching-react-suspense/

/* import wrapPromise from './wrapPromise';

function fetchData(url: string) {
  // Can use axios too
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res);

  //console.log(promise);  

  return wrapPromise(promise);
}

export default fetchData; */

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null; // or handle error accordingly
  }
}
export default fetchData; 