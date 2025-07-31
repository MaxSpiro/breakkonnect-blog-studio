import {defineField, defineType} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
    defineField({
      name: 'authorPic',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
