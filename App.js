import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MyCollection from "./7dvpgw.json"


const App = () => {
    const CollectionSize = MyCollection.in.length;
    const theme = useTheme();
    const [imgIndex, setActiveStep] = React.useState(0);

    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const goToPrevPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div
            style={{
                alignContent: "center",
                marginTop: "50px",
                marginBottom: "50px",
            }}
        >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={3}>

                    <h2>Image Viewer with VERCEL + REACT</h2>
                    <div
                        style={{
                            maxWidth: 400,
                            flexGrow: 1,
                        }}
                    >
                        <Paper
                            square
                            elevation={0}
                            style={{
                                height: 50,
                                display: "flex",
                                paddingLeft: theme.spacing(3),
                                backgroundColor: theme.palette.background.default,
                                alignItems: "center",
                            }}
                        >
                            <Typography>{MyCollection.in[imgIndex].name}</Typography>
                        </Paper>
                        <img
                            src={MyCollection.in[imgIndex].url}
                            style={{
                                height: 255,
                                width: "100%",
                                maxWidth: 400,
                                display: "block",
                                overflow: "hidden",
                            }}
                            alt={MyCollection.in[imgIndex].name}
                        />
                        <MobileStepper
                            variant="text"
                            position="static"
                            index={MyCollection.in[imgIndex].imageID}
                            steps={CollectionSize}
                            activeStep={imgIndex}
                            backButton={
                                <Button
                                    size="small"
                                    onClick={goToPrevPicture}
                                    disabled={imgIndex === 0}
                                >
                                    {theme.direction !== "rtl" ? (
                                        <KeyboardArrowLeftIcon />
                                    ) : (
                                        <KeyboardArrowRightIcon />
                                    )}
                                    Prev
                                </Button>
                            }
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={goToNextPicture}
                                    disabled={imgIndex === CollectionSize - 1}
                                >
                                    Next
                                    {theme.direction !== "rtl" ? (
                                        <KeyboardArrowRightIcon />
                                    ) : (
                                        <KeyboardArrowLeftIcon />
                                    )}
                                </Button>
                            }
                        />
                    </div>
                    <div>
                        <Box>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Q1. What type of colour is used?
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Black and White"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Black and White" control={<Radio />} label="Black and White" />
                                    <FormControlLabel value="GreyScale" control={<Radio />} label="GreyScale" />
                                    <FormControlLabel value="Colour" control={<Radio />} label="Colour" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Q2. Is colour used for aesthetics or data visualisation?
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Aesthetics"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Aesthetics" control={<Radio />} label="Aesthetics" />
                                    <FormControlLabel value="Data visualisation" control={<Radio />} label="Data visualisation" />
                                    <FormControlLabel value="Not sure" control={<Radio />} label="Not sure" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Q3. Is a colour mapping legend shown?
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Yes"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                    <FormControlLabel value="Not sure" control={<Radio />} label="Not sure" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Q4. Is the colour mapping continuous or categorical?
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Continuous"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="Continuous" control={<Radio />} label="Continuous" />
                                    <FormControlLabel value="Categorical" control={<Radio />} label="Categorical" />
                                    <FormControlLabel value="Not sure" control={<Radio />} label="Not sure" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Q5. How many colour values are used?
                                </FormLabel>
                                <TextField id="standard-basic" label="input numer of colours" variant="standard" />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Q6. How difficult was this image to annotate? (1 being easy and 5 being hard)
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="3"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                    <FormControlLabel value="4" control={<Radio />} label="4" />
                                    <FormControlLabel value="5" control={<Radio />} label="5" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Button variant="contained">submit</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;