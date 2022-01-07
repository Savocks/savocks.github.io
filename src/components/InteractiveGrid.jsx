import React, { Component } from 'react';
import { Card, CardActionArea, CardContent, Grid, Paper, Typography } from "@mui/material";


function IteractiveGridItem({ experience, onSelectedExperience }) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ width: '100%' }}>
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

function ElementDescription({description}) {
  return (
    <>
      { description ?
        <Grid
          item
          xs={12}
        >
          <Card sx={{
            p: '2em'
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
      selectedElement: null
    }
    this.handleExperienceSelection = this.handleExperienceSelection.bind(this);
  }

  handleExperienceSelection(selectedElement) {
    const elements = this.props.elements;
    this.setState({
      selectedElement: elements.find(item => item.id === selectedElement)
    });
  }

  render() {
    const elements = this.props.elements;
    const description = this.state.selectedElement ? this.state.selectedElement.description : null;
    return (
      <>
        <Grid
          container
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            width: '100%',
            mb: '1em'
          }}
        >
          {elements.map(experience => <IteractiveGridItem key={experience.id} onSelectedExperience={this.handleExperienceSelection} experience={experience} />)}
        </Grid>
        <ElementDescription description={description}/>
      </>
    );
  }
}

export default InteractiveGrid;
