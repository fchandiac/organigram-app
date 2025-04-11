import { Box, Typography } from '@mui/material';
import { Handle } from 'reactflow';

const roleStyles = {
  principal: {
    backgroundColor: '#154977',
    borderColor: '#9ac8cb',
    textColor: '#fff',
  },
  secondary: {
    backgroundColor: '#1976d2',
    borderColor: '#64b5f6',
    textColor: '#fff',
  },
};

const PNode = ({ data }) => {
  const style = roleStyles[data.role] || roleStyles.default;

  return (
    <Box
      sx={{
        p: 1,
        minWidth: 280,
        minHeight: 50,
        backgroundColor: style.backgroundColor,
        color: style.textColor,
        border: `2px solid ${style.borderColor}`,
        borderRadius: '12px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        position: 'relative',
      }}
    >
      <Handle type="target" position="top" style={{ visibility: 'hidden' }} />
      <Typography>{data.label}</Typography>
      <Handle type="source" position="bottom" style={{ visibility: 'hidden' }} />
    </Box>
  );
};

export default PNode;
