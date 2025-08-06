import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

type funcionalidad = {
    setOpcionSeleccionada : React.Dispatch<React.SetStateAction<number>>;
    opcionSeleccionada : number ;
}

export function Menu({setOpcionSeleccionada , opcionSeleccionada} : funcionalidad){
    
    const [value, setValue] = useState<number>(opcionSeleccionada);

    const changeOption = (value : number) => {
        setValue(value);
        setOpcionSeleccionada(value);
    }

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
                onChange={(_,value) => changeOption(value)}
                sx={{ backgroundColor: '#ff892f' ,  color : 'white'}}
            >

                <BottomNavigationAction icon={<HomeIcon />} 
                sx={{ color : '#ffd580' , '&.Mui-selected': {
                      color: 'white', // naranja clarito
                    },}}
                />
                <BottomNavigationAction icon={<FavoriteIcon />} 
                sx={{ color : '#ffd580' , '&.Mui-selected': {
                      color: 'white', // naranja clarito
                    },}}
                />

            </BottomNavigation>

        </Paper>
    )

}