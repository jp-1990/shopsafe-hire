import React, { useState } from "react"
import PD365 from "../images/PD365-Front.jpg"
import PD565 from "../images/PD565-Front.jpg"
import PD665 from "../images/PD665-Front.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RadioCard from "../components/RadioCard/RadioCard"
import RadioCardBox from "../components/RadioCardBox/RadioCardBox"
import Wrapper from "../components/Wrapper/Wrapper"
import Title from "../components/Title/Title"
import Modal from "../components/Modal/Modal"

const IndexPage = () => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <Layout>
      <SEO title="Hire" />
      {modalActive ? (
        <Modal
          radioName="PD365"
          modalActive={modalActive}
          modalState={setModalActive}
        />
      ) : null}
      <Wrapper>
        <Title />
        <RadioCardBox>
          <RadioCard image={PD365} title="PD365" modalState={setModalActive} />
          <RadioCard image={PD565} title="PD565" modalState={setModalActive} />
          <RadioCard image={PD665} title="PD665" modalState={setModalActive} />
        </RadioCardBox>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
