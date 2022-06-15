export default {
  title: 'Contact',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'General Email',
      name: 'generalEmail',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Tik Tok',
      name: 'tikTok',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}