//import; dodavanje komponenti za prikaz na stranici

import React from "react"

import ContactBar from '../components/contactBar'

import NavigationHeader from '../components/NavigationHeader'

//ContactBar tag (moduralan) se mijenja sa kodom iz foldera u komponentama

const IndexPage = () => (
  <main>
    <ContactBar /> 
    <NavigationHeader />
  </main>
)

export default IndexPage