import React from "react"
import styles from "./Cards"
import CountUp from "react-countup"
import { Card, CardContent, Typography, Grid } from "@material-ui/core"

import { GiHastyGrave } from "react-icons/gi"
import { MdLocalHospital } from "react-icons/md"
import { AiFillLike } from "react-icons/ai"

import { store } from "../store"
import { Provider } from "react-redux"

import { useSelector } from "react-redux"
import { selectDaily } from "../covidSlice"

const Cards: React.FC = () => {
  const daily = useSelector(selectDaily)
  return (
    // <div className={styles.container}>
    <Provider store={store}>
      <div className="container">
        <Grid container spacing={1} justify="center">
          {/* <Grid item xs={12} md={3} component={Card} className={styles.infected}> */}
          <Grid item xs={12} md={3} component={Card} className="infected">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <MdLocalHospital />
                Infected persons
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={daily[daily.length - 1].Confirmed}
                  duration={1.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Grid>
          {/* <Grid item xs={12} md={3} component={Card} className={styles.recovered}> */}
          <Grid item xs={12} md={3} component={Card} className="recovered">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <AiFillLike /> Recovered persons
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={daily[daily.length - 1].Recovered}
                  duration={1.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Grid>
          {/* <Grid item xs={12} md={3} component={Card} className={styles.deaths}> */}
          <Grid item xs={12} md={3} component={Card} className="deaths">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <GiHastyGrave />
                Dead persons
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={daily[daily.length - 1].Deaths}
                  duration={1.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </Provider>
  )
}

export default Cards
