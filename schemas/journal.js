import slugify from '../utils/slugify'

export default {
  title: 'Journal',
  name: 'journal',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Post Date',
      name: 'postDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Supporting Image',
      name: 'supportingImage',
      type: 'defaultImage',
      description: 'The image used as a support for this article'
    },
    {
      title: 'Content',
      description: "The main content area, use the + button top right to add component blocks",
      name: 'content',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: title => slugify(title)
      },
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