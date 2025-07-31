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
        hotspot: {
          previews: [
            {
              title: 'Blog page / 1st in grid',
              aspectRatio: 3 / 2,
            },
            {
              title: 'Regular grid',
              aspectRatio: 21 / 16,
            },
          ],
        },
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
        hotspot: {
          previews: [{title: 'Display', aspectRatio: 1}],
        },
      },
    }),
  ],
})
