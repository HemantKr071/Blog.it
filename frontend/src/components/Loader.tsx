
import styled from 'styled-components';

export const ProgressLoader = () => {
  const loaderStyle = {
    width: "120px",
    height: "20px",
    WebkitMask: "radial-gradient(circle closest-side, #000 94%, #0000) left/20% 100%",
    background: "linear-gradient(#000 0 0) left/0% 100% no-repeat #ddd",
    animation: "l17 2s infinite steps(6)"
  };

  const keyframes = `
    @keyframes l17 {
      100% {
        background-size: 120% 100%;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={loaderStyle}></div>
    </>
  );
};




export const CircularLoader = () => {
  const StyledWrapper = styled.div`
  .loader {
    --dim: 3rem;
    width: var(--dim);
    height: var(--dim);
    position: relative;
    animation: spin988 2s linear infinite;
  }

  .loader .circle {
    --color: #333;
    --dim: 1.2rem;
    width: var(--dim);
    height: var(--dim);
    background-color: var(--color);
    border-radius: 50%;
    position: absolute;
  }

  .loader .circle:nth-child(1) {
    top: 0;
    left: 0;
  }

  .loader .circle:nth-child(2) {
    top: 0;
    right: 0;
  }

  .loader .circle:nth-child(3) {
    bottom: 0;
    left: 0;
  }

  .loader .circle:nth-child(4) {
    bottom: 0;
    right: 0;
  }

  @keyframes spin988 {
    0% {
      transform: scale(1) rotate(0);
    }

    20%, 25% {
      transform: scale(1.3) rotate(90deg);
    }

    45%, 50% {
      transform: scale(1) rotate(180deg);
    }

    70%, 75% {
      transform: scale(1.3) rotate(270deg);
    }

    95%, 100% {
      transform: scale(1) rotate(360deg);
    }
  }`;

  return (
    <StyledWrapper>
      <div className="loader">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </StyledWrapper>
  );
}



export const BlogSkeleton = () => {
  const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height:15rem;
    padding: 1rem;
    text-align: center;
    border-radius: .8rem;
    background-color: white;
  }

  .card__skeleton {
    background-image: linear-gradient(
  		90deg,
  		#ccc 0px,
  		rgb(229 229 229 / 90%) 40px,
  		#ccc 80px
  	);
    background-size: 300%;
    background-position: 100% 0;
    border-radius: inherit;
    animation: shimmer 1.5s infinite;
  }

  .card__title {
    height: 15px;
    margin-bottom: 15px;
  }

  .card__description {
    height: 100px;
  }
  .left_Box{
     height:100px;
     width : 100px
  }

  @keyframes shimmer {
    to {
      background-position: -100% 0;
    }
  }`;
  return (
    <StyledWrapper>
      <div className="card">

      <div className="card__skeleton card__title" />
      <div className="card__skeleton card__description">  </div>
  
      </div>
    </StyledWrapper>
  );
}

