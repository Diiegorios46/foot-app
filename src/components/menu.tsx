import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function Menu(){
    const [value, setValue] = React.useState(1);

    return (
        <Paper 
            sx={{ 
                position: 'fixed', 
                bottom: 0 , 
                left: 0, 
                right: 0,
                borderRadius: '100px 100px 100px 100px',
                margin: '0 auto',
                maxWidth: 400,
                color : "white"
            }} 
            elevation={3}
            >

            <BottomNavigation
                showLabels={false}
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
                sx={{ backgroundColor: '#ff892f' ,  color : 'white'}}
            >

                <BottomNavigationAction icon={<HomeIcon />} 
                sx={{ color : 'white'}}
                />
                <BottomNavigationAction icon={<FavoriteIcon />} 
                sx={{ color : 'white'}}
                />

            </BottomNavigation>

        </Paper>
    )

}