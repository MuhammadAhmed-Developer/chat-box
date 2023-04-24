import React from 'react'
import ChatHeader from './ChatHeader/ChatHeader'
import SearchBar from './SearchBar'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ChatHeader/>
      <SearchBar/>
    </div>
  )
}
