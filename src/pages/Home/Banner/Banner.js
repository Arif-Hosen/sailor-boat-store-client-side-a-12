import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'We provide actual price of the product as market price.',
        imgPath:
            'https://image.freepik.com/free-photo/man-travelling-by-boat-san-sebastian_23-2149121010.jpg',
    },
    {
        label: 'Customers can get help and find answers to questions as soon as they come up—24/7 and in real-time.',
        imgPath:
            'https://image.freepik.com/free-photo/luxury-big-yacht-stay-sea-around-island-background-sky_8353-6005.jpg',
    },
    {
        label: 'We makes customers feel more valued, which inspires greater brand loyalty',
        imgPath:
            'https://image.freepik.com/free-photo/moored-yacht-mediterranean-sea-port-buildings-street-greenery-barcelona-spain_1268-18014.jpg',
    },
    {
        label: 'We provide actual price of the product as market price.',
        imgPath:
            'https://image.freepik.com/free-photo/marine-parking-boats-yachts-turkey-yacht-docked-sea-port_158595-6952.jpg',
    },
];

function Banner() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 555,
                                    display: 'block',

                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}

                    </div>


                ))}


            </AutoPlaySwipeableViews>

            <Paper
                square
                elevation={0}
                sx={{
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography style={{ fontSize: 25, color: 'red', backgroundColor: '', marginTop: -300 }} sx={{ mx: 'auto', zIndex: 2 }}>{images[activeStep].label}</Typography>
            </Paper>

            {/* <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            /> */}
        </Box>
    );
}

export default Banner;