import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';
import TextField from '@material-ui/core/TextField';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '50ch',
        },
        date: {
            minWidth: '25ch',
            float:'right',
            marginLeft:'30px',
        },

        
   
    },
  }));



const AddNotice = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const classes = useStyles();
    
    return (<div className="AddNotice">
        
        <form className={classes.root} >
    
        <TextField id="outlined-basic" label="Notice Topic" style={{ backgroundColor: "white" }} variant="outlined" />

        <TextField id="outlined-basic" label="Content" style={{backgroundColor:"white"}}    multiline rows={5}variant="outlined" />

            <div >
          <div className={classes.date_upload} >
                   
                    <MuiPickersUtilsProvider utils={DateFnsUtils} className={ classes.date} style={{backgroundColor: 'white'}}>
                    <KeyboardDatePicker margin="normal"  label="Date to be post" id="date-picker-dialog" format="MM/dd/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{  'aria-label': 'change date', }} />
                    </MuiPickersUtilsProvider>
                    <p className={ classes.date}>Select a image: <button className="upload"><CloudUploadRoundedIcon color="action" /></button> </p>
            </div>   
    
                
            </div>
            
            <button  className="input_submit" type="submit" >Submit</button>
    
            </form>
          
    </div>  );
}
 
export default AddNotice;