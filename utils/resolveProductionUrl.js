const globalSlugs = {
  home: '/',
  journal: '/journal',
}

const secret = 'sk4Ff01yQ9wJNHLA5X0CWlJWV5JJbxUknKqootdtdpoIPmjQEbvwj0lOX9xaV7w8gmE3rvGHQ7EvSSkVDlpy86xzuSvIx6JDDc6sJIoDEGoTdOYFub5POR1d9ihhiMxFs4zu1dDl1yLWPtSUCtH1xWDm4P7EVgoqqoiHqAk6c0MQC6NHM06i'
export const getGlobalSlug = (slug) => globalSlugs[slug]

// TODO: Change remote url
const remoteURL = 'https://palmar.vercel.app/'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/${slug.current}`
  return `${previewURL}/api/preview?secret=${secret}&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
