
import styled from 'styled-components';

interface PublishButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  type: 'Publish' | 'Update',
}


export const PublishButton: React.FC<PublishButtonProps> = ({ onClick, type }) => {
  return (
    <StyledWrapper>
      <button className='my-10' onClick={onClick}>
        {type}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 12.5px 30px;
    border: 0;
    border-radius: 100px;
    background-color: #2ba8fb;
    color: #ffffff;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  button:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
    transform: scale(1.1);
  }

  button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
  }`;

