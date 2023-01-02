import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <Grid container direction='column' justifyContent='center' className='backNot alignItems-center'>
        <h1 className='erro'>ERRO: 404</h1>
        <h2>OPS! PÁGINA NÃO ENCONTRADA</h2>

        <Link to='/home' className='text-decorator-none'>
            <button className='button-not' >
              Página Principal
            </button>
        </Link>
      </Grid>
    </>
  );
}

export { NotFound };