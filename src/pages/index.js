//import; dodavanje komponenti za prikaz na stranici

import React from "react"

import ContactBar from '../components/contactBar'

import NavigationHeader from '../components/NavigationHeader'

import Footer from '../components/Footer'

//ContactBar tag (moduralan) se mijenja sa kodom iz foldera u komponentama
//logicno Home!!!!!!!!
const IndexPage = () => (
  <main>
    <ContactBar /> 
    <NavigationHeader activeTab="Home" />
    <Footer />
 
  </main>
)

export default IndexPage