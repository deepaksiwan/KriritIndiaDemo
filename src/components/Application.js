import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";


//we use inline css with material ui
const Application = () => {
    return (
        <>
            <Box>
                <Container>
                  <Box sx={{textAlign:'center',pt:'2rem', pb:'4rem'}}>
                  <Typography variant="h5">Application by complexity rating</Typography>
                    <Typography sx={{pt: "1rem"}} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</Typography>
                  </Box>
                    <Grid container spacing={4}>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Box sx={{
                                    border: '20px solid #f1f3ee', backgroundColor: '#bf85f2', display: 'flex', justifyContent: 'center',
                                    alignItems: 'center', width: '80px', height: '80px', margin: 'auto', borderRadius: '5rem', boxShadow: '0px 0px 12px -2px #0000005e'
                                }}>
                                    <Typography color={'#000'} fontWeight={500} variant="h5">L</Typography>
                                </Box>
                                <Typography py={2} variant="h5" fontWeight={700}>1 Apps</Typography>
                                <Box>
                                    <Typography sx={{
                                        backgroundColor: '#bf85f2',
                                        color:'#fff',
                                        padding: '0.5rem 0rem'
                                    }}>Low</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #999', padding: '10px 0px' }}>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0px' }}>
                                <Typography >demo</Typography>
                                    <Typography >12</Typography>
                                    <Typography >normal</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Box sx={{
                                    border: '20px solid #f1f3ee', backgroundColor: '#00b1ee', display: 'flex', justifyContent: 'center',
                                    alignItems: 'center', width: '80px', height: '80px', margin: 'auto', borderRadius: '5rem', boxShadow: '0px 0px 12px -2px #0000005e'
                                }}>
                                    <Typography color={'#000'} fontWeight={500} variant="h5">M</Typography>
                                </Box>
                                <Typography py={2} variant="h5" fontWeight={700}>6 Apps</Typography>
                                <Box>
                                    <Typography sx={{
                                        backgroundColor: '#00b1ee',
                                        padding: '0.5rem 0rem',
                                        color:'#fff',
                                    }}>Low</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #999', padding: '10px 0px' }}>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0px' }}>
                                <Typography >demo</Typography>
                                    <Typography >12</Typography>
                                    <Typography >normal</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Box sx={{
                                    border: '20px solid #f1f3ee', backgroundColor: '#06b93b', display: 'flex', justifyContent: 'center',
                                    alignItems: 'center', width: '80px', height: '80px', margin: 'auto', borderRadius: '5rem', boxShadow: '0px 0px 12px -2px #0000005e'
                                }}>
                                    <Typography color={'#000'} fontWeight={500} variant="h5">H</Typography>
                                </Box>
                                <Typography py={2} variant="h5" fontWeight={700}>1 Apps</Typography>
                                <Box>
                                    <Typography sx={{
                                        backgroundColor: '#06b93b',
                                        color:'#fff',
                                        padding: '0.5rem 0rem'
                                    }}>Low</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #999', padding: '10px 0px' }}>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0px' }}>
                                  <Typography >demo</Typography>
                                    <Typography >12</Typography>
                                    <Typography >normal</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <Box sx={{
                                textAlign: 'center'
                            }}>
                                <Box sx={{
                                    border: '20px solid #f1f3ee', backgroundColor: '#cb040a', display: 'flex', justifyContent: 'center',
                                    alignItems: 'center', width: '80px', height: '80px', margin: 'auto', borderRadius: '5rem', boxShadow: '0px 0px 12px -2px #0000005e'
                                }}>
                                    <Typography color={'#000'} fontWeight={500} variant="h5">EH</Typography>
                                </Box>
                                <Typography py={2} variant="h5" fontWeight={700}>22 Apps</Typography>
                                <Box>
                                    <Typography sx={{
                                        backgroundColor: '#cb040a',
                                        color:'#fff',
                                        padding: '0.5rem 0rem'
                                    }}>Low</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #999', padding: '10px 0px' }}>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                    <Typography variant="h6" fontWeight={700}>App</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0px' }}>
                                    <Typography >demo</Typography>
                                    <Typography >12</Typography>
                                    <Typography >normal</Typography>
                                    
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>


            </Box>
        </>
    )
}

export default Application;