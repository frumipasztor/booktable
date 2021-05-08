import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


const LoadingMask = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          align: 'center',
          justifyContent: 'center',
          '& > * + *': {
            marginLeft: theme.spacing(2),
          },
        },
      }));
    const classes = useStyles();

    return(
        <div className={classes.root}>
                  <CircularProgress />
        </div>
    )
}
export default LoadingMask;