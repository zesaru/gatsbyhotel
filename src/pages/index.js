import React from "react"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hooks/use-habitaciones"

const indexPage = () => {
  //useHabitaciones()

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
    </Layout>
  )
}

export default indexPage
