import { useState } from "react";
import Header from "../../components/header/Header";
import { useAuth } from "../../context/AuthContext";
import { Grid, Typography } from "@mui/material";
import SummaryCard from "../../components/SummaryCard";

const HomePage = () => {
    const [reservations, setReservations] = useState(0);
    const { loginResponse } = useAuth();

    const welcomeMessage: string = loginResponse?.username
        ? `Seja bem vindo, ${loginResponse?.username}!`
        : `Seja bem vindo ao CondoPlanner!`;

    const handleOnViewMore = () => {
        console.log('viewmore')
    }

    const handleReserve = () => {
        console.log('reserve')
    }
        
    return (
        <>
            <Header title={welcomeMessage} />
            <Grid container mt={10}>
                <Grid item xs={12}>
                    <Typography
                        variant='h3'
                        mb={4}
                    >
                        Minhas reservas
                    </Typography>
                    <Grid container xs={12}>
                        <Grid item>
                            <SummaryCard 
                                imageSrc={"/demo1.png"} 
                                imageAlt={"oi"} 
                                title={"Oi"} 
                                description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem illo similique quod aspernatur libero corporis hic sequi nobis, deserunt perferendis, magni nostrum eaque consequatur? Repellat, excepturi voluptate mollitia soluta cupiditate blanditiis quas. Tempore voluptatibus quo aspernatur officia, iste officiis dignissimos!"} 
                                onViewMore={handleOnViewMore} 
                                onReserve={handleReserve}                            
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default HomePage;
