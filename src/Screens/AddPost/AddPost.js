import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { SubmitPost } from '../../api/actions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    menu: {
        width: 200,
    },
}));



const AddPost = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({

    });

    const handleChange = name => event => {
        setValues({ ...values, title: event.target.value });
    };
   
    const addpost = async () => {

        try {
            const result = await SubmitPost(values);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    const imageInput = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function () {
            console.log(reader.result);
            setValues({...values,image_url:reader.result})   
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

    }
    console.log(values);
    
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="standard-name"
                label="Add Title"
                className={classes.textField}
                onChange={handleChange('name')}
                margin="normal"
            />
            <input onChange={imageInput} type="file" />
            {/* <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                    Upload
             </Button>
            </label> */}
            <Button variant="contained" color="primary" className={classes.button} onClick={addpost}>
                Submit
      </Button>
        </form>)

}
export default AddPost