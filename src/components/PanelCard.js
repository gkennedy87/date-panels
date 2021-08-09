import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {format} from 'date-fns'
import { date } from 'language-tags';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    cursor: 'pointer'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    borderRadius: '20%',
    border: '2px solid red',
    marginBottom: '2em',
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    height: 'auto',
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1em'
  }
});

export default function PanelCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [open, setOpen] = useState(false);
  const [final, setFinal] = useState(0);
  const [count, setCount] = useState(final);


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setCount(0)
    setOpen(false)
  }

  const handleSave = () => {
    setFinal(count)
    setOpen(false)
  }
  
  const formatDate = () => {
    const result = format(new Date(), 'yyyy年MM月dd日')
    return result
  }

  const generateDayKanji = () => {
    const date = new Date()
    const day = date.getDay(date);
     switch(day) {
        case 0:
            return ('日');
            break;
        case 1:
            return ('月');
            break;
        case 2:
            return ('火');
            break;
        case 3:
            return ('水');
            break;
        case 4:
            return ('木');
            break;
        case 5:
            return ('金');
            break;
        case 6:
            return ('土');
            break;
        default:
            console.log('There is something wrong with the date')
    }
  }

  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    if (count > 0) {
    setCount(count-1) }
    else {
      setCount(0)
    }
  }


  return (
    <>
    <Card className={classes.root} variant="outlined" onClick={handleOpen}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {formatDate(date)} ({generateDayKanji()}）
        </Typography>
        <Typography variant="h5" component="h2">
          <h1>{final}</h1>
        </Typography>
        <Typography variant="body2" component="p">
          This is a replica. Cannot show original work due to NDA. <br>
          </br>It shows the base functionality of the Japanese formatted dates and drink counter.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className= {classes.modal}
      >
        <DialogTitle id="alert-dialog-title">Edit Drink Tally</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={classes.modalContent}>
              <Button onClick={decrement} color="primary">
                -
              </Button>
                <h1>{count}</h1>
                <Button onClick={increment} color="primary">
                +
              </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
          <Button onClick={handleSave} color="primary" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
