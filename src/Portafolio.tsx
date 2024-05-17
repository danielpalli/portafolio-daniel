import Button from '@mui/material/Button';

export const Portafolio = () => {
  return (
    <>
      <div className="text-2xl underline">Portafolio Daniel</div>
      <div className="bg-red-300">test</div>
      <Button variant="contained">Hello world</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </>
  );
};
