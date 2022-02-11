import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import singletonHome from './singletonHome'
import journal from './journal'

import seo from './common/seo'
import defaultImage from './common/image'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    journal,
    defaultImage,
    seo
  ]),
})
