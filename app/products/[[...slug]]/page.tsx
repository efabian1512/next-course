import React from 'react'

interface Props {
    params: { slug: string[]};
    searchParams: {sortOrder: string }
}

const PeoductPage = ({params: {slug }, searchParams: { sortOrder }}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  )
}

export default PeoductPage
