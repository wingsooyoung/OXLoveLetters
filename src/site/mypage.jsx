import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function BasicModal() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

function ContainerBox() {
    const { customData } = useContext(EleventyContext);

    

    return (
        <div
            className="containerbox grid-item"
            // onClick="modalZoom(this)"
            onClick={handleOpen}
            >

            <img
                src={customData.source}
                alt={customData.altText}
            />
                    
            <div 
                id="contentbox" 
                className="template"> 
                {customData.content}
            </div>

            <div 
                id="namebox" 
                className="template"> 
                {customData.content}
            </div>
                
            <div 
                id="lettercount" 
                className="template"> 
                {customData.content}
            </div>

            <div 
                id="membersbox" 
                className="template">
                {customData.content}
            </div>
        </div>
    )
}


function GridContainer() {
    return (
        <div 
            className="grid-container">
            <ContainerBox />
            <ContainerBox />
            <ContainerBox />
        </div>
    )
}

function MyPage() {
    // Access to anything from the data cascade, including page data
    // and Eleventy supplied data from https://www.11ty.dev/docs/data-eleventy-supplied/
    const { title, customData, page } = useContext(EleventyContext);

    return (
        <>
            <h1 className={customData.foo}>{title}</h1>
            <p>URL: {page.url}</p>
            <GridContainer />
            <BasicModal />
        </>
    );
}

//BELOW: template front matter, but for js/jsx files
MyPage.data = {
    layout: 'layouts/base.njk', //THIS WORKS!!!!  I CAN USE REACT COMPENENTS ON MY PRE-STYLED BASE LAYOUT PAGE!!!
    title: 'Hello world',
    customData: {
        foo: 'bar',
        source: '/assets/small borders postcard.svg',
        altText: 'this is the image desc',
        content: 'this is the placeholder text'
    },
};

export default MyPage;