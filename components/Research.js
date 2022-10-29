import React from 'react'

export default function Research({research}) {
  return (
    <section className="py-16 sm:py-28" id="research">
      <h2  className="title">Research</h2>
    <p className="mx-auto w-3/4 max-w-5xl text-xl md:text-2xl py-16  text-gray-900/80  text-center min-w-min">{research}</p>
    </section>
  )
}
