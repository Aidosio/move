import React, {useState} from 'react';
import BgRactengle from "../ui/BgRectangle/BgRactengle";
import CInput from "../ui/CInput/CInput";
import {Alert, Button, Collapse, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import '../../style/SearchForm.css'

const SearchForm = ({searchTerm, setSearchTerm, handleSubmit, error}) => {
    const [open, setOpen] = useState(true);

    return (
        <form className={'search-form'} onSubmit={handleSubmit}>
            <BgRactengle>
                <CInput type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <Button type="submit" variant="contained">Поиск</Button>
            </BgRactengle>
            <br/>
            {error
                ?
                <Collapse in={open}>
                    <Alert
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {error}
                    </Alert>
                </Collapse>
                :
                null
            }
        </form>
    );
};

export default SearchForm;