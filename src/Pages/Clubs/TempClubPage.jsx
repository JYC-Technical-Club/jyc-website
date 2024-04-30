import React from 'react'
import ClubPageTemplate from './Template/ClubPageTemplate'
import temp from "./temp.png"

export default function TempClubPage() {
  return (
    <div>
      <ClubPageTemplate
        logo={temp}
        heading="Temporary Club"
        about="UIT Youth Club (JYC) is the name of enthusiasm, development, consistency and effort. It is the body which widens student's view from academics to various fields such as sports, literary, cultural and technical and provides opportunity to explore them. It encourages in student's expression, celebration, recognition and integration. It helps students acquire qualities like team work, sportsmanship and leadership. Not only this, it retreats students from academics load by organizing events, fests and other extra-curricular activities. Focusing on technical, litera"
      />
    </div>
  )
}
