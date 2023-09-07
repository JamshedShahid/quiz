import React from 'react'

import SecondQuiz from './Home Branches/Secondquiz/SecondQuiz'
import Thirdquiz from './Home Branches/Thirdquiz/Thirdquiz'
import Fouthquiz from './Home Branches/FourthQuiz/Fouthquiz'
import FirstQuix from './Home Branches/Firstquiz/FirstQuix'
import Articales from './Home Branches/articales/first/Articales'
import Articalesec from './Home Branches/articales/secart/Artcalesec'
import Articalethi from './Home Branches/articales/third art/Articalesthi'
import ArticaleFou from './Home Branches/articales/fourart.jsx/fouthart'



const Home = () => {
  return (
    <div>
      <div>
        <FirstQuix/>
        <SecondQuiz />
        <Thirdquiz />
        <Fouthquiz />
        <Articales />
        <Articalesec />
        <Articalethi />
        <ArticaleFou />
        
      </div>
    </div>
  )
}

export default Home
