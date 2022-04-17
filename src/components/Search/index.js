import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const SearchField = () => {
  return (
    <Box component="form" noValidate className='mt-2 flex'>
    <TextField
      margin="normal"
      required
      fullWidth
      id="search"
      name="search"
      autoComplete="search"
      autoFocus
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Search
    </Button>
    </Box>
  )
}
