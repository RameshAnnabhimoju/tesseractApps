import { defineField, defineType } from 'sanity'

export const pricingPlanType = defineType({
  name: 'pricingPlan',
  title: 'Pricing Plan',
  type: 'document',
  orderings: [
    {
      title: 'Industry Tab + Order',
      name: 'tabOrder',
      by: [
        { field: 'industryTab', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'tierName', subtitle: 'industryTab', highlighted: 'isHighlighted' },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({ title, subtitle, highlighted }: any) {
      return {
        title: `${title}${highlighted ? ' ⭐' : ''}`,
        subtitle: subtitle?.toUpperCase(),
      }
    },
  },
  fields: [
    defineField({
      name: 'tierName',
      title: 'Tier Name',
      type: 'string',
      description: 'e.g. "Starter", "Professional"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g. "I Want to Choose What I Want"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industryTab',
      title: 'Industry Tab',
      type: 'string',
      options: {
        list: [
          { title: 'NDIS', value: 'ndis' },
          { title: 'ICT', value: 'ict' },
          { title: 'Retail & Hospitality', value: 'retailAndHospitality' },
          { title: 'Multi-Site Businesses', value: 'multiSiteBusinesses' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Construction', value: 'construction' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order within tab',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'pricingMode',
      title: 'Pricing Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Fixed price per user', value: 'perUser' },
          { title: 'Contact us for pricing', value: 'contactUs' },
          { title: 'Free trial (30 days)', value: 'freeTrial' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pricePerUser',
      title: 'Price Per User ($/month)',
      type: 'number',
      description: 'Only set when Pricing Mode is "Fixed price per user"',
    }),
    defineField({
      name: 'pricingLabel',
      title: 'Pricing Label',
      type: 'string',
      description: 'e.g. "Per user/month"',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuresHeading',
      title: 'Features Section Heading',
      type: 'string',
      description: 'Optional intro line above the features list',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'optionalAddons',
      title: 'Optional Add-ons',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isHighlighted',
      title: 'Most Popular (highlighted)',
      type: 'boolean',
      initialValue: false,
      description: 'Shows the "MOST POPULAR" star badge and highlighted card styles',
    }),
  ],
})
