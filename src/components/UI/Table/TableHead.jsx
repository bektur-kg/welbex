import React, {useEffect, useState} from 'react'

// Component for dynamic displaying head cells of table
const TableHead = ({data}) => {
  const [headKeys, setHeadKeys] = useState(null)

  useEffect(() => {
    setHeadKeys(Object.keys(data))
  }, [])


  return (
    <thead>
      <tr>
        {
          headKeys?.map(item => (
            <th key={item}>{item}</th>
          ))
        }
      </tr>
    </thead>
  )
}

export default TableHead
