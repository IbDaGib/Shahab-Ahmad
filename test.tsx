import { graphql } from '/Users/ibrahim/Documents/GitHub/Shahab-Ahmad/gql';

const query = graphql(/* GraphQL */ `
  query MyQuery {
    infoPage {
      subtitle {
        blocks
        links
        value
      }
      content {
        blocks
        links
        value
      }
      kicker
      title
    }
  }
`);

// Fetch the data from the GraphQL endpoint
fetch('https://graphql.datocms.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer 253721c7e7a812883479a842bc6594',
  },
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((data) => {
    const infoPage = data.data.infoPage;

    // Access the DOM elements and set their content
    const titleElement = document.getElementById('title');
    const subtitleElement = document.getElementById('subtitle');
    const contentElement = document.getElementById('content');

    titleElement.textContent = infoPage.title;
    subtitleElement.textContent = infoPage.subtitle.value;
    contentElement.textContent = infoPage.content.value;
  })
  .catch((error) => {
    console.error(error);
  });
