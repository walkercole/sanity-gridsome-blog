export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb06280c3906e0174646825',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-apbkr6u7',
                  apiId: 'a8283162-a02a-406f-934b-628a0d7d890e'
                },
                {
                  buildHookId: '5eb06280417a780253c1a637',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-prpd6ixz',
                  apiId: '0569424b-99c4-4c21-a18f-4da6106d367c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/walkercole/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-prpd6ixz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
