import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {
    Avatar,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    CardContent,
    CardHeader,
    Box,
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core';



import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const RejectPopup = (props) => {
    const { show, handleClose, handlerejected, rejectId } = props
    const [reason, setReason] = useState("")
    const [val, setVal] = useState(true)

    const classes = useStyles();


    const handleChange = (event) => {
        setReason(event.target.value);
        setVal(false)
    };

    const handleSubmit = (e) => {
        handlerejected(rejectId, reason)
        setReason("")
        handleClose()

    }

    const rejectValues = [{ name: 'Screening Reject', value: 'Screening Reject' }, { name: 'Candidate Not Interested', value: 'Candidate Not Interested' }, { name: 'High Expectation', value: 'High Expectation' }, { name: 'Unwilling to relocate', value: 'Unwilling to relocate' }, { name: 'Communication', value: 'Communication' }, { name: 'Notice Period', value: 'Notice Period' }, { name: 'Discard', value: 'Block' }]

    return (<div>
        <Dialog
            open={show}
            onClose={() => handleClose()}
            style={{ padding: 2 }}
        >
            <DialogTitle>Rejection Reason</DialogTitle>
            < DialogContent>
                <div>
                    <FormControl variant="outlined" className={classes.formControl} autoWidth={false}>
                        <InputLabel id="demo-simple-select-outlined-label">Reason for rejection</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={reason}
                            onChange={handleChange}
                            label="Reason for rejection"
                        >
                            {
                                rejectValues.map((ele) => {
                                    return (<MenuItem value={ele.value}>{ele.name}</MenuItem>)
                                })
                            }

                        </Select>
                    </FormControl><br />
                    <p>&nbsp;&nbsp;&nbsp;<Button variant="contained" color="primary" disabled={val} onClick={handleSubmit}>Submit</Button></p>
                </div>
            </DialogContent>

        </Dialog>

    </div>)
}

export default RejectPopup
