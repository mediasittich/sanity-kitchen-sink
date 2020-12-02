export default {
  widgets: [
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
                  buildHookId: '5fc7a1da4b9e277de2d30bf3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uh26nkir',
                  apiId: 'c7df27e7-a287-4f6c-af73-4c71c1afec00'
                },
                {
                  buildHookId: '5fc7a1db7462ceab73690134',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-x2j8a7ro',
                  apiId: 'bba4c364-0584-46d9-b2e7-cdc8c0b8497e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mediasittich/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-x2j8a7ro.netlify.app', category: 'apps'}
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
