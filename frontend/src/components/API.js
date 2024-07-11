export const getWords = async (lang) => {
  try{
    const url = `http://localhost:3001/api/${lang}/words`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }

    const words = await response.json();
    return words;
  } catch (error) {
    console.error(error);
    return [];
  }
}
