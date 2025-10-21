import React from 'react'
import { ReactSVG } from 'react-svg'

import * as icons from './IconFile'

const Icon = ({ name, stroke, fill, width, height, className }) => {
  const stringxml = icons[name] || icons['file']

  if (!stringxml) {
    console.error(`Icon "${name}" not found.`)
    return null
  }

  // Convert SVG string to data URI
  const svgDataUri = `data:image/svg+xml;base64,${btoa(stringxml)}`

  return (
    <ReactSVG
      src={svgDataUri}
      beforeInjection={(svg) => {
        // Set dimensions
        if (width) svg.setAttribute('width', width)
        if (height) svg.setAttribute('height', height)

        // Update stroke color
        if (stroke) {
          const elements = svg.querySelectorAll('[stroke]')
          elements.forEach((el) => {
            if (el.getAttribute('stroke') !== 'none') {
              el.setAttribute('stroke', stroke)
            }
          })
        }

        // Update fill color
        if (fill) {
          const elements = svg.querySelectorAll('[fill]')
          elements.forEach((el) => {
            if (el.getAttribute('fill') !== 'none') {
              el.setAttribute('fill', fill)
            }
          })
        }

        // Add className if provided
        if (className) {
          svg.classList.add(className)
        }
      }}
      wrapper='span'
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  )
}

export default Icon
