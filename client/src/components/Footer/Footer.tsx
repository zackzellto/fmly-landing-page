import Grid from "@mui/material/Unstable_Grid2";
import dotenv from "dotenv";
import React from 'react'
import './FooterStyles.css'

type Props = {}

const sendEmail = () => {
  window.location.href = `mailto:${process.env.EMAIL_ME}`
}


const Footer = (props: Props) => {
  return (
    <div>
      <Grid>
        <ol>
          <li className="footer-li">
            About
          </li>
          <li className="footer-li">
            <a onClick={sendEmail}>
            Contact
            </a>
          </li>
        </ol>
        </Grid>
        </div>
  )
}

export default Footer