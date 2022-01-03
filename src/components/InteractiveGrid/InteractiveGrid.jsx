import React, { Component } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";

const experienceList = [
  {
    id: 1,
    company: 'Accenture',
    from: 2018,
    to: 2019,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur ipsum nobis? Architecto atque consectetur deserunt est explicabo hic in,'
  },
  {
    id: 2,
    company: 'Capgemini',
    from: 2019,
    to: 'Today',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur ipsum nobis? Architecto atque consectetur deserunt est explicabo hic in,'
  }
]

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

class InteractiveGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExperience: null
    }
    this.handleExperienceSelection = this.handleExperienceSelection.bind(this);
  }

  handleExperienceSelection(experience) {
    this.setState({
      selectedExperience: experienceList.find(item => item.id === experience)
    });
  }

  render() {
    return (
      <>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {experienceList.map(experience => <IteractiveGridItem key={experience.id} onSelectedExperience={this.handleExperienceSelection} experience={experience} />)}
        </Grid>
        <pre>
          <code>{JSON.stringify(this.state.selectedExperience)}</code>
        </pre>
      </>
    );
  }
}

export default InteractiveGrid;
