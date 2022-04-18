import React from 'react'
import { Card } from './Card'

export const DataList = ({dataList}) => {

  return (
    <>
    <div style={{display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: '0.875rem', rowGap: '0.875rem'}}>
    {
        dataList ? dataList.map((item) => (
            <Card id={item.id} first_name={item.first_name} last_name={item.last_name} email={item.email} avatar={item.avatar} />
            )) : <></>
    }
    </div>
    </>
  )
}
