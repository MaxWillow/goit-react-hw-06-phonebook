export function saveToLS(state) {
  try {
    const existedData = JSON.stringify(state);
    localStorage.setItem('state', existedData);
  } catch {
    // eslint-disable-next-line no-alert
    alert('Something went wrong...');
  }
}

export function loadStateFromLS() {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}
