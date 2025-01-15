import type { CollectionEntry } from 'astro:content'

export type PostKey = 'blog'

export type CollectionPosts = CollectionEntry<PostKey>

export type Pages = 'pages'

export type CollectionPages = CollectionEntry<Pages>

export type LinksData = Array<{
  title: string
  links: Array<{
    text: string
    description?: string
    icon?: string
    href: string
  }>
}>
