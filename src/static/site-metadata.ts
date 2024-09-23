interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://weiy.xyz',
  logo: 'https://github.com/deant20/picx-images-hosting/raw/master/IMG_9712.2rv3mj4g8q.webp',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.weiy.xyz',
    },
  ],
};

export default data;
