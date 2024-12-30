const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

export const retrievesData = async (contentType) => {
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=${contentType}&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    throw error;
  }
};
