import PageWrapper from '@/components/PageWrapper'
import SearchBar from '@/components/SearchBar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <PageWrapper>
        <SearchBar />
    </PageWrapper>
  )
}

export default page