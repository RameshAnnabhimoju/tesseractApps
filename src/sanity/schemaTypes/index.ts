import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { blogPostType } from './blogPostType'
import { categoryType } from './categoryType'
import { jobListingType } from './jobListingType'
import { pricingPlanType } from './pricingPlanType'
import { releaseNoteType } from './releaseNoteType'
import { seoType } from './seoType'
import { teamMemberType } from './teamMemberType'

export const schemaTypes = [
  seoType,
  blockContentType,
  authorType,
  categoryType,
  blogPostType,
  teamMemberType,
  releaseNoteType,
  pricingPlanType,
  jobListingType,
]
