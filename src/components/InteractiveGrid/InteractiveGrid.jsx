import React, { Component } from 'react';
import { Card, CardActionArea, CardContent, Grid, Paper, Typography } from "@mui/material";


function IteractiveGridItem({ experience, onSelectedExperience }) {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card sx={{ maxWidth: '100%' }}>
        <CardActionArea onClick={() => onSelectedExperience(experience.id)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {experience.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {experience.from} - {experience.to}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

function ExperienceDescription({description}) {
  return (
    <>
      { description ?
        <Grid
          item
          xs={12}
        >
          <Card sx={{
            p: '5em 2em'
          }}>
            {description}
          </Card>
        </Grid> :
        null
      }
    </>
  )
}

class InteractiveGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExperience: null
    }
    this.handleExperienceSelection = this.handleExperienceSelection.bind(this);
  }

  handleExperienceSelection(experience) {
    const elements = this.props.elements;
    this.setState({
      selectedExperience: elements.find(item => item.id === experience)
    });
  }

  render() {
    const elements = this.props.elements;
    const description = this.state.selectedExperience ? this.state.selectedExperience.description : null;
    return (
      <>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            mb: '1em'
          }}
        >
          {elements.map(experience => <IteractiveGridItem key={experience.id} onSelectedExperience={this.handleExperienceSelection} experience={experience} />)}
        </Grid>
        <ExperienceDescription description={description}/>
      </>
    );
  }
}

export default InteractiveGrid;
