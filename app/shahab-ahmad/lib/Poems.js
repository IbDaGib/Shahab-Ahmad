const poems = [
    {
      id: 1,
      title: "Poem 1",
      publishDate: "2021-09-05",
      author: "Shahab Ahmad",
      coverImage: "/images/QWave Spotify Playlist.png",
      excerpt:
        "Today we will create smashed potatoes with some delicious meetballs",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "poem-1",
    },
    {
      id: 2,
      title: "Poem 2",
      publishDate: "2021-08-25",
      author: "Shahab Ahmad",
      coverImage: "/images/QWave Spotify Playlist.png",
      excerpt: "Tuna salad is easy and fast to make plus it is delicious.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "poem-2",
    },
    {
      id: 3,
      title: "Poem 3",
      publishDate: "2021-08-11",
      author: "Shahab Ahmad",
      coverImage: "/images/QWave Spotify Playlist.png",
      excerpt:
        "Chicken soup is one of my favourite foods. It is easy and cheap to make.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis odio facilisis tellus porta ornare. Sed quis dui erat. Ut scelerisque diam ac nibh imperdiet sollicitudin. Ut sit amet ante a nulla aliquet aliquet sit amet in eros. Morbi ultricies imperdiet erat sit amet tincidunt. Nullam eget sollicitudin justo. Donec elementum diam id odio finibus, rhoncus aliquam ante consequat. Integer at blandit dui, non tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ut purus eu nibh bibendum ultrices in nec nisl. Praesent blandit lorem nec tempus faucibus. Cras convallis nisl at faucibus condimentum. Vivamus massa ipsum, viverra vitae molestie quis, tincidunt id tortor. Suspendisse accumsan mollis sapien, vel egestas ante. Aenean non consequat eros. In fringilla commodo laoreet.",
      slug: "poem-2",
    },
  ];
  
  export function getAllPoems() {
    return poems;
  }
  
  export function getAllSlugs() {
    let slugs = [];
    getAllPoems().map((p) => slugs.push(`/poetry/${p.slug}`));
    return slugs;
  }
  
  export function getPoemData(slug) {
    let poem = null;
    getAllPoems().map((p) => {
      if (p.slug === slug) {
        poem = p;
        return;
      }
    });
    return poem;
  }